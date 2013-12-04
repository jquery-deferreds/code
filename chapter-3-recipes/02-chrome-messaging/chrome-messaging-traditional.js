chrome.tabs.sendMessage(17, { action: 'addSidebar' }, function(result){
    if (result === undefined){
        console.error('Chrome error:', chrome.runtime.lasterror.message);
    }
    else if (result.success){
        console.log('Sidebar added to DOM.');
    }
    else {
        console.error('Could not add sidebar to tab 17:', result.error);
    }
});
