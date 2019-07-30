import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../Services/producto.service';
import {Producto} from '../../Models/producto';
@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {
  varProducto: Producto;
  constructor(private productoSevice: ProductoService) { }

  ngOnInit() {
    this.varProducto = {referencia: '', marca: '', categoria: '', size: '', cantidad: 0, precioCompra: 0, precioVenta: 0}
  }

  addProduct(){
    this.productoSevice.addProduct(this.varProducto).subscribe();
  }
}
