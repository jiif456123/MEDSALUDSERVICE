import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { Serviciospo } from '../models/serviciospo.model';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-gestionar-servicios',
  templateUrl: './gestionar-servicios.component.html',
  styleUrls: ['./gestionar-servicios.component.css'],
  providers: [DatePipe]
})
export class GestionarServiciosComponent implements OnInit {
  @ViewChild('modalRegistrar') modalRegistrar: ElementRef;
  @ViewChild('modalModificar') modalModificar: ElementRef;
  @ViewChild('modalDetalle') modalDetalle: ElementRef;

  formPaciente: FormGroup;
  formPacienteModificar: FormGroup;

  filtro = "";

  servicios: Serviciospo[] = []
  servicioSeleccionado: Serviciospo;
  constructor(
    private servicioService: ServiciosService,
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) { }

  async ngOnInit(): Promise<void> {
    var data = await this.servicioService.listar().toPromise();
    this.servicios = data.data
    this.formPaciente = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      descripcion: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      medico: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      precio: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.minLength(1), Validators.maxLength(3)]],
      fecha: ['', [Validators.required]],
    })

    this.formPacienteModificar = this.fb.group({
        nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
        descripcion: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
        medico: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
        precio: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.minLength(1), Validators.maxLength(3)]],
        fecha: ['', [Validators.required]],
    })

  }

  abrirModal() {
    this.modalRegistrar.nativeElement.click();
  }

  abrirModalDetalle(row: Serviciospo) {
    this.modalDetalle.nativeElement.click();
    this.servicioSeleccionado = row;
  }

  abrirModalModificar(row: Serviciospo) {
    this.modalModificar.nativeElement.click();
    this.servicioSeleccionado = row;
    this.formPacienteModificar.controls.nombre.setValue(row.nombre);
    this.formPacienteModificar.controls.descripcion.setValue(row.descripcion);
    this.formPacienteModificar.controls.medico.setValue(row.medico);
    this.formPacienteModificar.controls.precio.setValue(row.precio);
    this.formPacienteModificar.controls.fecha.setValue(this.datePipe.transform(row.fecha, 'yyyy-MM-dd'));
  }

  transformarFecha(fecha: Date) {
    return `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`
  }

  async registrar() {

    if (this.formPaciente.invalid) {
      Swal.fire('Advertencia', 'Revise los campos.', 'warning')
      return;
    }
    let datos = this.formPaciente.value
    
    let fechaNac= new Date(datos.fecha)
    let fechaHoy = new Date()

    if(fechaNac>fechaHoy){
      Swal.fire('Advertencia', 'La fecha no puede ser mayor que la fecha actual.', 'warning')
      return;
    }
    
    let query = {
      nombre: datos.nombre,
      descripcion: datos.descripcion,
      medico: datos.medico,
      precio: datos.precio,
      fecha: datos.fecha,
    }

    try {

      let response = await this.servicioService.registrar(query).toPromise();
      Swal.fire('Correcto', 'Se registro correctamente', 'success')

      this.formPaciente.reset();
      var dataMovimientoCaja = await this.servicioService.listar().toPromise();
      this.servicios = dataMovimientoCaja.data;

    } catch (err) {
      console.log(err);
    }
  }

  async modificar() {
    if (this.formPacienteModificar.invalid) {
      Swal.fire('Advertencia', 'Revise los campos.', 'warning')
      return;
    }
    let datos = this.formPacienteModificar.value

    let fechaNac= new Date(datos.fecha)
    let fechaHoy = new Date()

    if(fechaNac>fechaHoy){
      Swal.fire('Advertencia', 'La fecha no puede ser mayor que la fecha actual.', 'warning')
      return;
    }

    let query = {
        nombre: datos.nombre,
        descripcion: datos.descripcion,
        medico: datos.medico,
        precio: datos.precio,
        fecha: datos.fecha,
    }

    try {

      let response = await this.servicioService.actualizar(this.servicioSeleccionado._id, query).toPromise();
      Swal.fire('Correcto', 'Se actualizo correctamente', 'success')
      var dataMovimientoCaja = await this.servicioService.listar().toPromise();
      this.servicios = dataMovimientoCaja.data;

    } catch (err) {
      console.log(err);
    }
  }

  async cambiarEstado(estado: number, id: string) {
    let query = {
      estado: estado
    }

    try {

      let response = await this.servicioService.actualizar(id, query).toPromise();
      this.formPaciente.reset();
      var dataMovimientoCaja = await this.servicioService.listar().toPromise();
      this.servicios = dataMovimientoCaja.data;

    } catch (err) {
      console.log(err);
    }
  }

}