import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})

export class Navbar {
sidebarOpen: boolean = false;

constructor(
private searchService: SearchService,
private router: Router
) {}

toggleSidebar() {
this.sidebarOpen = !this.sidebarOpen;
}

buscar(texto: string) {
// Actualiza el texto del buscador global
this.searchService.setSearch(texto);

// Redirige a /productos si no estás ahí
if (this.router.url !== '/productoss') {
this.router.navigate(['/productoss']);
}
}
}



