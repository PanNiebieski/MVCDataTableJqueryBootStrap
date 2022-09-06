using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Web;

namespace MVCDataTableJqueryBootStrap.Models
{
    public class PersonContractModel
    {
        public string Pesel { get; set; }
        public int Age { get; set; }
        public string NameAndSurName { get; set; }
        public string ProofOfPersonalNumbers { get; set; }
        public string NIP { get; set; }
        public string BirthDate { get; set; }
        public decimal Saldo { get; set; }
        public int NumberOfTransactions { get; set; }
        public decimal AmountOfTheLastTransaction { get; set; }
        public string DateOfLastTransaction { get; set; }
        public string TransferTitle { get; set; }
    }
}