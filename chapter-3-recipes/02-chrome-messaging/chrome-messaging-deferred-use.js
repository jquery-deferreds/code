sendMessageDeferred(17, { action: 'addSidebar' })
.done(function(result){
    if (result.success){
        console.log('Sidebar added to DOM.');
    }
    else {
        console.error('Could not add sidebar to tab 17:', result.error);
    }
})
.fail(function(error){
    console.error('Chrome error:', error);
});
