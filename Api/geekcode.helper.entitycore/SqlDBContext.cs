using geekcode.helper.model;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace geekcode.helper.entitycore
{
    public class SqlDBContext : DbContext
    {

        public virtual DbSet<AuthUser> Users { get; set; }

        public virtual DbSet<Product> Products { get; set;}

        public SqlDBContext(DbContextOptions options):base(options)
        {

        }

        public SqlDBContext()
        {
        }


        /// <summary>
        /// refer the below page directory to check the things up.
        /// https://www.entityframeworktutorial.net/efcore/create-model-for-existing-database-in-ef-core.aspx
        /// </summary>
        /// <param name="modelBuilder"></param>

        protected override void OnModelCreating(ModelBuilder modelBuilder) {

            modelBuilder.Entity<AuthUser>(buildAction => {
                buildAction.ToTable("AuthUser");
                buildAction.HasKey(entity => entity.Id);
                buildAction.Property(entity => entity.Id).HasColumnName("Id").ValueGeneratedOnAdd();
                buildAction.Property(entity => entity.Username).HasColumnName("Username").IsRequired();
                buildAction.Property(entity => entity.Password).HasColumnName("Password").IsRequired();
            });

            modelBuilder.Entity<Product>(model =>
            {
                model.ToTable("Product");
                model.HasKey(e => e.Id);
                model.Property(e => e.Id).HasColumnName("Id").ValueGeneratedOnAdd();
                model.Property(e => e.Name).HasColumnName("Name");
            });


        }

    }

    public class Product
    {
        public int Amount { get; set; }

        public string Name { get; set; }

        public string Id { get; set; }
    }


    public class AuthUser
    {
        public string Id { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        // public UpdatedInfo UpdateInfo { get; set; }
    }


    public static class DbInitilizer
    {
        public static void Intilized(SqlDBContext dbbContext)
        {
            dbbContext.Database.EnsureCreated();

            if (!dbbContext.Products.Any())
            {
                dbbContext.AddandCommit<Product>(new Product() { Name = "123" });
               

            }

            dbbContext.SaveChanges();

        }
    }


}
