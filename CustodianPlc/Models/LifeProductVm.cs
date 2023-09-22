using Microsoft.AspNetCore.Http;
using System;
using System.ComponentModel.DataAnnotations;

namespace CustodianProduct.MVC.Models
{
	public class LifeProductVm : ILifeProduct
	{
		[Required(ErrorMessage = "Title is required")]
		public string Title { get; set; }
		[Required(ErrorMessage = "FirstName is required")]
		public string FirstName { get; set; }
		[Required(ErrorMessage = "MiddleName is required")]
		public string MiddleName { get; set; }
		[Required(ErrorMessage = "Surname is required")]
		public string Surname { get; set; }

		[Required(ErrorMessage = "Date of birth is required")]
		public DateTime DateOfBirth { get; set; }

		[Required(ErrorMessage = "Gender is required")]
		public string Gender { get; set; }

		[Required(ErrorMessage = "Email is required")]
		[EmailAddress(ErrorMessage = "Enter a valid email format")]
		public string Email { get; set; }
		[Required(ErrorMessage = "Phone number is required")]
		public string PhoneNumber { get; set; }
		public string Product { get; set; }
		
		[Required(ErrorMessage = "Insurance start date is required")]
		public DateTime InsuranceStartDate { get; set; }

		[Required(ErrorMessage = "Identification type is required")]
		public string IdentificationType { get; set; }
		[Required(ErrorMessage = "Identification number is required")]
		public string IdentificationNumber { get; set; }
		[Required(ErrorMessage = "Means of identification is required")]
		public IFormFile MeansOfIdentification { get; set; }
	}
}
