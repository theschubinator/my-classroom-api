const Chance = require('Chance');

const chance = new Chance();

module.exports = {

    post: async (request) => {

        const id = chance.natural();

        return {...request.payload, id}
    }

};