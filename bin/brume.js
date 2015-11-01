#! /usr/bin/env node
var getBrumeInfo = require('../index.js');
getBrumeInfo()
.then(info => console.log(info.artist, '-', info.title));
