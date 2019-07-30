using System;
using Newtonsoft.Json;

namespace Proyect.Models
{
    public class Producto
    {
        [JsonProperty("referencia")]
        public string Id { get; set; }
        [JsonProperty("marca")]
        public string Marca { get; set; }
        [JsonProperty("categoria")]
        public string Categoria { get; set; }
        [JsonProperty("size")]
        public string Size { get; set; }
        [JsonProperty("cantidad")]
        public int Stock{ get; set; }
        [JsonProperty("precioCompra")]
        public double PrecioCompra { get; set; }
        [JsonProperty("precioVenta")]
        public double PrecioVenta { get; set; }
    }
}