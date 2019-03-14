const SwaggerParser = require('swagger-parser');
const chalk = require('chalk');
const config = require('../config');

const parser = new SwaggerParser();
const validateOptions = {
    parse: {
        json: false,
        yaml: {
            allowEmpty: false
        }
    },
    dereference: {
        circular: false
    },
    validate: {
        spec: true,
        schema: true
    }
};

parser.validate(config.apiFilepath)
    .then(() => {
        console.log(chalk.green('swagger document verified'));
    })
    .catch((err) => {
        console.error(err);
        process.exit(1); // eslint-disable-line no-process-exit
    });