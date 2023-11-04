import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PacientesService} from "../../service/pacientes.service";
import {Paciente} from "../../model/paciente";
import {Router} from '@angular/router';

@Component({
  selector: 'app-pacientes-principal',
  templateUrl: './pacientes-principal.component.html',
  styleUrls: ['./pacientes-principal.component.css']
})
export class PacientesPrincipalComponent implements OnInit{
  usuarioForm!: FormGroup;
  /*registrarForm!: FormGroup;*/
  usuario = {
    email: '',
    password: '',
  };
  constructor(private pacienteService: PacientesService,private router: Router){



  }

  entrar(paciente: Paciente){
  console.log(paciente)
    this.pacienteService.save(paciente);
    console.log(this.usuarioForm.get('correo')?.value)
    console.log(this.usuarioForm.get('contrasenia')?.value)
  }

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      correo: new FormControl<string>('', [Validators.required, Validators.minLength(1)]),
      contrasenia: new FormControl<string>('', Validators.required)

    });
  }
  registro = () => {
   this.router.navigate(['/registro-p']);
  }
  login() {

        this.router.navigate(['/historiaClinica']);
      }


}
