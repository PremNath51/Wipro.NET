using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using System.IO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace RestApi
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IAppSettings, AppSettings>(p => { return new AppSettings(Configuration.GetSection("AppSettings").AsEnumerable()); });

            //In-Memory
            services.AddDistributedMemoryCache();
            services.AddSession(options =>
            {
                options.IdleTimeout = System.TimeSpan.FromHours(4); // increasing the time for session.
            });

            var manager = new ApplicationPartManager();
            manager.ApplicationParts.Add(new AssemblyPart(typeof(Startup).Assembly));
            services.AddSingleton(manager);

            // Add framework services.
            services.AddMvc();
            services.AddScoped<IHttpContextAccessor, HttpContextAccessor>();
        }
        public void AddToStaticRoot(IApplicationBuilder app, IHostingEnvironment env, string path)
        {
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, path)),
                RequestPath = "/" + path
            });
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request processing pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            //loggerFactory.AddConsole(Configuration.GetSection("Logging"));
           // loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                AddToStaticRoot(app, env, "node_modules");
                AddToStaticRoot(app, env, "ClientApp");
                app.UseDeveloperExceptionPage();
                //app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            //If we comment this out , static files like css, image files cannot be used
            app.UseStaticFiles();
            app.UseSession();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
