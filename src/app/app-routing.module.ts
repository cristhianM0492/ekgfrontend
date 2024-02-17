import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import {
  PacientesPrincipalComponent
} from "./modulos/pacientes/paginas/pacientes-principal/pacientes-principal.component";
import {
  EspecialistaPrincipalComponent
} from "./modulos/especialista/paginas/especialista-principal/especialista-principal.component";
import {HClinicaComponent} from "./modulos/especialista/paginas/historia-clinica/h-clinica.component";
import {ExamenesPComponent} from "./modulos/pacientes/paginas/examenes-p/examenes-p.component";
import {DPacientesComponent} from "./modulos/especialista/paginas/d-pacientes/d-pacientes.component";
import {RegistroPComponent} from "./modulos/pacientes/paginas/registro-p/registro-p.component";
import {RegistroEComponent} from "./modulos/especialista/paginas/registro-e/registro-e/registro-e.component";
import {MEspecialistaComponent} from "./modulos/especialista/paginas/m-especialista/m-especialista.component";
import {ExamenEkgComponent} from "./modulos/especialista/paginas/examen-ekg/examen-ekg.component";
import {
  CrearPacienteComponent
} from "./modulos/especialista/paginas/crear-paciente/crear-paciente.component";
import {DatosPComponent} from "./modulos/pacientes/paginas/datos-p/datos-p.component";


const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
  },
  {
    path: 'pacientes',
    component: PacientesPrincipalComponent,
  },
  {
    path: 'especialista',
    component: EspecialistaPrincipalComponent,
  },
  {
    path: 'historiaClinica',
    component: HClinicaComponent,
  },
  {
    path: 'examenes-p',
    component: ExamenesPComponent,
  },{
  path: 'pacientes_d',
  component: DPacientesComponent,
},
  {
    path: 'registro-p',
    component: RegistroPComponent,
  },
  {
    path: 'registro-e',
    component: RegistroEComponent,
  },
  {
    path: 'm-especialista',
    component: MEspecialistaComponent,
  },
  {
    path: 'd-pacientes',
    component:DPacientesComponent,
  },
  {
  path: 'examen-ekg',
  component:ExamenEkgComponent,
},
  {
    path: 'crear-paciente',
    component:CrearPacienteComponent,
  },
  {
    path: 'datos-p',
    component:DatosPComponent,
  },
  {
    path: '**',
  redirectTo: ''
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
