import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../Services/cliente.service';
import {Cliente} from '../../Models/cliente';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-details-cliente',
  templateUrl: './details-cliente.component.html',
  styleUrls: ['./details-cliente.component.css']
})
export class DetailsClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService,private router: ActivatedRoute) { }
  varCliente: Cliente;
  ngOnInit() {
    this.varCliente= {identificacion:"0",nombres:'nn',apellidos: 'nn', telefono: '0000', direccion: 'nn'}
    this.getCliente();
  }

  getCliente(){
    const varId= this.router.snapshot.paramMap.get('id');
    this.clienteService.getCliente(varId).subscribe(cliente => this.varCliente = cliente );
  }
  updateCliente(){
    const varId= this.router.snapshot.paramMap.get('id');
    this.clienteService.updateCliente(varId, this.varCliente).subscribe();
  }

  deleteCliente(){
    const varId = this.router.snapshot.paramMap.get('id');
    this.clienteService.deleteCliente(varId).subscribe();
  }
}
