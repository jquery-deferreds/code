$.when(
    sendMessageDeferred(17, { action: 'addSidebar' }),
    sendMessageDeferred(18, { action: 'hideSidebar' }),
    sendMessageDeferred(19, { action: 'hideSidebar' })
)
.done(function(){
    console.log('All tab sidebars adjusted.');
})
.fail(function(error){
    console.error('Chrome error:', error);
});
