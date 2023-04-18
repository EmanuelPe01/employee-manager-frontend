export class Path{
    constructor(
        private URL = 'http://localhost:8080/'
        //private URL = 'https://f4be-2806-2f0-90a1-a7ad-6d8e-6411-48aa-28f8.ngrok-free.app/'
    ){}

    public getUrlEmployee(host: string = this.URL): string{
        return host + 'employee/'
    }

    public getUrlDepartamento(host: string = this.URL): string{
        return host + 'departamento/'
    }

    public getUrlPuesto(host: string = this.URL): string{
        return host + 'puesto/'
    }

    public getUrlEstado(host: string = this.URL): string{
        return host + 'estado/'
    }
}