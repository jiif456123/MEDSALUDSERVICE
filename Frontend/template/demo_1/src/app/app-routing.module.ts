import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CitaVirtualComponent } from './domicilio/citaVirtual/citaVirtual.component';

import { VirtualRoomComponent } from './domicilio/virtualRoom/virtualRoom.component';

import { GestionarCitasComponent } from './citas/gestionar-citas/gestionar-citas.component';
import { GestionarHistoriaComponent } from './citas/gestionar-Historia Clinica/gestionar-historia.component'; 

const routes: Routes = [
 // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 //Pa que funcione la ruta :v 
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},

  { path: "cita-virtual", component:  CitaVirtualComponent , pathMatch: 'full'},
  
  {path: "cita-virtual/:id", component:  VirtualRoomComponent , pathMatch: 'full' },
  
  {path: "gestionar-citas", component:  GestionarCitasComponent , pathMatch: 'full' },
  
  {path: "gestionar-historia", component:  GestionarHistoriaComponent , pathMatch: 'full' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
