import { Pipe, PipeTransform } from '@angular/core';
import { Response_Employee } from '../Models';
import { range } from 'rxjs';
import { TemplateBindingParseResult } from '@angular/compiler';

@Pipe({
  name: 'filterRh'
})
export class FilterRhPipe implements PipeTransform {

  transform(items: any, term: string[]): any {
    let empleados: Response_Employee[] = []
    const keys = ['name', 'firstSurname', 'secondSurname', 'curp']
    const lTerms = term.length

    if (this.isNull(term)) {
      empleados = items
    } else if (typeof (items) == 'object') {
      {
        items.forEach((employee: Response_Employee) => {
          if (term[0] != '' && employee['name'].toLowerCase().includes(term[0].toLowerCase()))
            if (!empleados.includes(employee)) empleados.push(employee)

          if (term[1] != '' && employee['firstSurname'].toLowerCase().includes(term[1].toLowerCase()))
            if (!empleados.includes(employee)) empleados.push(employee)

          if (term[2] != '' && employee['secondSurname'].toLowerCase().includes(term[2].toLowerCase()))
            if (!empleados.includes(employee)) empleados.push(employee)

          if (term[3] != '' && employee['curp'].toLowerCase().includes(term[3].toLowerCase()))
            if (!empleados.includes(employee)) empleados.push(employee)

          if (term[4] != '' && employee.departamento_id['name'].toLowerCase() == term[4].toLowerCase())
            if (!empleados.includes(employee)) empleados.push(employee)

          if (term[5] != '' && employee.puesto_id['name'].toLowerCase() == term[5].toLowerCase())
            if (!empleados.includes(employee)) empleados.push(employee)

          if (term[6] != '' && employee.estado_id['name'].toLowerCase() == term[6].toLowerCase())
            if (!empleados.includes(employee)) empleados.push(employee)
        });
      }
    }
    return empleados
  }

  isNull(term: string[]) {
    let flag: boolean = true

    term.forEach(i => {
      if (i.length != 0) { flag = false; }
    })

    return flag
  }
}
