import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { DetailsClienteComponent } from './details-cliente/details-cliente.component';
import { SearchClienteComponent } from './search-cliente/search-cliente.component';
import { DeleteClienteComponent } from './delete-cliente/delete-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClienteComponent,
    ListClienteComponent,
    DetailsClienteComponent,
    SearchClienteComponent,
    DeleteClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
