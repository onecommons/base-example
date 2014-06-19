var base = require("../base");
var app = base.createApp(__dirname);
app.updateNamedRoutes({
  index: function(req, res) { res.render('index.html')}
})
//add your app routes:
//app.get('/', function(req, res) { res.render('index.html');});
app.start()
