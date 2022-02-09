import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Capitan America','Thor'];
  borrado: string = '';

  borrarHeroe(indice: number): void{
    //this.heroes.splice(this.heroes.length,1);
    this.borrado = this.heroes.shift() || '';
    console.log("Borrado..."+this.borrado);
    
  }
}
