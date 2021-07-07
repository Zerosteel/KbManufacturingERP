import {Component} from '@angular/core';
import { KbService } from '../RestService/kb.service';
import {Inventario} from '../interfaces/interfaces'

@Component({
    selector:'app-clientes',
    templateUrl:'./clientes.component.html'
})
export class ClientesComponent{
    public inventario:Inventario[]=[] ;
    constructor(private kbService:KbService){}
        
    
    

    mostrarInventario(){
        this.kbService.getClientes().subscribe(respuesta => this.inventario=respuesta)
        console.log(this.inventario);
    }

    
    /*lista : string[] = ["conejo", "gallina" , "perro" ,"guacamaya"];
     borrado: string='';
     borrar() {
         console.log("borrando...")
         this.borrado = this.lista.shift() || '';
     }*/
}