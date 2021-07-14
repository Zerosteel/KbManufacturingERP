import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContadorModule } from './contador/contador.module';
import { RelojComponent } from './reloj/reloj.component';
 
import { KbService } from './RestService/kb.service';

import { AppRoutingModule } from './app-routing.module';
import { InventarioComponent } from './inventario/inventario.component';
import { HeaderComponent } from './header/header.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RelojComponent,
    ClientesComponent,    
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ContadorModule,
    HttpClientModule
  ],
  providers: [KbService/* ,
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
      {
          window.location.href = (route.data as any).externalUrl;
      }
  } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
