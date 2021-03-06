import {Component, OnInit} from '@angular/core';
import { KbService } from '../../RestService/kb.service';
import {Inventario} from '../../interfaces/Inventario.interface'

@Component({
    selector:"app-inventario",
    templateUrl:"./inventario.component.html"
})
export class InventarioComponent implements OnInit{
    
    constructor(private kbService:KbService){
    }
    
    ngOnInit():void{
        this.mostrarInventario();
    }

    //declare const modal: IModal;
    public inventario:Inventario[]=[];

    producto:Inventario = {
        nombre : "",
        descripcion: "",
        cantidad : 0,
        material:""
    }
    
    mostrarInventario(){
        this.kbService.getInventario().subscribe(res => {
        console.log('Res', res )
        this.inventario=res  
        })        
    }

    guardarInventario(){        
        this.kbService.putInventario(this.producto).subscribe(res=>{
            console.log('Res',res)
        })
    }
    
}