using CustodianProduct.MVC.Models;
using Microsoft.AspNetCore.Mvc;

namespace CustodianProduct.MVC.Views.Shared.ViewComponents
{
	public class PageHeaderViewComponent : ViewComponent
	{
		public  IViewComponentResult Invoke(string productName)
		{
			var product = new ProductVM()
			{
				ProductName = productName
			};
			return View(product);
		}
	}
}
