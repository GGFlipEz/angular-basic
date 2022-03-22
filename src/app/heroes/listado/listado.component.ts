import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { 
    console.log("Ejecutando constructor");
  }

  //Se utiliza para cargar la data al renderizar la pagina.
  ngOnInit(): void {
    console.log("ngOnInit");
  }

  heroes: string[] = ['Spiderman','Hulk','Thor'];
  heroeDelete: string='';
  deleteHero: boolean= false;

  borrarHeroe(): void {
    
    let lastIndex: number = this.heroes.length;
    this.heroeDelete = this.heroes[lastIndex-1];
    this.heroes.splice(lastIndex-1);

    if((lastIndex-1) < 0) {
      this.deleteHero = false;  
    }else{
      this.deleteHero = true;
    }
    
  }

}
