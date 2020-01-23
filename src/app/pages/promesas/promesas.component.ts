import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    let promesa = new Promise( (resolve, reject) => {

      let contador = 0;

      setInterval( () => {
        contador += 1;
        if (contador === 3 ) {
          resolve();
        }
      }, 1000 )
     });

     promesa.then(() => {
       console.log("termino")
     }).catch( e => {
       console.log("Error", e)
     } )

   }

  ngOnInit() {
  }

}
