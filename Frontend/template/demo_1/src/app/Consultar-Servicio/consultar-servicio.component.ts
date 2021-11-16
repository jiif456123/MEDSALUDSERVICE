import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prueba } from '../models/prueba.model';
import { ConsultarService } from '../services/Consultar-servicio/consultar-servicio.service';
@Component({
  selector: 'app-consultar-servicio',
  templateUrl: './consultar-servicio.component.html',
  styleUrls: ['./consultar-servicio.component.scss'],
  providers: [DatePipe]
})
export class consultarserviciocomponent implements OnInit {
  @ViewChild('modalRegistrar') modalRegistrar: ElementRef;
  @ViewChild('modalModificar') modalModificar: ElementRef;
  @ViewChild('modalDetalle') modalDetalle: ElementRef;

  formPaciente: FormGroup;
  formPacienteModificar: FormGroup;

  filtro = "";

  pruebas: Prueba[] = []
  pruebaSeleccionado: Prueba;
  constructor(
    private consultarService: ConsultarService,
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) { }

  async ngOnInit(): Promise<void> {
    var data = await this.consultarService.listar().toPromise();
    this.pruebas = data.data
  }
}
