using System.Runtime.CompilerServices;
using Newtonsoft.Json;
using System.Collections.Generic;
using System;
namespace Proyect.Models
{
    public class Factura
    {
        
        [JsonProperty("codigoFactura")]
        public long FacturaId { get; set; }
        [JsonProperty("fechaFactura")]
        public DateTime Fecha { get; set; }
        public Cliente Cliente { get; set; }
        [JsonProperty("listaDetalles")]
        public List<FacturaDetalle> Detalles { get; set; }
        [JsonProperty("totalCompra")]
        public double TotalCompra { get{
            return getTotal();
        } }

        public double getTotal(){
            double total = 0;
            foreach (var item in Detalles)
            {
                total = total + item.Precio;
            }
            return total;
        }
    }
}