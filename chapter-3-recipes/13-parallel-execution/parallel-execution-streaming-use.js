var fastest = delegateEventStream([avatarFromRedis('joe'),
                                   avatarFromFilesystem('joe'),
                                   avatarFromGravatar('joe@example.com')],
                                  eventHandler);

fastest.done(function(avatar){
    // Use the avatar.
});
