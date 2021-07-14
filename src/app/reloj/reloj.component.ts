import { Component, OnInit } from "@angular/core";

@Component({
    selector:"app-reloj",
    template:" <h1>{{HoraExacta}}</h1>"
})
export class RelojComponent implements OnInit{
    ngOnInit(){
        this.lahora();
    }

    public HoraExacta:string="";

    lahora(){
        let myDate = new Date();
        let hours:number|string = myDate.getHours();
        let minutes:number|string = myDate.getMinutes();
        let seconds:number|string = myDate.getSeconds();
        if (hours < 10) hours = "0" +  hours.toString()   ;
    
        if (minutes < 10) minutes = "0" +  minutes.toString() ;
    
        if (seconds < 10) seconds = "0" +  seconds.toString() ;
    
        /*$("#HoraActual").text(hours+ ":" +minutes+ ":" +seconds);*/
        this.HoraExacta = hours + ":" + minutes +":" + seconds;
        setTimeout( ()=> this.lahora() , 1000);
        }
}