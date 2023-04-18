import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PED } from 'src/app/Models';
import { Response_Employee } from 'src/app/Models/req-response-models';
import { EmployeeService } from 'src/app/Service/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  @Input() search_name = ''
  @Input() search_fSurname = ''
  @Input() search_sSurname = ''
  @Input() search_CURP = ''
  @Input() search_Puesto = ''
  @Input() search_Departamento = ''
  @Input() search_Estado = ''

  empleados: Response_Employee[] | undefined
  departamentos: PED[] | undefined
  constructor(private service_empleados: EmployeeService) { }

  ngOnInit() {
    this.service_empleados.getPersonas()
      .subscribe(resp => {
        this.empleados = resp
      })
  }

  deleteEmployee(empleado: Response_Employee) {
    this.service_empleados.delEmployee(empleado.id.toString())
      .subscribe((resp: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.service_empleados.getPersonas()
            .subscribe(resp => {
              this.empleados = resp
            })
        })
      })

  }
}
