import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { DetailsClienteComponent } from './details-cliente/details-cliente.component';
import { SearchClienteComponent } from './search-cliente/search-cliente.component';
import { DeleteClienteComponent } from './delete-cliente/delete-cliente.component';


const routes: Routes = [
  { path: '', redirectTo: 'cliente', pathMatch: 'full' },
  { path: 'listar', component:ListClienteComponent },
  { path: 'nuevo', component:CreateClienteComponent },
  { path: 'detalle', component:DetailsClienteComponent },
  { path: 'buscar', component:SearchClienteComponent },
  { path: 'eliminar', component:DeleteClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
