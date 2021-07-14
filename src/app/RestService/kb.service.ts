import { HttpClient } from '@angular/common/http'
import{Injectable} from '@angular/core'

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Clientes } from '../interfaces/clientes.interface';
import { Inventario } from '../interfaces/Inventario.interface';



@Injectable()
    export class KbService{
        constructor(private http:HttpClient){}

        pathClientes='/api/clientes'
        pathInventario='/api/inventario';
        
        getClientes():Observable<Clientes[]>{
            
            return this.http.get<Clientes[]>(this.pathClientes);
        }
        
        putClientes(cliente:Clientes):Observable<any>{
            return this.http.post(this.pathClientes,cliente);
        }

        getInventario():Observable<Inventario[]>{
            
            return this.http.get<Inventario[]>(this.pathInventario);
        }

        putInventario(producto:Inventario):Observable<any>{
            return this.http.post(this.pathInventario,producto);
        }

    }
