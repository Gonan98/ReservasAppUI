import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../model/cliente';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {

  clientes: Cliente[];
  apellidos = '';

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.clienteService
    .getClienteList()
    .subscribe(clientes=>this.clientes=clientes);
  }

  deleteCliente(cliente: Cliente){
    this.clienteService
    .deleteCliente(cliente.id)
    .subscribe(
      datos=>{
        this.loadData();
      });
  }

  searchData(){
    if(this.apellidos.length != 0){
      this.clienteService.getClienteByApellidos(this.apellidos).subscribe(clientes=>this.clientes=clientes);
    }
    else{
      this.loadData();
    }
  }

  updateCliente(cliente: Cliente){
    this.router.navigate(['actualizar',cliente.id]);
  }
}
