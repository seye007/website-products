/*using CustodianPlc.Constants;
using CustodianPlc.Filter;
using CustodianPlc.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;

namespace CustodianPlc.Controllers
{

	[ValidateAntiForgeryToken]
	[Route("Sales/Safety-Plus-Plan")]
	public class SafetyPlusPlanController : QuoteController<SafetyPlusVm>
	{
		private readonly ISafetyPlusPlanService _safetyPlusService;
		public SafetyPlusPlanController
			(QuotePdfGenerator quoteGenerator,
			IQouteService mailService,
			ISafetyPlusPlanService safetyPlusService,
			IPdfGenerator pdfGenerator)
			: base(quoteGenerator, mailService, pdfGenerator)
		{
			_safetyPlusService = safetyPlusService;
		}
		[HttpGet]
		[IgnoreAntiforgeryToken]
		[ConsentCookie(Cookies.SafetyPlus)]
		[TypeFilter(typeof(PrivacyCookieRouterFilter))]
		public IActionResult Index()
		{
			return View();
		}

		[HttpPost]
		[ConsentCookie(Cookies.SafetyPlus)]
		[TypeFilter(typeof(PrivacyCookieRouterFilter))]
		public async Task<IActionResult> Index(SafetyPlusVm safetyPlusPlanVm)
		{
			try
			{
				if (!ModelState.IsValid)
				{
					return View(safetyPlusPlanVm);
				}

				var consent = HttpContext?.Items["ConsentCookie"]?.ToString();
				var safetPlusPlan = MapSafetyPlusData(safetyPlusPlanVm);
				await _safetyPlusService.CreateSafetyPlusPlanAync(safetPlusPlan, consent);
				return View("_Success");
			}
			catch (Exception ex)
			{
				ModelState.AddModelError("", ex.Message);
				return View(safetyPlusPlanVm);
			}

		}

		[HttpPost]
		[Route("CalculatePremium")]
		public IActionResult CalculatePremium(int unit)
		{
			if (unit > 0 && unit <= 5)
			{
				var premium = unit * 10000;
				return Json(new { premium });
			}
			return BadRequest("Error calculating premium, make sure to input a valid unit");
		}


		protected override QuoteData ProcessData(SafetyPlusVm request)
		{
			TextInfo textInfo = new CultureInfo("en-GB", false).TextInfo;
			var quote = new QuoteData();
			quote.ProcessedData = new Dictionary<string, string>();
			quote.ProcessedData["Client Name: "] = textInfo.ToTitleCase(request?.Title)
				+ " " + textInfo.ToTitleCase(request?.FirstName)
				+ " " + textInfo.ToTitleCase(request?.Surname);
			quote.ProcessedData["Product Name: "] = textInfo.ToTitleCase("Safety Plus Plan");
			quote.ProcessedData["Policy Period: "] = textInfo.ToTitleCase(request?.PolicyPeriod);
			quote.ProcessedData["Number of Unit "] = textInfo.ToTitleCase(request?.Units);
			quote.ProcessedData["Start Date: "] = request?.StartDate;
			quote.ProcessedData["Beneficiary Name: "] = request?.BeneficiaryName?.ToString();
			quote.ProcessedData["Premium Amount: "] = string.Concat(textInfo.ToTitleCase(request?.Premium));
			return quote;
		}


		private SafetyPlusRequest MapSafetyPlusData(SafetyPlusVm safetyPlusVm)
		{
			return new SafetyPlusRequest
			{
				Title = safetyPlusVm.Title,
				Surname = safetyPlusVm.Surname,
				FirstName = safetyPlusVm.FirstName,
				Email = safetyPlusVm.Email,
				Address = safetyPlusVm.Address,
				CompanyAddress = safetyPlusVm.Address,
				DateOfBirth = safetyPlusVm.DateOfBirth,
				State = safetyPlusVm.State,
				IdentificationNo = safetyPlusVm.IdentificationNo,
				IdentificationType = safetyPlusVm.IdentificationType,
				Premium = safetyPlusVm.Premium,
				TelePhone = safetyPlusVm.TelePhone,
				PolicyPeriod = safetyPlusVm.PolicyPeriod,
				Gender = safetyPlusVm.Gender,
				BeneficairyRelationship = safetyPlusVm.BeneficairyRelationship,
				BeneficiaryDateOfBirth = safetyPlusVm.BeneficiaryDateOfBirth,
				BeneficiaryIdentificationNumber = safetyPlusVm.BeneficiaryIdentificationNumber,
				BeneficiaryGender = safetyPlusVm.BeneficiaryGender,
				BeneficiaryIdentificationType = safetyPlusVm.BeneficiaryIdentificationType,
				BeneficiaryName = safetyPlusVm.BeneficiaryName,
				Units = safetyPlusVm.Units,
				CompanyName = safetyPlusVm.CompanyName,
				Occupation = safetyPlusVm.Occupation,
				StartDate = safetyPlusVm.StartDate
			};
		}
	}
}*/