import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-trabajadores',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './trabajadores.html',
  styleUrls: ['./trabajadores.scss']
})
export class TrabajadoresComponent implements OnInit {
  trabajadores: any[] = [];

  ngOnInit() {
    // De momento datos mock, luego los traemos de Supabase/NestJS
    this.trabajadores = [
      { id: 1, nombre: 'Juan Pérez', rol: 'Técnico', correo: 'juan@empresa.com' },
      { id: 2, nombre: 'Ana Gómez', rol: 'Vendedora', correo: 'ana@empresa.com' }
    ];
  }
}
