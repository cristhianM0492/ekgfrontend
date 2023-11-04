import { Injectable } from '@angular/core';
import {Paciente} from "../model/paciente";
import {HttpClient} from "@angular/common/http";
import {HistoriaC} from "../model/historiaC";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HistoriacService {

  baseUrl: string = "http://localhost:8081/paciente-service/"; // direccion de backen ?

  private pacientes!: Array<Paciente>;

  constructor(private httpClient: HttpClient) {
  }

  public createHistoriaC(historiac: HistoriaC): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + "historiac", historiac);
  }
}
