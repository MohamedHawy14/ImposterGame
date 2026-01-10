using Microsoft.AspNetCore.Mvc;

namespace ImposterGame.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
