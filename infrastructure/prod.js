var base = require('./base');
var _ = require('lodash');

var prod = {
    name: 'app-book-inventory'
};

base.configurator(_.merge({}, base.config, prod));

