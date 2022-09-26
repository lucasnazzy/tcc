import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalcularPisosComponent } from './components/calcular-pisos/calcular-pisos.component';
import { CalcularBlocosComponent } from './components/calcular-blocos/calcular-blocos.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CalcularPisosComponent, CalcularBlocosComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
