const Logger = require('logplease');
const logger = Logger.create('Ej3');
const { esPar } = require('./numbers');

const numbers = [2, 3, 101, 201, 202, 100];

numbers.forEach(num => {
    if (esPar(num)) {
        logger.info(`The number ${num} is even`);
    } else {
        logger.error(`The number ${num} is not even`);
    }
});
