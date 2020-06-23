//requires
const express= require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

//db config req
const db = require('./config/keys').MongoURL; 

//Var
const app = express();

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true})
    .then(() => console.log('MongoDb Connected...') )
    .catch(err => console.log(err));

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


//Bodyparser
app.use(express.urlencoded({extended: false }));


//ROUTES
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

//other
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));