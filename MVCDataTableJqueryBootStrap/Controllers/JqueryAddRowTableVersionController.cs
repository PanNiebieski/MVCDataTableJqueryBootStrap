using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVCDataTableJqueryBootStrap.FakeDataObjects;

namespace MVCDataTableJqueryBootStrap.Controllers
{
    public class JqueryAddRowTableVersionController : Controller
    {
        // GET: JqueryAddRowTableVersion
        public ActionResult Index()
        {
            return View();
        }

public JsonResult GetPersonData()
{
    var collection = PersonContractModelCollection.GetContractModelCollections();

    List<Object[]> ob = new List<object[]>();

    foreach (var v1 in collection)
    {
        ob.Add(new object[] { v1.NameAndSurName, 
            v1.Age, v1.Pesel,
            v1.ProofOfPersonalNumbers,
            v1.NIP, v1.BirthDate, 
            v1.Saldo, 
            v1.AmountOfTheLastTransaction, 
            v1.DateOfLastTransaction, 
            v1.NumberOfTransactions, 
            v1.TransferTitle }
            );
    }

    return new JsonResult()
    {
        JsonRequestBehavior = JsonRequestBehavior.AllowGet,
        Data = ob
    };
}


        public JsonResult GetPersonData_()
        {
            var collection = PersonContractModelCollection.GetContractModelCollections();

            return new JsonResult()
            {
                JsonRequestBehavior = JsonRequestBehavior.DenyGet,
                Data = collection
            };
        }
    }
}