import {Component, OnInit} from '@angular/core';
import {Paciente} from "../../model/paciente";
import {PacientesService} from "../../service/pacientes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-datos-p',
  templateUrl: './datos-p.component.html',
  styleUrls: ['./datos-p.component.css']
})
export class DatosPComponent implements OnInit{
  public listaPaciente!: Paciente[];
  //  public historiaPaciente!: historiaC[];
  constructor(private pacientesService:PacientesService, private router: Router) {
  }

  ngOnInit(): void {
    this.pacientesService.getPacientes().subscribe(
        pacientes => this.listaPaciente=pacientes
    );
  }
  volver = () => {
    this.router.navigate(['/especialista']);
  }
  tomarEKG = () => {
    this.router.navigate(['/examen-ekg']);
  }

}