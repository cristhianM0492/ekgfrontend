import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EspecialistaService} from "../../service/especialista.service";
import {PacientesService} from "../../../../modulos/pacientes/service/pacientes.service";
@Component({
  selector: 'app-m-especialista',
  templateUrl: './m-especialista.component.html',
  styleUrls: ['./m-especialista.component.css']
})
export class MEspecialistaComponent implements OnInit {

  public listPacientes: any[]=[];

  constructor(
      private especialistaService: EspecialistaService,
      private router: Router,
      public pacienteService: PacientesService){
  }
  ngOnInit() {
    this.obtenerListaPacientes();
    this.eliminar();
  }
  registro = () => {
    this.router.navigate(['/d-pacientes']);
  }
  registro2 = () => {
    this.router.navigate(['/examen-ekg']);
  }
  crearpaciente= () => {
    this.router.navigate(['/crear-paciente']);
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
 eliminar() {
     /* this.pacienteService.elimnarPacientes().subscribe((result:any) => {
            this.listPacientes = result;
            console.log(this.listPacientes);
          },
          (error:any) => {
            console.error('Error fetching data: ', error);
          })
    }*/
 }
}
