import {Component, OnInit} from '@angular/core';
import {PacientesService} from "../../service/pacientes.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HistoriaC} from "../../model/historiaC";

@Component({
  selector: 'app-h-clinica',
  templateUrl: './h-clinica.component.html',
  styleUrls: ['./h-clinica.component.css']
})
export class HClinicaComponent implements OnInit{
  registroForm!: FormGroup;
  paciente = {
    email: '',
    id: '',
    nombres: '',
    apellidos: '',
    direccion: '',
    telefono: '',
    ciudad: '',
    edad: '',
    peso: '',
    estatura: '',
    genero: '',
    antecedentes_Quirurgicos: '',
    antecedentes_Alergicos: '',
    antecedentes_Patologicos: '',
    antecedentes_Toxicos: '',
    antecedentes_Heredofamiliares: '',
    antecedentes_Transfuncionales: '',

  };

  constructor(private pacienteService: PacientesService, private router: Router){

  }

  guardarH(historiaC: HistoriaC) {
    console.log(historiaC)
    // this.pacienteService.save(paciente); //supuestamente este es para guardar los
    this.pacienteService.createHistoriaC(historiaC).subscribe({
      next: historiaC => {
        console.log(historiaC)
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
      nombres: new FormControl<string>('', Validators.required),
      apellidos: new FormControl<string>('', Validators.required),
      id: new FormControl<string>('', Validators.required),
     direccion: new FormControl<string>('', Validators.required),
     telefono: new FormControl<string>('', Validators.required),
      ciudad: new FormControl<string>('', Validators.required),
      peso: new FormControl<string>('', Validators.required),
      edad: new FormControl<string>('', Validators.required),
      genero: new FormControl<string>('', Validators.required),
      estatura: new FormControl<string>('', Validators.required),
      antecedentes_Quirurgicos: new FormControl<string>('', Validators.required),
      antecedentes_Alergicos: new FormControl<string>('', Validators.required),
      antecedentes_Patologicos: new FormControl<string>('', Validators.required),
      antecedentes_Toxicos: new FormControl<string>('', Validators.required),
      antecedentes_Heredofamiliares: new FormControl<string>('', Validators.required),
      antecedentes_Transfuncionales: new FormControl<string>('', Validators.required)
    });
  }
  examenes = () => {
    this.router.navigate(['examenes-p']);
  }
  volver = () => {
    this.router.navigate(['/pacientes']);
  }
}
