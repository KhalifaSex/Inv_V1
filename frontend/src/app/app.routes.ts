import { Routes } from '@angular/router';
import { TablaexpandibleComponent } from './tablaexpandible/tablaexpandible';
import { TrabajadoresComponent } from './trabajadores/trabajadores';


export const routes: Routes = [
  {path:'tablaexpandible', component: TablaexpandibleComponent }, // ruta raíz muestra tabla
  {path:'trabajadores',component:TrabajadoresComponent}

];
