using Microsoft.EntityFrameworkCore;
namespace Proyect.Models
{
    public class DbaContext:DbContext
    {
        public DbaContext(DbContextOptions<DbaContext> options) :
        base(options)
        {
        }
            public DbSet<Cliente> Clientes { get; set; }
             public DbSet<Producto> Productos { get; set; }
            public DbSet<Factura> Facturas{get; set; }
            public DbSet<FacturaDetalle> FacturaDetalles{get; set; }
    }
}