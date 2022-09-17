import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes : string[] = ['Spiderman','Ironman','Hulk','Thor'];


  /* borrarHeroe(){
    console.log('borrando...')
    this.heroes.splice(3)
  }
 */
 /*  tambien podemos usar la función shift que borrar el primer elemento del array 
  y lo retorna por lo que lo podemos guardar en una variable
  que es el que usamos en el curso
*/

  heroeBorrado: string = '';
  
  borrarHeroe(){
    console.log('borrando...')
    this.heroeBorrado = this.heroes.shift() || '';
  } 







}
