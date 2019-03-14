const buildApi = require('./helpers/build-api');
const createPreviewServer = require('./helpers/create-preview-server');
const chalk = require('chalk');
const chokidar = require('chokidar');
const config = require('../config');
const path = require('path');

function rebuildBundleOnChanges() {
    const apiDirectory = path.join(config.appRoot, 'api', '**', '*.yaml');

    chokidar.watch(apiDirectory, {
        ignoreInitial: true
    }).on('all', function () {
        buildApi();
    });
}

const server = createPreviewServer();

server(rebuildBundleOnChanges)

// server.start(function (err) {
//     if (err) {
//         throw chalk.red(err);
//     }

//     console.log(chalk.cyan('swagger preview server running at http://localhost:%s?url=api'), server.info.port);
//     rebuildBundleOnChanges();
// });