using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVCDataTableJqueryBootStrap.FakeDataObjects;
using MVCDataTableJqueryBootStrap.Models;

namespace MVCDataTableJqueryBootStrap.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var m = PersonContractModelCollection.GetContractModelCollections();

            return View(m);
        }
    }
}