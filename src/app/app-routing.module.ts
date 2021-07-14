import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { InventarioComponent } from './inventario/inventario.component';

const routes:Routes = [
    /* {
        path:'',
        component:InventarioComponent,
        resolve:{
            url:'externalUrlRedirectResolver'
        },
        data:{
            externalUrl:'https://www.kbmanufacturing.com.mx/'
        },
        pathMatch:'full'
    }, */
    
    {
        path:'',
        component:InventarioComponent,
        pathMatch:'full'
    },

    {
        path:'inventario',
        component:InventarioComponent
    }, 
    
    {
        path:'clientes',
        component:ClientesComponent
    }, 

    {
        path:'**',
        redirectTo: ''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}