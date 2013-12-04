var promise = $('#label').animate({ opacity: 0.25 }, 100).promise();

promise.done(function(){
    // Animation done.
});
