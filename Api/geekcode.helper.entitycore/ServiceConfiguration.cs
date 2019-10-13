using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Configuration;
using System.Configuration;

namespace geekcode.helper.entitycore
{
    public static class ServicesConfiguration
    {

        public static IServiceCollection AddSqlDB(this IServiceCollection services, IConfiguration configuration, string connectionStringName)
        {

                services.AddDbContext<SqlDBContext>(options =>
                        options.UseSqlServer(configuration.GetConnectionString(connectionStringName)));
                return services;
        }

    }
}
