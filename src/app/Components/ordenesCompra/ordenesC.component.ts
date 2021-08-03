import { Component } from "@angular/core";
import { OrdenesCompra } from "../../interfaces/ordenesC.interface";
import { KbService } from "../../RestService/kb.service";

@Component({
    selector:'app-ordenesCompra',
    templateUrl:'ordenesC.component.html'
})
export class OrdenesCompraComponent{

    constructor(private kbService:KbService){
    }

    public arrOrdenesCompra:OrdenesCompra[]=[];

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
        this.kbService.putOrdenesTrabajo(ord).subscribe(res =>{
            console.log('Res',res)
        })
        //TODO enviar cliente- item y cantidad para generar una orden de trabajo
    }


}