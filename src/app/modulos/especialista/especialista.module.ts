import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EspecialistaPrincipalComponent} from './paginas/especialista-principal/especialista-principal.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DPacientesComponent} from './paginas/d-pacientes/d-pacientes.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RegistroEComponent} from './paginas/registro-e/registro-e/registro-e.component';
import { CrearPacienteComponent } from './paginas/crear-paciente/crear-paciente.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    EspecialistaPrincipalComponent,
    DPacientesComponent,
    RegistroEComponent,
    CrearPacienteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink
  ],
  providers: [
    HttpClient
  ]
})
export class EspecialistaModule { }
