import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PacientesPrincipalComponent} from './paginas/pacientes-principal/pacientes-principal.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RegistroPComponent} from './paginas/registro-p/registro-p.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    PacientesPrincipalComponent,
    RegistroPComponent,


  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterLink
    ]
})
export class PacientesModule { }
