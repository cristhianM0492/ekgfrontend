import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {Especialista} from "../../../model/especialista";
import {EspecialistaService} from "../../../service/especialista.service";

@Component({
  selector: 'app-registro-e',
  templateUrl: './registro-e.component.html',
  styleUrls: ['./registro-e.component.css']
})
export class RegistroEComponent implements OnInit{
  registroForm!: FormGroup;
  especialista = {
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
    this.router.navigate(['/especialista']);
  }
}

