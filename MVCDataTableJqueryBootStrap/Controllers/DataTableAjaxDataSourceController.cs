using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVCDataTableJqueryBootStrap.FakeDataObjects;

namespace MVCDataTableJqueryBootStrap.Controllers
{
    public class DataTableAjaxDataSourceController : Controller
    {
        // GET: DataTableAjaxDataSource
        public ActionResult Index()
        {
            return View();
        }


        public JsonResult GetPersonData()
        {
            var collection = PersonContractModelCollection.GetContractModelCollections();

            return new JsonResult()
            {
                JsonRequestBehavior = JsonRequestBehavior.DenyGet,
                Data = new 
                {
                    data = collection
                }
            };
        }
    }
}