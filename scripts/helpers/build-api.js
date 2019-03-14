'use strict';

const SwaggerParser = require('swagger-parser');

const config = require('../../config');

const fs = require('fs-extra');

const chalk = require('chalk');

function writeBundledApiToOutputDirectory(api) {
    const apiBundledPath = config.apiBundledPath;

    fs.outputFileSync(apiBundledPath, JSON.stringify(api));
    console.log(chalk.magenta('swagger document bundled in %s'), apiBundledPath);
}

function writeDereferencedApiToOutputDirectory(api) {
    const apiDereferencedPath = config.apiDereferencedPath;

    fs.outputFileSync(apiDereferencedPath, JSON.stringify(api));
    console.log(chalk.magenta('swagger document dereferenced in %s'), apiDereferencedPath);
}

const noOp = () => null;

module.exports = function (callback = noOp) {
    const apiFilepath = config.apiFilepath;

    const bundlePromise = SwaggerParser.bundle(apiFilepath)
        .then(function (api) {
            return writeBundledApiToOutputDirectory(api);
        });

    const dereferencePromise = SwaggerParser.dereference(apiFilepath)
        .then(function (api) {
            return writeDereferencedApiToOutputDirectory(api);
        });

    Promise.all([bundlePromise, dereferencePromise])
        .then(callback)
        .catch(function (err) {
            throw chalk.red(err);
        });
};