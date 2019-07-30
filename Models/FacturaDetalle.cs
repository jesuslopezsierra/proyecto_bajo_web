using System.Net.Http.Headers;
using Newtonsoft.Json;
namespace Proyect.Models
{
    public class FacturaDetalle
    {
        
        [JsonProperty("codigoFDetalle")]
        public long FacturaDetalleId { get; set; }
        [JsonProperty("clienteId")]
        public string ClienteId { get; set; }
        [JsonProperty("producto")]
        public Producto Producto { get; set; }
        [JsonProperty("precio")]
        public double Precio { get{
            return Producto.PrecioVenta*Producto.Stock;
        }
        }
    }
}