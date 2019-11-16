import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent implements OnInit {

  id: number;
  cliente: Cliente = new Cliente();

  constructor(private route: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clienteService.getClienteById(this.id)
    .subscribe(datos=>{
      console.log(datos); 
      this.cliente=datos;
    }, 
    error=>console.log(error))
  }

  actualizarCliente(){
    this.clienteService.updateCliente(this.id, this.cliente)
    .subscribe(data=>console.log(data), error=>console.log(error));
    this.cliente = new Cliente();
    this.router.navigate['listar'];
  }
}
