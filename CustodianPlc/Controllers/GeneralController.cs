using Microsoft.AspNetCore.Mvc;

namespace CustodianProduct.MVC.Controllers
{
	[Route("sales")]
	public class GeneralController : Controller
	{
		[HttpGet("General-Insurance/Home-shield")]
		public IActionResult HomeShield()
		{
			ViewData["productName"] = "Home Shield";
            return View();
		}
	}
}
