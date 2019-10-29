using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using geekcode.helper.entitycore;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
           //CreateWebHostBuilder(args).Build().Run();
            var host = new WebHostBuilder().UseKestrel().UseIISIntegration().UseStartup<Startup>()
                .UseUrls("https://localhost:5000")
            .ConfigureAppConfiguration((hostingContext, config) =>
            {
                var env = hostingContext.HostingEnvironment;
                config.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                      .AddJsonFile($"appsettings.{env.EnvironmentName}.json",
                          optional: true, reloadOnChange: true);
                config.AddEnvironmentVariables();
            })
        .ConfigureLogging((hostingContext, logging) =>
        {
            // Requires `using Microsoft.Extensions.Logging;`
            logging.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
            logging.AddConsole();
            logging.AddDebug();
            logging.AddEventSourceLogger();
        })
        .ConfigureKestrel((context,options)=> { });

            var hostbuild = host.Build();


            using (var scope = hostbuild.Services.CreateScope())
            {
                var provicder = scope.ServiceProvider;
                DbInitilizer.Intilized(provicder.GetRequiredService<SqlDBContext>());
            }

            hostbuild.Run();
            
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>().UseUrls("https://localhost:4000");
            
    }
}
