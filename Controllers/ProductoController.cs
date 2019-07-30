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

    public class ProductoController:ControllerBase
    {
        private readonly DbaContext _context;

        public ProductoController(DbaContext context)
        {
            _context = context;
            if (_context.Productos.Count() == 0)
            { 
            // Crea un nuevo item si la coleccion esta vacia,
            // lo que significa que no puedes borrar todos los Items.
            _context.Productos.Add(new Producto { Id="P1",  Marca = "Muchs", Categoria = "Automovil"
                                                    , Size = "18'"
                                                    ,Stock = 50
                                                    ,PrecioCompra =25000
                                                    ,PrecioVenta=35000}
                                                    );
            _context.SaveChanges();
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Producto>>> GetProductos(){
            return await _context.Productos.ToListAsync();
        }
        [HttpPost]
        public async Task<ActionResult<IEnumerable<Producto>>> PostClientes(Producto newProducto){
            var varProducto = await _context.Productos.FindAsync(newProducto.Id) ;
            if (varProducto!=null)
            {
                return NotFound();
            }else{
                _context.Productos.Add(newProducto);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetProductos), new { id = newProducto.Id }, newProducto);
            }
            
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Producto>> GetProducto(string id){
            var varProducto = await _context.Productos.FindAsync(id);
            if (varProducto==null)
            {
                return NotFound();
            }else{
                return varProducto;
            }
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProductos(string id,Producto newProducto){
            
            if (!String.Equals(id,newProducto.Id))
            {
                return NotFound();
            }
            _context.Entry(newProducto).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductos(string id){
            var varProducto = await _context.Productos.FindAsync(id);
            if (varProducto==null)
            {
                return NotFound();
            }
            _context.Productos.Remove(varProducto);
            await _context.SaveChangesAsync();
            return NoContent();
        }

    }
}