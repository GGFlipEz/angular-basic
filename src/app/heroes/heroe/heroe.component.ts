import { Component } from "@angular/core";



@Component({
    selector : 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    
    nombre: string = 'Superman';
    edad: number = 25;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre() : string {
        return `${ this.nombre}  - ${this.edad} `;
    }

    cambiarNombre(): void{
        this.nombre = 'Batman';
    }

    cambiarEdad(): void{
        this.edad = 30;
    }
}