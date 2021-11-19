import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard } from './dashboard/dashboard.component';

import { CitaVirtualComponent } from './domicilio/citaVirtual/citaVirtual.component';

import { VirtualRoomComponent } from './domicilio/virtualRoom/virtualRoom.component';

import { GestionarCitasComponent } from './citas/gestionar-citas/gestionar-citas.component';
import { GestionarHistoriaComponent } from './citas/gestionar-Historia Clinica/gestionar-historia.component'; 
import { LoginMComponent } from './iniciar-sesion/iniciar-sesion.component';
import { GestionarPacienteComponent } from './citas/gestionar-paciente/gestionar-paciente.component';
import { WelcomePage } from './welcome-page/welcom-page.component';
import { CambiarContraComponent } from './citas/cambiar-password/cambiarpassword.component';
import { GestionarServiciosComponent } from './citas/gestionar-servicios/gestionar-servicios.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
 // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 //Pa que funcione la ruta :v 

 // { path:'', redirectTo:'/login', pathMatch: 'full'}, //Falla.... No elimina los elementos sidebar
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard],pathMatch: 'full'},

  { path: "cita-virtual", component:  CitaVirtualComponent , canActivate: [AuthGuard], pathMatch: 'full'},
  
  {path: "cita-virtual/:id", component:  VirtualRoomComponent , canActivate: [AuthGuard], pathMatch: 'full' },
  
  {path: "gestionar-citas", component:  GestionarCitasComponent , canActivate: [AuthGuard], pathMatch: 'full' },
  {path: "gestionar-paciente", component:  GestionarPacienteComponent , canActivate: [AuthGuard], pathMatch: 'full' },

  
  {path: "gestionar-historia", component:  GestionarHistoriaComponent , canActivate: [AuthGuard], pathMatch: 'full' },
  {path: "cambiarc", component:  CambiarContraComponent , canActivate: [AuthGuard], pathMatch: 'full' },

  {path: 'login', component: LoginMComponent , pathMatch: 'full'},
  {path: 'welcome-page', component: WelcomePage, pathMatch: 'full'},
  {path: "gestionar-servicios", component:  GestionarServiciosComponent , canActivate: [AuthGuard], pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
