import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response_Employee } from 'src/app/Models';
import { EmployeeService } from 'src/app/Service/employees.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  sourceIconUser = '../assets/icons/user.png'
  employeData: Response_Employee | undefined

  constructor(
    private actRouter: ActivatedRoute,
    private service_employee: EmployeeService
  ){}

  ngOnInit(){
    let employee_id = this.actRouter.snapshot.paramMap.get('id')
    if(employee_id){
      this.service_employee.getOneEmployee(employee_id.toString())
      .subscribe(resp => {
          this.employeData = resp
      })
    }
  }
}
