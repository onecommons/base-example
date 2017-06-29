var base = require('obase');
var app = base.createApp(__dirname, {
  routes: {
    //add a new route
    index: function(req, res) {
      res.status(200).send("my custom index route");
    },
    //remove a route:
    //foo
  }
});

//app is an express application, add additional configuration if necessary
//e.g. app.use(...);

//start the app
if (require.main === module) {
  app.start();
}
module.exports = app;
