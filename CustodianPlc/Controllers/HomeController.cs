using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Mvc;

namespace CustodianPlc.Controllers
{
	public class HomeController : Controller
	{

		private readonly IDataProtectionProvider _dataProtectionProvider;
		private readonly ILogger<HomeController> _logger;

		public HomeController(ILogger<HomeController> logger, IDataProtectionProvider dataProtectionProvider)
		{
			_logger = logger;
			_dataProtectionProvider = dataProtectionProvider;
		}
	
		[HttpGet]
		[IgnoreAntiforgeryToken]
		public IActionResult CookieConsent(string returnUrl)
		{
			ViewBag.Url = returnUrl;
			return View();
		}
		[HttpPost]
		[ValidateAntiForgeryToken]
		[Route("/cookies/accept")]
		public IActionResult AcceptCookies(string productName)
		{
			// Generate a unique identifier for the user
			var cookieId = Guid.NewGuid().ToString();
			var consentDate = DateTime.Now;
			// Create a data protector
			var protector = _dataProtectionProvider.CreateProtector("MyCookieConsent");

			// Encrypt the consent value with the user ID
			var encryptedValue = protector.Protect(cookieId + "_accepted_" + consentDate);

			// Set the cookie value to the encrypted value
			HttpContext.Response.Cookies.Append($"Custodian-{productName}-Consent", encryptedValue, new CookieOptions
			{
				Expires = DateTimeOffset.UtcNow.AddYears(1),
				HttpOnly = true,
				SameSite = SameSiteMode.Strict,
				Secure = true
			});
			return Json(new { isConsent = true });
		}

/*
		 [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		 public IActionResult Error()
		 {
			 return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		 }*/
	}
}