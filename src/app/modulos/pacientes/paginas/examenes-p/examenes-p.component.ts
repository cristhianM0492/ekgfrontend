import {Component} from '@angular/core';
import {PacientesService} from "../../service/pacientes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-examenes-p',
  templateUrl: './examenes-p.component.html',
  styleUrls: ['./examenes-p.component.css']
})
export class ExamenesPComponent {

  constructor(private pacienteService: PacientesService,private router: Router){



  }

 volver = () => {
    this.router.navigate(['/historiaClinica']);
  }
}
