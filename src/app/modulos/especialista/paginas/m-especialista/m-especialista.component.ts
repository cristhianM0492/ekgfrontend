import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EspecialistaService} from "../../service/especialista.service";
import {PacientesService} from "../../../../modulos/pacientes/service/pacientes.service";
import { Paciente } from 'src/app/modulos/pacientes/model/paciente';
@Component({
  selector: 'app-m-especialista',
  templateUrl: './m-especialista.component.html',
  styleUrls: ['./m-especialista.component.css']
})
export class MEspecialistaComponent implements OnInit {

  public listPacientes: any[]=[];
  public listHistoria: any[]=[];
  constructor(
      private especialistaService: EspecialistaService,
      private router: Router,
      public pacienteService: PacientesService){
  }
  ngOnInit() {
    this.obtenerListaPacientes();
  }
  registro = () => {
    this.router.navigate(['/d-pacientes']);
  }
  registro2 = () => {
    this.router.navigate(['/examen-ekg']);
  }
  crearpaciente= () => {
    this.router.navigate(['/historiaClinica']);
  }

  volver = () => {
    this.router.navigate(['/especialista']);
  }
  obtenerListaPacientes(){
    this.pacienteService.getPacientes().subscribe((result:any) => {
          this.listPacientes = result;
          console.log(this.listPacientes);
        },
        (error:any) => {
          console.error('Error fetching data: ', error);
        })
  }

    eliminar(paciente: Paciente){
      console.log(paciente)
      this.pacienteService.elimnarPacientes(paciente).subscribe({
        next: paciente => {
          console.log(paciente)
        },
        error: err => {
          alert('eliminacion fallida');
          console.log(err)
        },
        complete: () => {
          alert('eliminacion exitosa');
          console.log('Registro exitoso ')}
  
      });
  
    }
}
