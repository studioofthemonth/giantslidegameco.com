var express = require('express'),
    app = express();

app.configure(function () {
    app.set('views', __dirname + '/templates');
    app.set('view engine', 'jade');
    app.use(express.logger());
    app.use(express.static(__dirname + '/public'));
});

// Start router
require('./router')(app);

// Start Server
app.listen(1111);
console.log('Giant Slide Public is running on 1111');