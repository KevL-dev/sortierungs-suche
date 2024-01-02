//alert("hallo");

    $(document).ready(function () {
    $('#search').on('click', function () {
        var searchTerm = $('#search-criteria').val().toLowerCase();
        var found = false;

        $('.lexikalische-begriffe').each(function () {
            var keyword = $(this).data('key').toLowerCase();
            var lexikalischeBegriffeElement = $(this);

            if (keyword.includes(searchTerm)) {
                lexikalischeBegriffeElement.show();
                found = true;
            } else {
                lexikalischeBegriffeElement.hide();
            }
        });
        if (!found) {
            alert('Keine Übereinstimmung gefunden.');
        }
    });

    $('#searchexit').on('click', function () {
    $('.lexikalische-begriffe').show();
});
});

