const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/nytreact",
//   {
//     useMongoClient: true
//   }
// );
if(process.env.NODE_ENV == 'production'){
  // Gotten using `heroku config | grep MONGODB_URI` command in Command Line
  mongoose.connect('mongodb://heroku_b1gmf87k:a513rrhtaikr597ug58qdeh1fq@ds163294.mlab.com:63294/heroku_b1gmf87k');
}
else{
  mongoose.connect('mongodb://localhost/nytreact');
}
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
