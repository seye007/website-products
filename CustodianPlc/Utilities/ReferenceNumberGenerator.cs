namespace CustodianProduct.MVC.Utilities
{
	public static class ReferenceNumberGenerator
	{
		public static string GenerateReferenceNumber()
		{
			Guid uniqueId = Guid.NewGuid();
			string timestamp = DateTime.UtcNow.ToString("yyyyMMddHHmmssfff");
			int random = new Random().Next(100, 999);

			return $"{timestamp}";
		}
	}
}
