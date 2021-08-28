import { Component, OnInit } from '@angular/core';
import { KbService } from '../../RestService/kb.service';
import { Piezas } from "../../interfaces/piezas.interface";

@Component({
  selector: 'app-piezas',
  templateUrl: './piezas.component.html'
})
export class PiezasComponent implements OnInit {

  constructor(private kbService:KbService) { }

  ngOnInit():void{
    this.mostrarPiezas();
  }
  public piezas:Piezas[]=[];

  pieza:Piezas= {
    nombreCliente: "" ,
    piezaNum: 0 ,    
    ppb: 0
  };


  
  mostrarPiezas(){
    this.kbService.getPiezas().subscribe(res=>{
      this.piezas = res;
      console.log("mostrandoPiezas")
    })
  } 

  //TODO funcion para guardar pieza
  guardarPieza(){
    this.kbService.putPiezas(this.pieza).subscribe(res=>{
      console.log('Res',res)      
    })
  }
  //TODO funcion para monstrar todas las piezas

  //TODO funcion para mostrar las piezas de un cliente en particular

  //TODO funcion para mostrar las piezas de un cliente y un calibre en particular


}
