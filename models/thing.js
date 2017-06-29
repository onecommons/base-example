var brequire    = require('obase').brequire;
var createSchema = brequire('./lib/createmodel').createSchema;

// create the model for users and expose it to our app
module.exports  = createSchema('Thing', {
    name         : String,
    description  : String
});
