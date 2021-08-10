import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { InventarioComponent } from './Components/inventario/inventario.component';
import { OrdenesCompraComponent } from './Components/ordenesCompra/ordenesC.component';
import { RequerimientosComponent } from './Components/requerimientos/requerimientos.component';
import { PiezasComponent } from './Components/piezas/piezas.component';

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
        path:'requerimientos',
        component:RequerimientosComponent
    }, 

    {
        path:'clientes',
        component:ClientesComponent
    }, 

    {
        path:'ordenesCompra',
        component:OrdenesCompraComponent
    },

    {
        path:'piezas',
        component:PiezasComponent
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