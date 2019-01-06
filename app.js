const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config({ path: 'dev.env' })

// use pug as template language
app.set('view engine', 'pug');
// start views from the 'views' folder
app.set('views', 'views');

// routes
const Routes = require('./routes/routes');

// controllers & helpers
const errorController = require('./controllers/ErrorController')
const helpers = require('./helpers')

// use routes
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(Routes);

app.use(errorController.get404);

// Otherwise this was a really bad error we didn't expect
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(helpers.developmentErrors);
}

// open browser on start
app.listen(process.env.PORT || 8080, () =>{
  console.log('Server running on localhost:' + process.env.PORT || 8080)
});
