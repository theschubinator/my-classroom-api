const config = require('../config');
const fs = require('fs');
const path = require('path');
const schemaFaker = require('json-schema-faker');

module.exports = {

    get: async (request, h) => {

        function getBundledApi() {
            return JSON.parse(fs.readFileSync(config.apiDereferencedPath, 'utf8'));
        }

        const schema = getBundledApi().paths['/current-user']['get'].responses['200'].schema

        return schemaFaker.generate(schema);

        // return h.file(path.join(config.dataPath, 'current-user.json'))

    }
};