import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EspecialistaService} from "../../service/especialista.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-especialista-principal',
  templateUrl: './especialista-principal.component.html',
  styleUrls: ['./especialista-principal.component.css']
})
export class EspecialistaPrincipalComponent implements OnInit{
  usuarioEForm!: FormGroup;
  registrarEForm!: FormGroup;
  constructor(private especialistaService: EspecialistaService,private router: Router){

  }

  entrar(){
    console.log(this.usuarioEForm.get('correo')?.value)
    console.log(this.usuarioEForm.get('contrasenia')?.value)
  }
  registrarse(){
    console.log(this.usuarioEForm.get('correo')?.value)
    console.log(this.usuarioEForm.get('contrasenia')?.value)
  }
  ngOnInit(): void {
    this.usuarioEForm = new FormGroup({
      correo: new FormControl<string>('', [Validators.required, Validators.minLength(1)]),
      contrasenia: new FormControl<string>('', Validators.required)
    });
  }
  registro = () => {
    this.router.navigate(['/registro-e']);
  }

  login() {

    this.router.navigate(['/m-especialista']);
  }
}
