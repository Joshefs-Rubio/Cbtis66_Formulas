import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.css']
})
export class MenuInicioComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0);
   }
}
