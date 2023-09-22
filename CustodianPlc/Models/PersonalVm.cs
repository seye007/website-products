/*using CustodianProduct.Application.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace CustodianProduct.MVC.Models
{
	public class PersonalVm : ProductVM, IQuoteViewModel
	{
		[Required(ErrorMessage = "Please Select a title")]
		public string Title { get; set; }
		[Required(ErrorMessage = "First name is required")]
		[RegularExpression("[a-zA-Z]{1,25}", ErrorMessage = "First name must be letters only")]
		public string FirstName { get; set; }
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
		[Required(ErrorMessage = "Date of birth is required")]
		public string DateOfBirth { get; set; }
		public string ActionName { get; set; }
		public string ControllerName { get; set; }
		public string MiddleName { get; set; }

	}

}

*/