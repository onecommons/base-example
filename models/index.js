var base = require('obase');
var brequire = base.brequire;

module.exports = exports = base.extendModels(require('./thing'))

exports.schemas.User.add({
    myThing : {type: String, ref: 'Thing'},
});
