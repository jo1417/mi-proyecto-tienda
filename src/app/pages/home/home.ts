import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carrucel } from "../../components/carrucel/carrucel";
import { Productoss } from '../productoss/productoss';
import { Barrapublicidad } from "../../components/barrapublicidad/barrapublicidad";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Carrucel, Productoss,  Barrapublicidad],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home {}



