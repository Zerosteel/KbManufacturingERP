import { Component, OnInit } from "@angular/core";
import { OrdenesCompra } from "../../interfaces/ordenesC.interface";
import { KbService } from "../../RestService/kb.service";

@Component({
    selector:'app-ordenesCompra',
    templateUrl:'ordenesC.component.html',
    styleUrls:['ordenesC.component.css']
    
})
export class OrdenesCompraComponent implements OnInit {  

    constructor(private kbService:KbService){
    }

    ngOnInit():void{
        this.mostrarOrdenes();
    }

    public arrOrdenesCompra:OrdenesCompra[]=[];

    blanks:number=0;
    ordenesCompra:OrdenesCompra={        
        line:0,
        partNumber:0,
        description:"",
        deliveryDateTime:"",
        quantity:0,
        uom:"EACH",
        unitPrice:0,
        amount:0
        
    }
    
    mostrarOrdenes(){
        this.kbService.getOrdenes().subscribe(res => {
            console.log('Res',res)
            this.arrOrdenesCompra=res
        })
    }

    guardarOrden(){
        this.kbService.putOrdenes(this.ordenesCompra).subscribe(res => {
            console.log('Res',res)
        })
    }
    
    returnZero() {
        return 0
    }

    generarODT(ord:any){    
        console.log(ord._id)
        let ordId = ord._id
        let blanks
        this.kbService.putOrdenesTrabajo(ordId).subscribe(res =>{
            console.log('Res',res)
            this.blanks = res.blanks
            alert(`Se requieren ${this.blanks} blanks`) 
            //console.log('blanks',r)
        })
        //TODO enviar cliente- item y cantidad para generar una orden de trabajo
    }


}