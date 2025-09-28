import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { catchError, finalize } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-tablaexpandible',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './tablaexpandible.html',
  styleUrls: ['./tablaexpandible.scss'],
})
export class TablaexpandibleComponent implements OnInit {
  dataSource: any[] = [];
  columnsToDisplay = ['id', 'nombre', 'cantidad', 'categoria_nombre', 'creado_en'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand', 'acciones'];
  expandedElement: any | null;
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.error = null;

    this.http.get<any[]>('http://localhost:3000/repuestos')
      .pipe(
        catchError(err => {
          console.error('Error al cargar repuestos', err);
          this.error = 'Error al cargar repuestos';
          return of([]);
        }),
        finalize(() => this.loading = false)
      )
      .subscribe(data => this.dataSource = data);
  }

  isExpanded(element: any) {
    return this.expandedElement === element;
  }

  toggle(element: any) {
    this.expandedElement = this.isExpanded(element) ? null : element;
  }
  editarElemento(element: any) {
  console.log('Editar:', element);
  // Aquí puedes abrir un modal o redirigir a otro componente
}

eliminarElemento(element: any) {
  if (confirm('¿Estás seguro de eliminar este elemento?')) {
    console.log('Eliminar:', element);
    // Lógica de eliminación aquí (servicio, etc.)
  }
}

verDetalles(element: any) {
  console.log('Ver detalles:', element);
  // Mostrar modal, dialog o expandir más datos
}

}
