using CustodianProduct.MVC.Models;
using Microsoft.AspNetCore.Mvc;

namespace CustodianProduct.MVC.Views.Shared.ViewComponents
{
	public class NavSectionViewComponent: ViewComponent
	{
		public IViewComponentResult Invoke()
		{
			return View();
		}
	}
}
