using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Mvc;

namespace CustodianProduct.MVC.Controllers
{
	public class SecurityController : Controller
	{
		private readonly IAntiforgery _antiforgery;
		private readonly ILogger<SecurityController> _logger;

		public SecurityController(IAntiforgery antiforgery, ILogger<SecurityController> logger)
		{
			_antiforgery = antiforgery;
			_logger = logger;
		}

		[HttpGet("GetAntiForgeryToken")]
		public IActionResult GetAntiForgeryToken()
		{
			try
			{
				var antiforgeryTokens = _antiforgery.GetAndStoreTokens(HttpContext);
				var antiforgeryToken = antiforgeryTokens.RequestToken;
				return Json(new { antiforgeryToken });
			}
			catch(Exception ex)
			{
				_logger.LogError(ex, "An error occurred while processing the Index action method in the Product controller: {ErrorMessage}", ex.Message);
				return StatusCode(500);
			}
		}
	}
}
