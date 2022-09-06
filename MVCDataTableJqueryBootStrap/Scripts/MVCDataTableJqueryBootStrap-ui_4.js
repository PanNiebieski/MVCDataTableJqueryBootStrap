

MVCDataTableJqueryBootStrap = {

    init: function () {

        this.initDataTable();
    

    },

initDataTable: function () {
    var table = $('#tableContract').DataTable({
        "ajax": {
            "url": "/DataTableAjaxDataSource/GetPersonData/",
            "type": "POST",
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
                "data": "Pesel", "render": function (data, type, full, meta) {
                return '<button id="btn_'+data+'" type="button" ' +
                    'class="btn btn-xs btn-info">Szczegóły</button>';
                }
            }
        ],

    });
},
};


$(function () {
    MVCDataTableJqueryBootStrap.init();
});
