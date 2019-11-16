import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-search-cliente',
  templateUrl: './search-cliente.component.html',
  styleUrls: ['./search-cliente.component.css']
})
export class SearchClienteComponent implements OnInit {

  id: number;
  dni: string;
  cliente: Cliente; 

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }

  searchClienteById(){
    this.clienteService.getClienteById(this.id)
    .subscribe(cliente=>this.cliente = cliente);
  }
  searchClienteByDni(){
    this.clienteService.getClienteByDni(this.dni)
    .subscribe(cliente=>this.cliente = cliente);
  }
}
