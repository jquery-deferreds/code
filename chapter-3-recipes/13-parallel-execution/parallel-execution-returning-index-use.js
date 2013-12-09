var fastest = fastestPromiseWithIndex([
    avatarFromRedis('joe'),
    avatarFromFilesystem('joe'),
    avatarFromGravatar('joe@example.com')
])
.then(function(index, avatar){
    if (index !== 0){
        // The response was not from Redis. Add the avatar info to Redis so
        // we have it cached.
    }

    if (index !== 2){
        // The response was not from Gravatar. Cancel the outstanding
        // Gravatar network request.
    }

    return avatar;
});

fastest.done(function(avatar){
    // Use the avatar.
});
