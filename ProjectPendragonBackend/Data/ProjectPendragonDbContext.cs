using Microsoft.EntityFrameworkCore;
using ProjectPendragonBackend.Models;

namespace ProjectPendragonBackend.Data
{
    public class ProjectPendragonDbContext : DbContext
    {
        public ProjectPendragonDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Character> Characters { get; set; }
        public DbSet<Date> Dates { get; set; }
    }
}