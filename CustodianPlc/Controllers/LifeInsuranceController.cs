using Microsoft.AspNetCore.Mvc;
using CustodianProduct.MVC.Utilities;

namespace CustodianPlc.Controllers
{
	[Route("Sales")]
  [ValidateAntiForgeryToken]
  public class LifeInsuranceController : Controller
  {
   

    [HttpPost("Calculate-Premium")]
    public IActionResult CalculatePolicy(decimal premium, string paymentFrequency, int policyTerm)
    {

      decimal targetAmount = premium * paymentFrequencyToMultiplier(paymentFrequency) * policyTerm;

      decimal lifeSumAssured = premium * paymentFrequencyToMultiplier(paymentFrequency) * policyTerm * 8;

      var quoteReference = ReferenceNumberGenerator.GenerateReferenceNumber();

      return Json(new { targetAmount = targetAmount, lifeSumAssured = lifeSumAssured, quoteReference = quoteReference });
    }

    // A helper method to convert payment frequency codes to multipliers
    private int paymentFrequencyToMultiplier(string paymentFrequency)
    {
      switch (paymentFrequency)
      {
        case "ANNUALLY":
          return 1;
        case "Daily":
          return 365;
        case "MONTHLY":
          return 12;
        case "QUARTERLY":
          return 4;
        case "SINGLE PREMIUM":
          return 2;
        case "WEEKLY":
          return 52;
        default:
          return 0; // Invalid code
      }
    }
  }

}
