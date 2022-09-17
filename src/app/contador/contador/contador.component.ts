import { Component } from '@angular/core';


@Component ({
    selector: 'app-contador',
    template: `
        <h1> HOLA MUNDO KEXE!!! </h1>

        <h1> {{ titulo_1 }}</h1>

        <br>
        <br>
        <br>

        <h1> {{ titulo_2 }}</h1>
        <button (click)="acumular(1)">+1</button>

        <span>{{ numero }}</span>

        <button (click)="acumular(-1)">-1</button>

        <br>
        <br>
        <br>

        <h1> {{ titulo_3 }}</h1>
        <h3> la base es: {{base}}</h3>

        <button (click)="acumular_potencia(base)"> {{base}}</button>

        <span>{{ numero_p }}</span>

        <button (click)="acumular_potencia(-base)">{{base}}</button>

            
    `

})


export class ContadorComponent {

    titulo_1: String = 'Contador App';
    titulo_2: String = 'Contador sumas';
    titulo_3: String = 'Contador potencias';
    numero: number = 10;
    numero_p: number = 10;
    base: number = 5;
  
    acumular (valor:number){
      this.numero += valor
  
  
    }
  
    acumular_potencia (valor:number){
      this.numero_p += valor
  
  
    }
  
  


}