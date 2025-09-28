import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDivider, MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule
  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class NavbarComponent {
  @Output() toggle = new EventEmitter<void>(); // padre usa (toggle)="drawer.toggle()"

  // Badges simulados (puedes enlazarlos a servicios reales)
  unreadMessages = 2;
  unreadNotifications = 5;

  onToggle() {
    this.toggle.emit();
  }

  // placeholder de búsqueda (puedes conectar un servicio)
  searchQuery = '';
  onSearchSubmit() {
    // lógica de búsqueda o emitir evento
    console.log('Buscar:', this.searchQuery);
  }
}
