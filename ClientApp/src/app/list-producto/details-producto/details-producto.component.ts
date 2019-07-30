import { Component, OnInit } from '@angular/core';
import {Producto} from '../../Models/producto';
import {ProductoService} from '../../Services/producto.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-details-producto',
  templateUrl: './details-producto.component.html',
  styleUrls: ['./details-producto.component.css']
})
export class DetailsProductoComponent implements OnInit {
  varProducto: Producto;
  constructor(private productoService: ProductoService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.varProducto = {referencia: '000', marca: 'NN', categoria: 'NN', size: '0"', cantidad: 0, precioCompra: 1000, precioVenta: 200 }
    this.getProduct();
  }

  getProduct(){
    const varId = this.router.snapshot.paramMap.get('id');
    this.productoService.getProduct(varId).subscribe(producto => this.varProducto = producto);
  }

}
