var base = require('./base');
var _ = require('lodash');

var test = {
    name: 'app-book-inventory-test'
};

base.configurator(_.merge({}, base.config, test));

