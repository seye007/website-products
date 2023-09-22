using CustodianProduct.MVC.Configurations;
using Serilog;

try
{

	Log.Logger.Information("Applicatin starting up");
	var builder = WebApplication.CreateBuilder(args).AddSerilog();
	var app = builder.ConfigureServices();
	app.ConfigurePipeline();
	app.Run();
}
catch (Exception e)
{
	Log.Logger.Fatal(e, "The application failed to start correctly successfuly");
}
finally
{
	Log.CloseAndFlush();
}
