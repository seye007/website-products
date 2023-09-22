using BrokersPortalsV1.Extensions;

namespace CustodianProduct.MVC.Configurations
{
	public static class HostingExtentions
	{
		public static WebApplication ConfigureServices(this WebApplicationBuilder builder)
		{
			builder.Services.RegisterApplicationService(builder.Configuration);
			return builder.Build();
		}
		public static void ConfigurePipeline(this WebApplication app)
		{
			// Configure the HTTP request pipeline.
			if (!app.Environment.IsDevelopment())
			{
				app.UseExceptionHandler("/Error");
				// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
				app.UseHsts();
			}

			app.UseHttpsRedirection();
			app.UseStaticFiles();
			app.UseDetection();
			app.UseRouting();

			app.MapControllerRoute(
					name: "default",
					pattern: "{controller=Travel}/{action=travelquote}/{id?}");

			app.Run();

		}
	}
}
