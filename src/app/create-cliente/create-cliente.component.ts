import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }

  registrarCliente(){
    this.clienteService.createCliente(this.cliente).subscribe(datos=>console.log(datos), error=>console.log(error));
    this.cliente = new Cliente();
  }
}
