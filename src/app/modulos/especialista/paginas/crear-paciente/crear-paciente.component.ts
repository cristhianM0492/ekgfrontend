import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EspecialistaService} from "../../service/especialista.service";
import {Router} from "@angular/router";
import {Especialista} from "../../model/especialista";

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit{
  registroForm!: FormGroup;
  cpaciente = {
    email: '',
    password: '',
    id: '',
    nombres: '',
    apellidos: '',

  };
  //public identificacion: string;
  estado = false;
  constructor(private especialistaService: EspecialistaService, private router: Router){

  }
  registrarse(especialista: Especialista){
    console.log(especialista)
    this.especialistaService.createEspecialista(especialista).subscribe({
      next: especialista => {
        console.log(especialista)
      },
      error: err => {
        alert('Registro fallido');
        console.log(err)
      },
      complete: () => {
        alert('Registro exitoso');
        console.log('Registro exitoso ')}

    });

  }

  ngOnInit(): void {
    this.registroForm = new FormGroup({
      email: new FormControl<string>('', [Validators.required, Validators.minLength(1)]),
      password: new FormControl<string>('', Validators.required),
      nombres: new FormControl<string>('', Validators.required),
      apellidos: new FormControl<string>('', Validators.required),
      id: new FormControl<string>('', Validators.required)
    });
  }
  volver = () => {
    this.router.navigate(['/m-especialista']);
  }
}
