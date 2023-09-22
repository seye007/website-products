using Microsoft.AspNetCore.Mvc;
using CustodianProduct.MVC.Models;
using CustodianProduct.MVC.Services;
using CustodianProduct.MVC.Dto.Request;

namespace CustodianPlc.Controllers
{
	[Route("Sales")]
	[AutoValidateAntiforgeryToken]
	public class SavingAndInvestmentController : Controller
    {
		private readonly IPaymentService _paymentService;
		private readonly ILogger<SavingAndInvestmentController> _logger;

		public SavingAndInvestmentController(IPaymentService paymentService, ILogger<SavingAndInvestmentController> logger)
		{
			_paymentService = paymentService;
			_logger = logger;
		}
		

		[HttpGet("Savings-and-Investments/{productName}")]
		public async Task<IActionResult> CapitalBuilder([FromRoute] string productName)
		{
			try
			{
				await Task.Delay(5000);
				var product = SavingsandInvestmentsProducts.FirstOrDefault(p => p == productName.ToLower());
				if (product != null)
				{
					ViewData["productName"] = string.Join(' ', product.Split('-')
						.Select(s => s.First().ToString().ToUpper() + s.Substring(1)).ToArray());
					return View();
				}

				return View("Error404");
			}
			catch (Exception ex)
			{
				_logger.LogError(ex, "An error occurred while processing the Index action method in the Product controller: {ErrorMessage}", ex.Message);
				return View("Error500");
			}

		}

		
		[HttpPost("Savings-and-Investments/{productName}")]
		public IActionResult CapitalBuilder([FromRoute] string productName, LifeQuoteVm model)
		{
			var paystackRequest = PaystackRequest(model, "CompanyName");
			var response = _paymentService.MakePayment(paystackRequest);
			if (!string.IsNullOrEmpty(response.Item1) && !string.IsNullOrEmpty(response.Item2))
			{
				return Redirect(response.Item1);
			}
			return View();
		}

		private  List<string> SavingsandInvestmentsProducts = new List<string>()
		{"capital-builder","esusu-shield","personal-provident-plan"};

		private PaystackTransactionRequest PaystackRequest(LifeQuoteVm lifeQuoteVm, string companyName)
		{
			return  new PaystackTransactionRequest
			{
				Email = lifeQuoteVm.Email,
				Amount = lifeQuoteVm.Premium,
				Company = companyName
			};
		}
	}
}
