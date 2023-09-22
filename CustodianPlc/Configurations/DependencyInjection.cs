using CustodianProduct.MVC.Configurations;
using CustodianProduct.MVC.Services;
using CustodianProduct.MVC.Settings.Options;
using PayStack.Net;

namespace BrokersPortalsV1.Extensions
{
	public static class DependencyInjection
	{
		public static void RegisterApplicationService(this IServiceCollection services, IConfiguration configuration)
		{
			var payStackSettings = configuration.GetSection("PayStackApi").Get<PayStackOptions>();

			//Business logic services registration
			services.AddScoped<IPaymentService, PaymentService>()
					.AddSingleton<IPayStackApi, PayStackApi>(serviceProvider =>
						new PayStackApi(payStackSettings.Secret)
					);
			services.AddDetection();
			services.Configure<PayStackOptions>(configuration.GetSection("PayStackApi"));
			services.AddHttpContextAccessor();
			services.AddControllersWithViews();

			//ABS-API HTTP Client
			services.AddHttpClient("AbsApi", client =>
			{
				client.BaseAddress = new Uri(configuration["AbsApi"]);
				client.DefaultRequestHeaders.Add("User-Agent", "ProductsWeb");
				client.DefaultRequestHeaders.Add("Accept", "application/json");
			});

		}
	}
}
