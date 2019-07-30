import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../Services/cliente.service';
import {Cliente} from '../Models/cliente';
@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {
  public varError;
  constructor(private clienteService: ClienteService) { }
  varClientes: Cliente[];
  ngOnInit() {
    this.getClientes();
  }
  getClientes(){
   this.clienteService.getClientes().subscribe(clientes => this.varClientes = clientes );
  }
}
