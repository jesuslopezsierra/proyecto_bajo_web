using System;
using Newtonsoft.Json;

namespace Proyect.Models
{
    public class Cliente
    {
        [JsonProperty("identificacion")]
        public string Id { get; set; }
        [JsonProperty("nombres")]
        public string Nombres { get; set; }
        [JsonProperty("apellidos")]
        public string Apellidos { get; set; }
        [JsonProperty("telefono")]
        public string Telefono { get; set; }
        [JsonProperty("direccion")]
        public string Direccion { get; set; }
    }
}