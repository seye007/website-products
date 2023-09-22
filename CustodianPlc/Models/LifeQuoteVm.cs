using System.ComponentModel.DataAnnotations;

namespace CustodianProduct.MVC.Models
{
	public class LifeQuoteVm : ProductVM/*, IQuoteViewModel*/
	{
		[Required(ErrorMessage = "Please Select a Title")]
		public string Title { get; set; }
		[Required(ErrorMessage = "First name is required")]
		[RegularExpression("[a-zA-Z]{1,25}", ErrorMessage = "First name must be letters only")]
		public string FirstName { get; set; }

		[Required(ErrorMessage = "Middle name is required")]
		[RegularExpression("[a-zA-Z]{1,25}", ErrorMessage = "Middle name must be letters only")]
		public string MiddleName { get; set; }
		[Required(ErrorMessage = "Surname is required")]
		[RegularExpression("[a-zA-Z]{1,25}", ErrorMessage = "Surname must be letters only")]
		public string Surname { get; set; }
		[Required(ErrorMessage = "Email is required")]
		[EmailAddress(ErrorMessage = "Email is not valid")]
		public string Email { get; set; }
		[Required(ErrorMessage = "Gender is required")]
		public string Gender { get; set; }
		[Required(ErrorMessage = "Mobile No is required")]
		public string TelePhone { get; set; }

		[Required(ErrorMessage = "Premium is Required")]
		[Range(typeof(decimal), "500", "79228162514264337593543950335",
			ErrorMessage = "Premium must be a minimum of 500")]
		public decimal Premium { get; set; }

		[Required(ErrorMessage = "Payment Frequency is Required")]
		public string PaymentFrequency { get; set; }

		[Required(ErrorMessage = "Policy term is Required")]
		public int PolicyTerm { get; set; }

		[Required(ErrorMessage = "Target amount is Required")]
		public decimal? TargetAmount { get; set; }

		[Required(ErrorMessage = "Life sum assured is Required")]
		public decimal? LifeSumAssured { get; set; }

		[Required(ErrorMessage = "Product code is Required")]
		public string ReferenceNumber { get; set; }

		[Required(ErrorMessage = "Policy number is Required")]
		public string PolicyNumber { get; set; }

		[Required(ErrorMessage = "Date of birth is required")]
		public string DateOfBirth { get; set; }

		[Required(ErrorMessage = "Insurance start date is required")]
		public string InsuranceStartDate { get; set; }

		[Required(ErrorMessage = "Identification type is required")]
		public string IdentificationType { get; set; }
		[Required(ErrorMessage = "Identification number is required")]
		public string IdentificationNumber { get; set; }
		[Required(ErrorMessage = "Means of identification is required")]
		public IFormFile MeansOfIdentification { get; set; }

		[Required(ErrorMessage = "Projected returns is required")]
		public string ProjectedReturns { get; set; }
		public List<int> PolicyTerms { get; set; }
		public List<string> ProductFrequency { get; set; }
		public bool IsPolicyHolder { get; set; }
		public bool IsGetQuote { get; set; }
		public bool IsConsent { get; set; }



		public static LifeQuoteVm GetLifeQuoteVm(List<string> productFrequency, bool isPolicyHolder = false, bool isGetQuote = false)
		{
			var model = new LifeQuoteVm();
			if (isPolicyHolder)
			{
				model.IsConsent = true;
			}
			model.IsPolicyHolder = isPolicyHolder;
			model.IsGetQuote = isGetQuote;
			model.PolicyTerms = new List<int>() { 1, 2, 3, 4, 5 };
			model.ProductFrequency = productFrequency;
			//model.ReferenceNumber = ReferenceNumberGenerator.GenerateReferenceNumber();
			return model;
		}
	}
}
