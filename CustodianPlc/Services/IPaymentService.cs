using CustodianProduct.MVC.Dto.Request;

namespace CustodianProduct.MVC.Services
{
	public interface IPaymentService
	{
		(string, string) MakePayment(PaystackTransactionRequest model);
		string PaymentVerification(string reference);
	}
}