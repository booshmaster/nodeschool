var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN);

var base = { name: 'book-inventory-book',
    organization: undefined,
    region: 'us',
    maintenance: false,
    stack: 'cedar-14',
    config_vars:
    { MONGODB_URI: 'mongodb://heroku_t8wt5hz7:tif7glvkt3747qgq4mpfgk3q46@ds011492.mlab.com:11492/heroku_t8wt5hz7',
        NODE_ENV: 'production' },
    addons: {},
    collaborators:
        [ 'krzysztof.sniezynski@motorolasolutions.com',
            'rafal.bodek@gmail.com' ],
    features:
    { 'runtime-dyno-metadata': { enabled: false },
        'log-runtime-metrics': { enabled: false },
        'http-session-affinity': { enabled: false },
        preboot: { enabled: false },
        'http-shard-header': { enabled: false },
        'http-end-to-end-continue': { enabled: false },
        'http-sni': { enabled: false } },
    formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
    log_drains: [],
    domains: [ 'book-inventory-book.herokuapp.com' ] };

module.exports = {
    configurator: configurator,
    config: base
};