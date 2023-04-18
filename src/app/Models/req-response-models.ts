export interface Response_Employee {
    id:              number;
    name:            string;
    firstSurname:    string;
    secondSurname:   string;
    curp:            string;
    puesto_id:       PED;
    estado_id:       PED;
    departamento_id: PED;
}

export interface PED {
    id:    number;
    name:  string;
    state: boolean;
}
