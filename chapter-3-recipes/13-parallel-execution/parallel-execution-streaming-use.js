var fastest = delegateEventStream([redisLookupAvatar('joe'),
                                   filesystemLookupAvatar('joe'),
                                   getAvatarFromGravatar('joe@example.com')],
                                  eventHandler);

fastest.done(function(avatar){
    // Use the avatar.
});
