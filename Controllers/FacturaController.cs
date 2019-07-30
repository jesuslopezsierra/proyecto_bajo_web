using System.Text;
using System;
using System.Collections;
using System.Net;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Proyect.Models;
namespace Proyect.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class FacturaController:ControllerBase
    {
        private readonly DbaContext _context;
        public FacturaController(DbaContext context)
        {
            List<FacturaDetalle> fDetalles = new List<FacturaDetalle>();
            fDetalles.Add(new FacturaDetalle{Producto = (new Producto{Id="P2",Marca="MNAN",Categoria="Automovil",Size="19'",Stock=5,PrecioCompra=125000,PrecioVenta=15000})});
            _context = context;
            if (_context.Facturas.Count() == 0)
            { 
            // Crea un nuevo item si la coleccion esta vacia,
            // lo que significa que no puedes borrar todos los Items.
            _context.Facturas.Add(new Factura {Fecha=DateTime.Now
                                    , Cliente = (new Cliente {Id="1010", Nombres="Kevin", Apellidos="Martinez", Telefono="30029281", Direccion="MZG casa"})
                                    , Detalles = fDetalles
            });
            _context.SaveChanges();
            }
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Factura>>> GetFacturas(){
            return await _context.Facturas.Include(d=>d.Detalles).ThenInclude(d=>d.Producto).Include(c=>c.Cliente).ToListAsync();
        }
    }
}