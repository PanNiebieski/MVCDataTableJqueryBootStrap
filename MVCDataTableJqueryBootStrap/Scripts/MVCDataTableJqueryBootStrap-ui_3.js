

MVCDataTableJqueryBootStrap = {

    init: function () {

        this.initDataTable();
        this.intGetData();

    },

initDataTable: function () {
    var table = $('#tableContract').DataTable({
        "language": {

        },
        "columns": [
            { "data": "NameAndSurName" },
            { "data": "Age" },
            { "data": "Pesel" },
            { "data": "ProofOfPersonalNumbers" },
            { "data": "NIP" },
            { "data": "BirthDate" },
            { "data": "Saldo" },
            { "data": "NumberOfTransactions" },
            { "data": "AmountOfTheLastTransaction" },
            { "data": "DateOfLastTransaction" },
            { "data": "TransferTitle" },
            {
                "data": "Pesel",
                "render": function(data, type, full, meta) {
                    return '<button id="btn_' + data + '" type="button" class="btn btn-xs btn-info">Szczegóły</button>';
                }
            }
        ],
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
        url: "/JqueryAddRow/GetPersonData/",
        cache: false
    }).done(function (data) {
        var contracts = data;
        var table = MVCDataTableJqueryBootStrap.returnDataTable();


        var counter = 1;
        $.each(contracts, function (index, value) {
            table.row.add(value).draw();
            counter++;
        });
    }).fail(function (d) {

    });
},

};


$(function () {
    MVCDataTableJqueryBootStrap.init();
});
