using System;
using System.Net;
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
    public class ClienteController : ControllerBase
    {
        private readonly DbaContext _context;

        public ClienteController(DbaContext context)
        {
            _context = context;
            if (_context.Clientes.Count() == 0)
            { 
            // Crea un nuevo item si la coleccion esta vacia,
            // lo que significa que no puedes borrar todos los Items.
            _context.Clientes.Add(new Cliente {Id="1065853", Nombres = "Kevin", Apellidos = "Martinez"
                                                    , Telefono = "3003049457"
                                                    ,Direccion ="Mz g csa10"}
                                                    );
            _context.SaveChanges();
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cliente>>> GetClientes(){
            return await _context.Clientes.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Cliente>> GetCliente(string id)
        {
                var varCliente = await _context.Clientes.FindAsync(id);
                    if (varCliente == null)
                    {                   
                        return NotFound();
                    }
                        return varCliente;
        }

        [HttpPost]
        public async Task<ActionResult<IEnumerable<Cliente>>> PostClientes(Cliente newCliente){
            var varCliente = await _context.Clientes.FindAsync(newCliente.Id) ;
            if (varCliente!=null)
            {
                return BadRequest();
            }else{
                _context.Clientes.Add(newCliente);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetClientes), new { id = newCliente.Id }, newCliente);
            }
            
            
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutClienteItem(string id, Cliente varCliente)
        {
            if (!String.Equals(id,varCliente.Id) )
            {
                return BadRequest();
            }
            _context.Entry(varCliente).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClienteItem(string id)
        {
            var varCliente = await _context.Clientes.FindAsync(id);
            if (varCliente == null)
            {
                return NotFound();
            }

            _context.Clientes.Remove(varCliente);
            await _context.SaveChangesAsync();
                return NoContent();
        }
    }
}