var promise = $.when(
    $('#label-1').animate({ opacity: 0.25 }, 100),
    $('#label-2').animate({ opacity: 0.75 }, 200)
);
