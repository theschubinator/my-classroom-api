const config = require('../config');
const path = require('path');

module.exports = {

    get: async (request, h) => {

        return h.file(path.join(config.dataPath, 'current-user.json'))

    }
};