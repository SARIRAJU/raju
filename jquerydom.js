console.log('DOM jQuery');

$(document).ready(function () {
    $('#phones').click(function () {
        $(this).next().toggle(250);
    });
});

$(document).ready(function () {
    $('#pcs').click(function () {
        $(this).next().children().toggle(250);
    });
});

