import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../Services/producto.service';
import { Producto } from 'src/app/Models/producto';
import { Cliente } from 'src/app/Models/cliente';
import { ClienteService } from 'src/app/Services/cliente.service';
import { Factura } from 'src/app/Models/factura';
import {DFactura} from 'src/app/Models/d-factura';
@Component({
  selector: 'app-add-ventas',
  templateUrl: './add-ventas.component.html',
  styleUrls: ['./add-ventas.component.css']
})
export class AddVentasComponent implements OnInit {
  varClient: Cliente = {identificacion: '' , nombres: 'Ninguno', apellidos: '', telefono: '', direccion: ''};
  listProducts: Producto[];
  listaCompra: Producto[] = [];
  idCliente: string;
  fechaHoy: string = this.mapFecha();
  varFactura: Factura;
  constructor(private productosService: ProductoService, private clienteService: ClienteService) { }

  ngOnInit() {
    this.getProductos();
    this.varFactura = {codigoFactura: null, fechaFactura: new Date(this.fechaHoy), cliente: this.varClient, listDetalles: null, 
      totalCompra: this.getTotal()};
  }

  private getTotal(): number {
    let varTotal = 0;
   this.listaCompra.forEach(element => {
       varTotal = element.precioVenta + varTotal;
   });
   return varTotal;
}

  getProductos() {
    this.productosService.getProducts().subscribe(result => this.listProducts = result);
  }

  getClient() {
    if ( this.idCliente.length > 0) {
    this.clienteService.getCliente(this.idCliente).subscribe(varCliente => this.varClient = varCliente);
    } else {
      alert('Digite una identificacion');
    }
  }

  addProduct(varProducto: Producto) {
    if (this.isNew(varProducto)) {
      
      varProducto.cantidad = 1;
      this.listaCompra.push(varProducto);
    }
  }


  deleteProduct(varItem: Producto) {
    const indice = this.listaCompra.indexOf(varItem);
    this.listaCompra.splice(indice, 1);
  }


  isNew(producto: Producto): boolean {
    if (this.listaCompra.includes(producto)) {
      return false;
    }
    return true;
  }

  mapFecha(): string {
    const fdate = new Date() ;
    return fdate.getDate() + '-' + (fdate.getMonth() + 1) + '-' + fdate.getFullYear();
  }
}
