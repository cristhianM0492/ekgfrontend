import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Especialista} from "../model/especialista";
import {Observable} from "rxjs";




@Injectable({
  providedIn: 'root'
})
export class EspecialistaService {
  baseUrl: string = "http://localhost:8082/paciente-service/";

  private especialistas!: Array<Especialista>;

  constructor(private httpClient: HttpClient) {
  }

  //Observable es parte de la interfaz reactiva de javascript (rxjs)
  getEspecialistas(): Observable<Especialista[]> {
    return this.httpClient.get<Especialista[]>(this.baseUrl);
  }

  save(especialista: Especialista){
    this.httpClient.post(this.baseUrl, especialista);
    console.log(especialista.email);
  }
  public createEspecialista(especialista: Especialista): Observable<any>{
    return this.httpClient.post<any>(this.baseUrl + "especialistas", especialista);
  }


}


