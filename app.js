var base = require(process.env.BASESRC || 'base');

var app = base.createApp(__dirname);

//app.updateNamedRoutes({
//  index: base.utils.renderer('index.html'),
//});

app.start();
