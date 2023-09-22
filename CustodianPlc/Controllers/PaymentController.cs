using Microsoft.AspNetCore.Mvc;

namespace CustodianProduct.MVC.Controllers
{
	[Route("[controller]")]
	public class PaymentController : Controller
	{
		[Route("[action]")]
		public IActionResult Verification(string? reference)
		{
			return View();
		}

		[Route("[action]")]
		public IActionResult CheckOut()
		{
			return View();
		}
	}
}
