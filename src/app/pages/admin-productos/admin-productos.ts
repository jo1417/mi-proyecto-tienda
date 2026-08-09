import { Component, OnInit } from '@angular/core';
import { Productos } from '../../services/productos';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-productos',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-productos.html',
  styleUrl: './admin-productos.css',
})
export class AdminProductos implements OnInit {

productoss: any[] = [];
docIdEditando = '';

id = 0;
nombre = '';
precio = 0;
categoria = '';
descripcion = '';
color = '';
descuento = 0;
imagen = '/assets/img/';
imagenes: string[] = [];


constructor(private productos: Productos) {}

async ngOnInit() {
  await this.cargarProductos();
}

async guardarProducto() {
  try {
    await this.productos.agregarProducto(
      this.id,
      this.nombre,
      this.precio,
      this.categoria,
      this.descripcion,
      this.color,
      this.descuento,
      this.imagen,
      this.imagenes
    );

    alert('Producto guardado correctamente');


await this.cargarProductos();

  } catch (error) {
    console.error(error);
    alert('Error al guardar el producto');
  }
}

async cargarProductos() {

  this.productoss = await this.productos.obtenerProductos();

}

async eliminar(docId: string) {

  const confirmar = confirm('¿Deseas eliminar este producto?');

  if (!confirmar) {
    return;
  }

  await this.productos.eliminarProducto(docId);

  await this.cargarProductos();

}

editar(producto: any) {

  this.docIdEditando = producto.docId;

  this.id = producto.id;
  this.nombre = producto.nombre;
  this.precio = producto.precio;
  this.categoria = producto.categoria;
  this.descripcion = producto.descripcion;
  this.color = producto.color;
  this.descuento = producto.descuento;
  this.imagen = producto.imagen;
  this.imagenes = producto.imagenes;


   document.getElementById('admin-productos')?.scrollIntoView({
    behavior: 'smooth'
  });

}

}

