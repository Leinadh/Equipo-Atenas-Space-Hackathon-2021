const express = require('express');
const app = express();
const path = require('path');

//settings
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
//app.listen(port);
app.set('port', port);
//app.set('port', '3000');
app.set('views', path.join(__dirname, '/views/'));//by default Node recognizes the views folder and search for the index file
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); //by default express recognizes to ejs module

//middlewares

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, '/public/'))); //I can get any file from /public/ because is a static "global variable"

//listening the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));    
});