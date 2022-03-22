import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
        <h1> {{title}}</h1>
        <h3>La base es : <strong> {{ base }}</strong></h3>
        <!-- <button (click)=" numero = numero +1;">+1</button> -->
        <button (click)=" acumular(base) ">+{{ base }}</button>
        <span>  {{numero}}  </span>
        <button (click)=" acumular(-base)">-{{ base }}</button>
        <!-- <button (click)=" numero = numero -1;">-1</button> -->
            ` 
})
export class ContadorComponent {

    public title: string  = 'Contador App';
    public numero: number = 10;
    public base: number =5;
  
    acumular(valor:number){
      this.numero += valor;
    }
}