

MVCDataTableJqueryBootStrap = {

    init: function () {
    
        this.intGetData();
  
    },

    initDataTable: function () {
        var table = $('#tableContract').DataTable({
            "language": {
                "sProcessing": "Przetwarzanie...",
                "sLengthMenu": "Pokaż _MENU_ pozycji",
                "sZeroRecords": "Nie znaleziono pasujących pozycji",
                "sInfoThousands": " ",
                "sInfo": "Pozycje od _START_ do _END_ z _TOTAL_ łącznie",
                "sInfoEmpty": "Pozycji 0 z 0 dostępnych",
                "sInfoFiltered": "(filtrowanie spośród _MAX_ dostępnych pozycji)",
                "sInfoPostFix": "",
                "sSearch": "Szukaj:",
                "sUrl": "",
                "oPaginate": {
                    "sFirst": "Pierwsza",
                    "sPrevious": "Poprzednia",
                    "sNext": "Następna",
                    "sLast": "Ostatnia"
                }
            }
        });

        MVCDataTableJqueryBootStrap.returnDataTable = function () {
            return table;
        }
    },

intGetData: function () {
   
    $.ajax({
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        type: "POST",
        url: "/JqueryExample/GetPersonData/",
        cache: false
    }).done(function (data) {
        var contracts = data;
     
        $.each(contracts, function (index, value) {
            MVCDataTableJqueryBootStrap.buildContractRecord(value);
        });

        MVCDataTableJqueryBootStrap.initDataTable();
    }).fail(function (d) {

    });
},

buildContractRecord: function (contractModel) {
    $('#tableContract tbody ').append('<tr>' +
        '<td>' + contractModel.NameAndSurName +
        '</td>' +
        '<td>' + contractModel.Age +
        '</td>' +
        '<td>' + contractModel.Pesel +
        '</td>' +
        '<td>' + contractModel.ProofOfPersonalNumbers +
        '</td>' +
        '<td>' + contractModel.NIP  +
        '</td>' +
        '<td>' + contractModel.BirthDate  +
        '</td>' +
        '<td>' + contractModel.Saldo +
        '</td>' +
        '<td>' + contractModel.NumberOfTransactions +
        '</td>' +
        '<td>' + contractModel.AmountOfTheLastTransaction +
        '</td>' +
        '<td>' + contractModel.DateOfLastTransaction +
        '</td>' +
        '<td>' + contractModel.TransferTitle +
        '</td>' +
        '<td>' + '<button type="button" class=" btn btn-info btn-xs">Szczegóły</button>' +
        '</td>' +
        '</tr>'
    );
},
};


$(function () {
    MVCDataTableJqueryBootStrap.init();
});
