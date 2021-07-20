import { Component } from "@angular/core";
import { Requerimientos } from "../../interfaces/requerimientos.interface";
import { KbService } from "../../RestService/kb.service";

@Component({
    selector:'app-requerimientos',
    templateUrl:'./requerimientos.component.html'
})
export class RequerimientosComponent{

    constructor(private kbService:KbService){

    }

    public requerimientos: Requerimientos[]=[];

    requerimiento: Requerimientos={
        area: "",
        descripcion:"",
        cantidad:0
    }

    guardarRequerimiento(){
        this.kbService.putRequerimiento(this.requerimiento).subscribe(res=>{
            console.log('Res',res)
        })
    }

    solicitarRequerimientos(){
        this.kbService.getRequerimiento().subscribe(res=>{
            console.log('Res',res)
            this.requerimientos=res
        })
    }

}