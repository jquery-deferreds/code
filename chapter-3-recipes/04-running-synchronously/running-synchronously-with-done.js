var promise = $('#label-1').animate({ opacity: 0.25 }, 100).promise()
    .done(
        function(){
            return $('#label-2').animate({ opacity: 0.75 }, 200).promise();
        }
    );
