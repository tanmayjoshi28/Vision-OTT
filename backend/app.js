const express = require("express");
const videoRoutes = require('./src/routes/videos.route');
const bookmarkRoutes = require('./src/routes/bookmark.route');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*' }));

const port = 3000;

app.use(function (request, response, next) {
	console.log("REQUEST:" + request.method + "   " + request.url);
	console.log("BODY:" + JSON.stringify(request.body));
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	response.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.use('/videoContent', videoRoutes);
app.use('/bookmark', bookmarkRoutes);

app.listen(port, () => console.log(`Server listening on port ${port}`))


