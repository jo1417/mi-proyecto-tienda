import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
selector: 'app-footer',
standalone: true,
imports: [CommonModule, RouterModule],
templateUrl: './footer.html',
styleUrl: './footer.css',
})

export class Footer {

    footers = [
        {
           descripcion: 'Desarrollo web • Tecnología • Creatividad',
              email: 'contacto@misitio.com',
              telefono: '+57 304 663 7509',
                texto: '© 2026 MiSitio. Todos los derechos reservados.'
        }
    ];
}