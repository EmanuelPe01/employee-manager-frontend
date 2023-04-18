import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PED, Path } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class PuestosService {

  constructor(private http:HttpClient) { }

  Url= new Path()

  getPuestos(){
    return this.http.get<PED[]>(this.Url.getUrlPuesto() + 'all');
  }
}
