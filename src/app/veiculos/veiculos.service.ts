import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class VeiculosService {
    constructor(
        private httpClient: HttpClient
    ) { }
    obterMarcas(): Observable<any> {
        const requestURL = "https://parallelum.com.br/fipe/api/v1/carros/marcas";
        return this.httpClient.get(requestURL);
    }
    obterModelos(idMarca): Observable<any> {
        const requestURL = "https://parallelum.com.br/fipe/api/v1/carros/marcas/"+idMarca+"/modelos";
        return this.httpClient.get(requestURL);
    }
}