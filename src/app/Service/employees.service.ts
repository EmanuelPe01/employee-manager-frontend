import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Path, Response_Employee} from '../Models';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  
  Url = new Path()

  getPersonas(){
    return this.http.get<Response_Employee[]>(this.Url.getUrlEmployee() + 'all')
  } 

  getOneEmployee(id: string){
    return this.http.get<Response_Employee>(this.Url.getUrlEmployee() + "find/" + id)
  }

  setEmpleado(form: Object){
    return this.http.post<Response_Employee>(this.Url.getUrlEmployee() + 'add', form)
  }

  putEmpleado(form: Object){
    return this.http.put<Response_Employee>(this.Url.getUrlEmployee() + 'update', form)
  }

  delEmployee(id: string){
    return this.http.delete(this.Url.getUrlEmployee() + "delete/" + id)
  }
}

