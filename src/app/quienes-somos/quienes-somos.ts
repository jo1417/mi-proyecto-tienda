import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quienes-somos.html',
  styleUrl: './quienes-somos.css',
})
export class QuienesSomos {

subtitulo="QUIENES SOMOS";
tituloA= "mas que dormir";
tituloB= "creamos buenos descansos";
descripcion= "Somos una empresa dedicada a la comercialización de productos para el hogar, ofreciendo camas, colchones, bases, espaldares, nocheros, peinadores, salas, comedores y una amplia variedad de accesorios. Trabajamos cada día para brindar productos de calidad, cómodos, resistentes y a precios justos. Además, contamos con facilidades de pago y opciones de crédito, para que nuestros clientes puedan adquirir lo que necesitan de una manera cómoda y accesible. Nos caracterizamos por ofrecer una atención cercana, confiable y comprometida con las necesidades de cada cliente."
;


tituloABeneficio="Calidad Garantizada";
subtituloABeneficio="productos seleccionados con los mejores materiales";

tituloBBeneficio="Envíos rápidos y seguros";
subtituloBBeneficio=" Llevamos tu pedido hasta la puerta de tu hogar.";

tituloCBeneficio="Atención personalizada";
subtituloCBeneficio="Te asesoramos para que elijas lo mejor para ti.";

textoWhatsapp="Escríbenos por WhatsApp";


tituloACaracteristica="Experiencia";
subtituloACaracteristica="Más de 3 años ayudando a nuestros clientes a descansar mejor.";

tituloBCaracteristica="Compromiso";
subtituloBCaracteristica="Nos comprometemos con tu bienestar y satisfacción total.";

tituloCCaracteristica="Variedad";
subtituloCCaracteristica=" Encuentra todo lo que necesitas para tu descanso en un solo lugar.";

tituloDCaracteristica="Precios justos";
subtituloDCaracteristica="Calidad premium al mejor precio del mercado.";


tituloAEstadistica="+500";
subtituloAEstadistica="Clientes satisfechos";

tituloBEstadistica="+1000";
subtituloBEstadistica="Productos vendidos";

tituloCEstadistica="4.9/5";
subtituloCEstadistica="Calificación de clientes";

tituloDEstadistica="Pereira, Risaralda";
subtituloDEstadistica="Orgullosamente locales";






numeroWhatsApp = '573046637509';

abrirWhatsApp(): void {
  const mensaje = 'Hola, estoy interesado en sus productos.';
  const url = `https://wa.me/${this.numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, '_blank');
}
}
