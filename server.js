const express = require(id = 'express');
const app = express();
const bodyParser = require (id = 'body-parser');
const PORT=4000;
const cors = require(id = 'cors');

const mongoose = require(id = 'mongoose');
const config = require(id = './DB.js');
const businessRoute = require(id = './business.route'); 

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    onfulfilled=()=>{console.log('Database is connected')},
    onrejected=err => {console.log('cannot connect to the database'+err)}
);


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(fn = '/business',businessRoute);

app.listen(PORT, function(){
    console.log('Server is running on port :', PORT);
});
