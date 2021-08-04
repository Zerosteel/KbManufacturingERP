import {Component, OnInit} from '@angular/core';
import { KbService } from '../../RestService/kb.service';
import {Inventario} from '../../interfaces/Inventario.interface'
import { Clientes } from '../../interfaces/clientes.interface';


@Component({
    selector:'app-clientes',
    templateUrl:'./clientes.component.html'
})
export class ClientesComponent{
    
    public clientes:Clientes[]=[];

    constructor(private kbService:KbService){
       
    }
    
    cliente:Clientes = {
        nombre:"",
        rfc:"",
        direccion:"",
        telefono:"",
        contacto:"",
        correo_contacto:""
    }
    
    mostrarClientes(){
        this.kbService.getClientes().subscribe(res => {
        console.log('Res', res )
        this.clientes=res  
        })        
    }

    guardarCliente(){        
        this.kbService.putClientes(this.cliente).subscribe(res=>{
            console.log('Res',res)
        })
    }

    
    
    /*lista : string[] = ["conejo", "gallina" , "perro" ,"guacamaya"];
     borrado: string='';
     borrar() {
         console.log("borrando...")
         this.borrado = this.lista.shift() || '';
     }*/
    
      documento= {
        prop1: "una algo",
        prop2: "otra cosa",
        prop3: "otra mas"
     }

     private intento: keyof Documento = "prop3"

     imprimir(){
         console.log( this.documento[this.intento] )
     }

         /* this.docreceiver[0]]; 
 */

}

interface Documento{
    prop1:string;
    prop2:string;
    prop3:string
}