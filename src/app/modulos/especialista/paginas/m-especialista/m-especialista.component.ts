import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {EspecialistaService} from "../../service/especialista.service";

@Component({
  selector: 'app-m-especialista',
  templateUrl: './m-especialista.component.html',
  styleUrls: ['./m-especialista.component.css']
})
export class MEspecialistaComponent {

  constructor(private especialistaService: EspecialistaService, private router: Router){

  }

  registro = () => {
    this.router.navigate(['/d-pacientes']);
  }
  registro2 = () => {
    this.router.navigate(['/examen-ekg']);
  }

  volver = () => {
    this.router.navigate(['/especialista']);
  }
}
