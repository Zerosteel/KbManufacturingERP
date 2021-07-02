import {Component} from '@angular/core';

@Component({
    selector:'app-clientes',
    templateUrl:'./clientes.component.html'
})
export class ClientesComponent{
     lista : string[] = ["conejo", "gallina" , "perro" ,"guacamaya"];
     borrado: string='';
     borrar() {
         console.log("borrando...")
         this.borrado = this.lista.shift() || '';
     }
}