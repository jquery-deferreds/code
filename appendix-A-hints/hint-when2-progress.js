resolveValues[i].promise()
    .done(progressFunc(i))
    .done(doneFunc(i))
    .fail(failFunc(i));
