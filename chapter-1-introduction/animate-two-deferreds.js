var promise1 = $('#label-1').animate({ opacity: 0.25 }, 100).promise();
var promise2 = $('#label-2').animate({ opacity: 0.75 }, 200).promise();

$.when(promise1, promise2).done(function(){
    // Both animations are done.
});
