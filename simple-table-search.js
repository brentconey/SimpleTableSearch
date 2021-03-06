﻿$(function () {
    $('.search-table-textbox').on('keyup', function (e) {
        var searchText = $(this).val();
        var $tableToSearch = $('#' + $(this).data('tableid'));
        if (searchText !== '') {
            searchText = searchText.toLowerCase();
            var $tableData = $tableToSearch.children('tbody');
            var showRows = [];
            $.each($tableData.children('tr'), function (index, tableRow) {
                $.each($(tableRow).children('td').not('.no-search'), function (ind, tableRecord) {
                    var tableTDText = tableRecord.innerHTML.toLowerCase();
                    if (tableTDText.indexOf(searchText) !== -1 && showRows.indexOf($(tableRow)) === -1) {
                        showRows.push(tableRow);
                        return false;
                    }
                });
                if ($.inArray(tableRow, showRows) === -1) {
                    $(tableRow).fadeOut('fast');
                } else {
                    $(tableRow).fadeIn('fast');
                }
            });
        } else {
            $tableToSearch.children('tbody').children('tr').show();
        }
    });
});