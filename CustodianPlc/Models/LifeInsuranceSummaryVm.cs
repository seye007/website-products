using System;

namespace CustodianProduct.MVC.Models
{
	public class LifeInsuranceSummaryVm
	{
		public string Email { get; set; }
		public decimal Premium { get; set; }
		public string PaymentFrequency { get; set; }
		public int PolicyTerm { get; set; }
		public decimal TargetAmount { get; set; }
		public decimal LifeSumAssured { get; set; }
		public string ProductCode { get; set; }
		public string ReferenceNumber { get; set; }
		public DateTime CreatedAt { get; set; }
	}
}
