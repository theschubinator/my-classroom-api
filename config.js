'use strict';

const path = require('path');

const appRoot = __dirname;
const distDirectory = path.join(appRoot, 'dist');

module.exports = Object.freeze({
    apiFilepath: path.join(appRoot, 'api', 'api.yaml'),
    appRoot,
    distDirectory,
    apiBundledPath: path.join(distDirectory, 'api', 'api.yaml'),
    dataPath: path.join(appRoot, 'data'),
    handlersPath: path.join(appRoot, 'handlers')
});