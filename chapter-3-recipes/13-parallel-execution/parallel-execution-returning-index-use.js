var fastest = fastestPromiseWithIndex(
    redisLookupAvatar('joe'),
    filesystemLookupAvatar('joe'),
    getAvatarFromGravatar('joe@example.com'));

fastest.done(function(index, avatar){
    if (index !== 0){
        // The response was not from Redis. Add avatar info to Redis so
        // we have it cached.
    }

    if (index !== 2){
        // The response was not from Gravatar. Cancel the outstanding
        // Gravatar network request.
    }

    return avatar;
});
