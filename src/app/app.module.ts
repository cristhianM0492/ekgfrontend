import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PrincipalComponent} from './paginas/principal/principal.component';
import {HClinicaComponent} from './modulos/pacientes/paginas/historia-clinica/h-clinica.component';
import {ExamenesPComponent} from './modulos/pacientes/paginas/examenes-p/examenes-p.component';
import {MEspecialistaComponent} from './modulos/especialista/paginas/m-especialista/m-especialista.component';
import {AppRoutingModule} from "./app-routing.module";
import {ExamenEkgComponent} from './modulos/especialista/paginas/examen-ekg/examen-ekg.component';
import {EspecialistaModule} from "./modulos/especialista/especialista.module";
import {PacientesModule} from "./modulos/pacientes/pacientes.module";
import {CabeceraComponent} from './paginas/cabecera/cabecera.component';
import {PieDePaginaComponent} from './paginas/pie-de-pagina/pie-de-pagina.component';
import {HttpClient} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HClinicaComponent,
    ExamenesPComponent,
    MEspecialistaComponent,
    ExamenEkgComponent,
    CabeceraComponent,
    PieDePaginaComponent,

   // RegistroPComponent,
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        EspecialistaModule,
        PacientesModule,
        ReactiveFormsModule,
        FormsModule,


    ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
