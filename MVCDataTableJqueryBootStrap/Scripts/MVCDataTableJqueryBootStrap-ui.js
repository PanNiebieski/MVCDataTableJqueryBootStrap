

MVCDataTableJqueryBootStrap = {

    init: function () {
        this.initDataTable();
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
};

$(function () {
    MVCDataTableJqueryBootStrap.init();
});
