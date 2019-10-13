using geekcode.helper.entitycore;
using Microsoft.EntityFrameworkCore;
using System;
using Xunit;

namespace geekcode.helper.sqlef.test
{
    public class UnitTest1
    {
        
        [Fact]
        public void Test1()
        {
            DbContextOptionsBuilder builder = new DbContextOptionsBuilder();
           // builder.UseSqlServer("Server=DESKTOP-DO91L24;Database=testshop;Trusted_Connection=false;MultipleActiveResultSets=true;User Id=testuser;Password=test123;");
            using (var context = new SqlDBContext(builder.Options))
            {
                DbInitilizer.Intilized(context);
                Assert.True(true);
                
            }
        }
    }
}
