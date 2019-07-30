import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../Services/cliente.service'
import { Cliente } from 'src/app/Models/cliente';
import {HttpRequest} from '@angular/common/http';
@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {
  varCliente: Cliente;
  varError: Cliente;
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.varCliente = {identificacion: '0', nombres: '', apellidos: '', telefono: '', direccion: '' }
  }

  addCliente(){
      this.clienteService.addCliente(this.varCliente).subscribe( );
  }
}
