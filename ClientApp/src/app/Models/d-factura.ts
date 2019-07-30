
import { Producto } from './producto';

export class DFactura {
    codigoDetalle: string;
    clienteId: string;
    producto: Producto;
    precio: number = this.producto.precioVenta * this.producto.cantidad;
}
