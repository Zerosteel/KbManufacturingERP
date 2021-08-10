import { Component } from '@angular/core';
import { KbService } from '../../RestService/kb.service';
import { Piezas } from "../../interfaces/piezas.interface";

@Component({
  selector: 'app-piezas',
  templateUrl: './piezas.component.html'
})
export class PiezasComponent {

  constructor(private kbService:KbService) { }

  public piezas:Piezas[]=[];

  pieza:Piezas= {
    nombreCliente: "" ,
    piezaNum: 0 ,    
    ppb: 0
  };


  //TODO funcion para guardar pieza
  guardarPieza(){
    //this.kbService.postPiezas().subscribe(res=>{
      //this.piezas = res;
      console.log("mostrandoPiezas")
    //})
  } 

  //TODO funcion para monstrar todas las piezas

  //TODO funcion para mostrar las piezas de un cliente en particular

  //TODO funcion para mostrar las piezas de un cliente y un calibre en particular


}
