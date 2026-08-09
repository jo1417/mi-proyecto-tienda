import { Injectable } from '@angular/core';
import { addDoc, getDocs, deleteDoc, updateDoc, doc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

@Injectable({
  providedIn: 'root',
})
export class Productos {

async agregarProducto( 
  id: number,
  nombre: string,
  precio: number,
  categoria: string,
  descripcion: string,
  color: string,
  descuento: number,
  imagen: string,
  imagenes: string[]
) {

 const productosRef = collection(db, 'productos');

 await addDoc(productosRef, {
    id,
    nombre,
    precio,
    categoria,
    descripcion,
    color,
    descuento,
    imagen,
    imagenes
  });

  alert('Producto guardado');

}

async obtenerProductos() {

  const productosRef = collection(db, 'productos');

  const snapshot = await getDocs(productosRef);

  return snapshot.docs.map(doc => ({
    docId: doc.id,
    ...doc.data()
  }));

}

async eliminarProducto(docId: string) {

  const productoRef = doc(db, 'productos', docId);

  await deleteDoc(productoRef);

}

async editarProducto(
  docId: string,
  id: number,
  nombre: string,
  precio: number,
  categoria: string,
  descripcion: string,
  color: string,
  descuento: number,
  imagen: string,
  imagenes: string[]
) {

  const productoRef = doc(db, 'productos', docId);

  await updateDoc(productoRef, {
    id,
    nombre,
    precio,
    categoria,
    descripcion,
    color,
    descuento,
    imagen,
    imagenes
  });

}

}
  

