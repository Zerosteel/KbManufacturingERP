import { HttpClient } from '@angular/common/http'
import{Injectable} from '@angular/core'

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Inventario } from '../interfaces/interfaces';



@Injectable()
    export class KbService{
        constructor(private http:HttpClient){}
        
        getClientes(){
            const path='192.168.100.50:3000/inventario';
            return this.http.get<Inventario[]>(path);
        }




    }
