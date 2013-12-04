var lookup = fastestPromiseWithIndex(
    redisLookupEmail('joe'),
    databaseLookupEmail('joe')
)
.then(function(index, email){
    var avatarLookup;
    if (index !== 0){
        // Add email address to Redis so we have it cached.
    }
    avatarLookup = fastestPromiseWithIndex(
        redisLookupAvatar('joe'),
        filesystemLookupAvatar('joe'),
        getAvatarFromGravatar(email)
    );

    avatarLookup.then(function(index, avatar){
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

    return avatarLookup.promise();
});
