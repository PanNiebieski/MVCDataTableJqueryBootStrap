

MVCDataTableJqueryBootStrap = {

    init: function () {

        this.initDataTable();
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
            },
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
            url: "/JqueryAddRowTableVersion/GetPersonData/",
            cache: false
        }).done(function (data) {

            var table = MVCDataTableJqueryBootStrap.returnDataTable();
            $.each(data, function (index, value) {

                table.row.add(value).draw();

            });
        }).fail(function (d) {

        });

    },

};


$(function () {
    MVCDataTableJqueryBootStrap.init();
});
