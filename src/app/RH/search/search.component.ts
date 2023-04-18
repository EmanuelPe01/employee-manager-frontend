import { Component } from '@angular/core';
import { PED } from 'src/app/Models';
import { DepartamentosService } from 'src/app/Service/departamentos.service';
import { EstadosService } from 'src/app/Service/estados.service';
import { PuestosService } from 'src/app/Service/puestos.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search_name = '';
  search_fSurname = ''
  search_sSurname = ''
  search_CURP = ''
  search_Puesto = ''
  search_Departamento = ''
  search_Estado = ''

  departamentos: PED [] | undefined
  puestos: PED[] | undefined
  estados: PED[] | undefined

  constructor(
    private service_departamentos:DepartamentosService,
    private service_puestos:PuestosService,
    private service_estado: EstadosService
  ){ }

  ngOnInit(){
    this.service_departamentos.getDepartamentos()
      .subscribe(resp => {
          this.departamentos = resp
      })
    this.service_puestos.getPuestos()
      .subscribe(resp => {
        this.puestos = resp
      })
    this.service_estado.getEstados()
      .subscribe(resp => {
        this.estados = resp
      })
  }
}
