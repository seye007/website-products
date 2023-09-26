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

		[HttpGet("capital-builder")]
		public IActionResult CapitalBuilder()
		{
			ViewData["productName"] = "Capital Builder";
			return View();
		}

		[HttpGet("Esusu-Shield")]
		public IActionResult EsusuShield()
		{
			ViewData["productName"] = "Esusu Shield";
			return View();
		}

		[HttpGet("personal-provident-plan")]
		public IActionResult PersonalProvidentPlan()
		{
			ViewData["productName"] = "Personal Provident Plan";
			return View();
		}


		[HttpPost("Savings-and-Investments/{productName}")]
		public IActionResult CapitalBuilder([FromRoute] string productName, LifeQuoteVm model)
		{
			try
			{
				var paystackRequest = PaystackRequest(model, "CompanyName");
				var response = _paymentService.MakePayment(paystackRequest);
				if (!string.IsNullOrEmpty(response.Item1) && !string.IsNullOrEmpty(response.Item2))
				{
					return Redirect(response.Item1);
				}
				return View();
			}
			catch (Exception ex)
			{
				_logger.LogError(ex, "An error occurred while processing the Index action method in the Product controller: {ErrorMessage}", ex.Message);
				return View("Error500");
			}
		}

		private List<string> SavingsandInvestmentsProducts = new List<string>()
		{"capital-builder","esusu-shield","personal-provident-plan"};

		private PaystackTransactionRequest PaystackRequest(LifeQuoteVm lifeQuoteVm, string companyName)
		{
			return new PaystackTransactionRequest
			{
				Email = lifeQuoteVm.Email,
				Amount = lifeQuoteVm.Premium,
				Company = companyName
			};
		}
	}
}
