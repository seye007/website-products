using PayStack.Net;
using Wangkanai.Detection.Services;
using Newtonsoft.Json;
using Microsoft.Extensions.Options;
using CustodianProduct.MVC.Dto.Request;
using CustodianProduct.MVC.Settings.Options;
using CustodianProduct.MVC.Utilities;

namespace CustodianProduct.MVC.Services
{
	public class PaymentService : IPaymentService
	{
		private readonly IPayStackApi _paystack;
		private readonly PayStackOptions _payStackOptions;
		private readonly IDetectionService _detectionService;
		private readonly ILogger<PaymentService> _logger;
		public PaymentService(IPayStackApi payStackApi, IDetectionService detectionService,
			IOptions<PayStackOptions> payStackOptions, ILogger<PaymentService> logger)
		{
			_paystack = payStackApi;
			_payStackOptions = payStackOptions.Value;
			_detectionService = detectionService;
			_logger = logger;
		}

		public (string, string) MakePayment(PaystackTransactionRequest model)
		{
			string response = null;
			var request = PreparePaystakRequest(model);
			var reqStr = JsonConvert.SerializeObject(request);
			_logger.LogInformation($"Paystack Request {JsonConvert.SerializeObject(request)}");
			var transactionResponse = _paystack.Transactions.Initialize(request);
			if (transactionResponse.Status)
			{
				response = transactionResponse.Data.AuthorizationUrl;
			}
			_logger.LogInformation($"Paystack Response {JsonConvert.SerializeObject(transactionResponse)}");
			return (response, request.Reference);
		}

		public string PaymentVerification(string reference)
		{
			TransactionVerifyResponse Transactionresponse = _paystack.Transactions.Verify(reference);
			return Transactionresponse?.Data?.GatewayResponse;
		}

		private List<CustomField> GenerateMetaData(string companyName)
		{
			var deviceUsed = _detectionService.Device.Type.ToString();
			var metaData = new List<CustomField>()
			{
			new CustomField("Category","category","Purchase"),
			new CustomField("Data Source","dataSource","Website"),
			new CustomField("Device Used","deviceUsed",deviceUsed),
			new CustomField("Company", "Company", "Travel")
			};
			return metaData;
		}

		private TransactionInitializeRequest PreparePaystakRequest(PaystackTransactionRequest paystackTransaction)
		{
			int.TryParse(paystackTransaction.Amount.ToString(), out int amount);
			TransactionInitializeRequest request = new()
			{
				AmountInKobo = amount * 100,
				Email = paystackTransaction.Email,
				Reference = $"{Constants.TrxRef}{DateTime.Now.ToString("yyyyyMMddHHmmss")}{Guid.NewGuid().ToString()[..3]}",
				Currency = Constants.Currency,
				CallbackUrl = _payStackOptions.CallBackUrl,
				CustomFields = GenerateMetaData(paystackTransaction?.Company)
			};
			request.Prepare();
			return request;
		}
	}
}
