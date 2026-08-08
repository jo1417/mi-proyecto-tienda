import { Component } from '@angular/core';
import { CarrucelService } from '../../services/carrucel.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-carrucel',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './admin-carrucel.html',
  styleUrl: './admin-carrucel.css',
})
export class AdminCarrucel {

id = 0;
img = '/assets/img/';

constructor(private carrucel: CarrucelService) {}

async guardarCarrucel() {
  try {
    await this.carrucel.agregarCarrucel(
      this.id,
      this.img
    );

    alert('imagen guardada correctamente');

  } catch (error) {
    console.error(error);
    alert('Error al guardar la imagen');
  }
}

}
