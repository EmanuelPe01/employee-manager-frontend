import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PED, Path } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(private http:HttpClient) { }

  Url = new Path()

  getEstados(){
    return this.http.get<PED[]>(this.Url.getUrlEstado() + 'all');
  }
}
