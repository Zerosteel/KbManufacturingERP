import { HttpClient } from '@angular/common/http'
import{Injectable} from '@angular/core'

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Clientes } from '../interfaces/clientes.interface';
import { Inventario } from '../interfaces/Inventario.interface';
import { OrdenesCompra } from '../interfaces/ordenesC.interface';
import { Requerimientos } from '../interfaces/requerimientos.interface';
import { Piezas } from '../interfaces/piezas.interface';



@Injectable()
    export class KbService{
        constructor(private http:HttpClient){}

        pathClientes='/api/clientes'
        pathInventario='/api/inventario';
        pathRequerimiento='/api/requerimientos'
        pathOrdenesCompra='/api/ordenesCompra'
        pathOrdenesTrabajo='/api/ordenesTrabajo'
        pathPiezas='/api/piezas';
        //PIEZAS
        getPiezas():Observable<Piezas[]>{
            return this.http.get<Piezas[]>(this.pathPiezas);
        }

        putPiezas(pieza:Piezas):Observable<any>{
            return this.http.post(this.pathPiezas,pieza);
        }

        //ORDENES DE COMPRA
        putOrdenesTrabajo(ordId:string):Observable<any>{
            return this.http.post(this.pathOrdenesTrabajo,{"ordId":ordId});
        }

        //CLIENTES
        getClientes():Observable<Clientes[]>{
            
            return this.http.get<Clientes[]>(this.pathClientes);
        }
        
        putClientes(cliente:Clientes):Observable<any>{
            return this.http.post(this.pathClientes,cliente);
        }
        //INVENTARIO
        getInventario():Observable<Inventario[]>{
            
            return this.http.get<Inventario[]>(this.pathInventario);
        }

        putInventario(producto:Inventario):Observable<any>{
            return this.http.post(this.pathInventario,producto);
        }
        //REQUERIMIENTOS
        getRequerimiento():Observable<Requerimientos[]>{
            return this.http.get<Requerimientos[]>(this.pathRequerimiento);
        }

        putRequerimiento(requerimiento:Requerimientos):Observable<any>{
            return this.http.post(this.pathRequerimiento,requerimiento)
        }
        //ORDENES DE COMPRA
        getOrdenes():Observable<OrdenesCompra[]>{
            return this.http.get<OrdenesCompra[]>(this.pathOrdenesCompra)
        }

        putOrdenes(ordenesCompra:OrdenesCompra):Observable<any>{
            return this.http.post(this.pathOrdenesCompra,ordenesCompra)
        }

    }
