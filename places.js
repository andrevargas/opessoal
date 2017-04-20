const sampleSize = require('lodash.samplesize');

const places = [
    {
        the: 'a',
        name: 'geladeira',
        in: 'na'
    },
    {
        the: 'a',
        name: 'pia',
        in: 'na'
    },
    {
        the: 'a',
        name: 'cozinha',
        in: 'na'
    },
    {
        the: 'o',
        name: 'microondas',
        in: 'no'
    },
    {
        the: 'o',
        name: 'microondas',
        in: 'no'
    },
    {
        the: 'o',
        name: 'corredor',
        in: 'no'
    },
    {
        the: 'a',
        name: 'sala do Marcelo',
        in: 'na'
    },
    {
        the: 'o',
        name: 'elevador',
        in: 'no'
    },
    {
        the: 'o',
        name: 'banheiro',
        in: 'no'
    },
    {
        the: 'o',
        name: 'banheiro feminino',
        in: 'no'
    }
];

exports = module.exports = (n = 1) => {

    return sampleSize(places, n);
}