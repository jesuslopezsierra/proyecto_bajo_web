import { Cliente } from './cliente';
import { DFactura } from './d-factura';

export class Factura {
    
    codigoFactura: number;
    fechaFactura: Date;
    cliente: Cliente;
    listDetalles: DFactura[];
    totalCompra: number;
    
}
