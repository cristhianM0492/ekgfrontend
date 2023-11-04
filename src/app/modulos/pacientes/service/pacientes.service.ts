import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Paciente} from "../model/paciente";
import {HistoriaC} from "../model/historiaC";


@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  baseUrl: string = "http://localhost:8083/paciente-service/"; // direccion de backen ?

  private pacientes!: Array<Paciente>;

  constructor(private httpClient: HttpClient) {
  }

  //Observable es parte de la interfaz reactiva de javascript (rxjs)
  getPacientes(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.baseUrl + "pacientes");//
  }
  public createPacientes(paciente: Paciente): Observable<any>{
    return this.httpClient.post<any>(this.baseUrl + "pacientes", paciente);
  }
  public createHistoriaC(historiac: HistoriaC): Observable<any>{
    return this.httpClient.post<any>(this.baseUrl + "historiac", historiac);
  }
  public login(paciente: Paciente): Observable<any>{
    return this.httpClient.post<any>(this.baseUrl + "pacientes", paciente);
  }
  save(paciente: Paciente){
     this.httpClient.post<any>(this.baseUrl + "pacientes", paciente); //guarda los pacientes registrados
    console.log(paciente.email);
    console.log(paciente.nombres);
    console.log(paciente.id);
    console.log(this.baseUrl + "pacientes")
  }

}
