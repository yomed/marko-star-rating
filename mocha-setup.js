'use strict';

require('marko/node-require').install();

var jsdom = require('jsdom').jsdom;

global.document = jsdom();
global.window = document.defaultView;
