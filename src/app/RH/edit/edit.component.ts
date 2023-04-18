import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { PED, Response_Employee} from 'src/app/Models';
import { EmployeeService } from 'src/app/Service/employees.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DepartamentosService } from 'src/app/Service/departamentos.service';
import { EstadosService } from 'src/app/Service/estados.service';
import { PuestosService } from 'src/app/Service/puestos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  singleEmploye: Response_Employee | undefined
  departamentos: PED[] | undefined
  puestos: PED[] | undefined
  estados: PED[] | undefined

  dataEmployee: FormGroup

  allDataOk: boolean = true

  constructor(
    private actRouter: ActivatedRoute,
    private router: Router,
    private service_employee: EmployeeService,
    private service_departamentos: DepartamentosService,
    private service_puestos: PuestosService,
    private service_estado: EstadosService,
    private build_form: FormBuilder
  ) {
    this.dataEmployee = this.build_form.group({
      name: ['', [Validators.required]],
      firstSurname: ['', [Validators.required]],
      secondSurname: ['', [Validators.required]],
      curp: ['', [Validators.required, Validators.pattern(/^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/)]],
      puesto_id: ['', [Validators.required]],
      estado_id: ['', [Validators.required]],
      departamento_id: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    let employee_id = this.actRouter.snapshot.paramMap.get('id')
    if (employee_id) {
      this.service_employee.getOneEmployee(employee_id.toString())
        .subscribe((resp: Response_Employee) => {
          this.singleEmploye = resp
          this.dataEmployee.setValue({
            'name': resp.name,
            'firstSurname': resp.firstSurname,
            'secondSurname': resp.secondSurname,
            'curp': resp.curp,
            'puesto_id': resp.puesto_id.id.toString(),
            'estado_id': resp.estado_id.id.toString(),
            'departamento_id': resp.departamento_id.id.toString()
          })
        })
    }

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

  postEmployee(data: Response_Employee) {
    const modelEmployee = {
      "id": this.actRouter.snapshot.paramMap.get('id'),
      "name": data.name, 
      "firstSurname": data.firstSurname,
      "secondSurname": data.secondSurname,
      "curp": data.curp,
      "puesto_id": {
        "id": data.puesto_id
      },
      "estado_id": {
        "id": data.estado_id
      },
      "departamento_id": {
        "id": data.departamento_id
      }
    }

    if(this.dataEmployee.valid){
      this.service_employee.putEmpleado(modelEmployee)
      .subscribe(resp => {
        Swal.fire({
          icon: 'success',
          title: 'Operación exitoso',
          showConfirmButton: false,
          timer: 1500
        }).then(function(){
          window.location.href="/";
        })
      })
    } else {
      this.allDataOk = false
    }
  }
}
