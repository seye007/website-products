using CustodianProduct.MVC.Configurations;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Logging;
using Serilog;

namespace CustodianProduct.MVC.Configurations
{
	public static class ConfigureSerilog
	{
		public static WebApplicationBuilder AddSerilog(this WebApplicationBuilder builder)
		{
			var logger = new LoggerConfiguration()
		   .ReadFrom.Configuration(builder.Configuration)
		   .Enrich.FromLogContext()
		   .CreateLogger();
			builder.Logging.ClearProviders();
			builder.Logging.AddSerilog(logger);
			return builder;
		}
	}
}
