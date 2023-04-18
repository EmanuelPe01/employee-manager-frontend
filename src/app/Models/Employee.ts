import { PED } from "./PED";

export class Employee{
    constructor(
        public id:              number,
        public name:            string,
        public firstSurname:    string,
        public secondSurname:   string,
        public curp:            string,
        public puesto_id:          PED,
        public estado_id:          PED,
        public departamento_id:          PED
    ) {
        //TODO
    }
}