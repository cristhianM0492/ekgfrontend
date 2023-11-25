import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EspecialistaService} from "../../service/especialista.service";
import {Router} from "@angular/router";
import {Especialista} from "../../model/especialista";
import {PacientesService} from "../../../pacientes/service/pacientes.service";
import {Paciente} from "../../../pacientes/model/paciente";

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit{
  registroForm!: FormGroup;
  paciente = {
    email: '',
    password: '',
    id: '',
    nombres: '',
    fecha: '',
    apellidos: '',

  };
  //public identificacion: string;
  estado = false;
  constructor(private pacienteService: PacientesService, private router: Router){

  }
  registrarse(paciente: Paciente) {
    console.log(paciente)
    // this.pacienteService.save(paciente); //supuestamente este es para guardar los
    this.pacienteService.createPacientes(paciente).subscribe({
      next: paciente => {
        console.log(paciente)
      },
      error: err => {
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
      fecha: new FormControl<string>('', Validators.required),
      apellidos: new FormControl<string>('', Validators.required),
      id: new FormControl<string>('', Validators.required)
    });
  }
  volver = () => {
    this.router.navigate(['/m-especialista']);
  }
}
