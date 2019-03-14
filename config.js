'use strict';

var path = require('path');

var appRoot = __dirname,
    distDirectory = path.join(appRoot, 'dist');

module.exports = Object.freeze({
    apiFilepath: path.join(appRoot, 'api', 'api.yaml'),
    appRoot,
    distDirectory,
    apiBundledPath: path.join(distDirectory, 'api', 'bundled.yaml'),
    apiDereferencedPath: path.join(distDirectory, 'api', 'dereferenced.yaml'),
    dataPath: path.join(appRoot, 'data'),
    handlersPath: path.join(appRoot, './handlers')
});