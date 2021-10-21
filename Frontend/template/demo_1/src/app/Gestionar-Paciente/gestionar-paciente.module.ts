import { gestionarpacienteComponent } from './gestionar-paciente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';


const routes: Routes = [
  { path: '', component: gestionarpacienteComponent },
]

@NgModule({
  declarations: [gestionarpacienteComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FullCalendarModule,
    ],
})
export class gestionarpacienteModule { }
