const createPreviewServer = require('./helpers/create-preview-server');
const buildApi = require('./helpers/build-api');
const server = createPreviewServer();

module.exports = async () => {
    await buildApi();
    server();
}