using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace geekcode.helper.entitycore
{
   


    public static class SqlDBContextExtensionHelper  
    {

        public static void AddandCommit<T>(this DbContext context,T value) where T : class
        {
            context.Add<T>(value);
            context.SaveChanges();
        }

        public static void UpdateandCommit<T>(this DbContext context,T value) where T : class
        {
            context.Attach<T>(value);
            context.SaveChanges();
        }

        public static void RemoveandCommit<T>(this DbContext context, T value) where T : class
        {
            context.Remove<T>(value);
            context.SaveChanges();
        }
    }


}
