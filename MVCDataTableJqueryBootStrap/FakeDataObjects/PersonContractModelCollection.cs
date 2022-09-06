using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MVCDataTableJqueryBootStrap.Models;

namespace MVCDataTableJqueryBootStrap.FakeDataObjects
{
public class PersonContractModelCollection
{
    public static IList<PersonContractModel> GetContractModelCollections()
    {
        List<PersonContractModel> list = new List<PersonContractModel>();

        list.Add(new PersonContractModel()
        {
            Age = 26,
            NameAndSurName = "Cezary Walenciuk",
            BirthDate = "12-11-1988",
            NIP = "9558451100",
            Pesel = "10062419671",
            ProofOfPersonalNumbers = "ADH665100",
            Saldo = 100,
            NumberOfTransactions = 2,
            AmountOfTheLastTransaction = 200,
            DateOfLastTransaction = "2014-11-12",
            TransferTitle = "Przeksięgowanie"
        });

        list.Add(new PersonContractModel()
        {
            Age = 30,
            NameAndSurName = "Jan Kowalski",
            BirthDate = "12-11-1988",
            NIP = "1100451100",
            Pesel = "62419671500",
            ProofOfPersonalNumbers = "AJK699900",
            Saldo = -60,
            NumberOfTransactions = 4,
            AmountOfTheLastTransaction = 400,
            DateOfLastTransaction = "2014-11-25",
            TransferTitle = "Przeksięgowanie"
        });


        list.Add(new PersonContractModel()
        {
            Age = 60,
            NameAndSurName = "Zygmunt Waza",
            BirthDate = "06-12-1954",
            NIP = "3337483333",
            Pesel = "72041908711",
            ProofOfPersonalNumbers = "AJA567322",
            Saldo = 500,
            NumberOfTransactions = 5,
            AmountOfTheLastTransaction = 800,
            DateOfLastTransaction = "2014-11-25",
            TransferTitle = "Zaplata za fakutrę 11/222"
        });

        return list;
    }
}
}