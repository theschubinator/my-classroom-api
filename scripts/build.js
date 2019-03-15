'use strict';

const buildApi = require('./helpers/build-api');

buildApi()

module.exports = async () => {
    await buildApi();
}
