$('div').each(function(i){
    $(this).fadeIn().fadeOut(1000 * (i + 1));
});

$('div').promise().done(function(){
    // All <div> animations are finished.
});
