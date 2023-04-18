export class PED{
    constructor (
        public id:    number,
        public name:  string,
        public state: boolean
    ) { 
        //TODO
    }

    get pedName(){
        return `${this.name}`;
    }
}