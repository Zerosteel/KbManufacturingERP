import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContadorModule } from './contador/contador.module';
import { KbService } from './RestService/kb.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    HttpClientModule
    
  ],
  providers: [KbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
