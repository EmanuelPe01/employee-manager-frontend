import { Injectable } from '@angular/core';
import { PED, Path } from '../Models';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor(private http:HttpClient) { }

  Url = new Path()

  getDepartamentos(){
    return this.http.get<PED[]>(this.Url.getUrlDepartamento()+ 'all');
  }
}
