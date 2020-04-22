using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Reflection;
using System.Drawing;
using System.IO;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace RestApi.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
