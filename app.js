const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');

const loginRoutes=require('./Routes/login')
const taskRoutes=require('./Routes/task')

const mongoose=require('mongoose');
// to create session for the user
const session=require('express-session');
// session creation package
const MongodbStore=require('connect-mongodb-session')(session);

let mongoDbURI="mongodb://localhost:27017/taskManagement";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


let store=new MongodbStore({
    uri:mongoDbURI,
    collection:'session'
})

app.use(session({secret:'my secret',resave:false,saveUninitialized:false,store:store}));

// Using Exprted routes
app.use(loginRoutes);
app.use(taskRoutes);


// connection to the database
mongoose.connect(mongoDbURI,{useNewUrlParser:true}).then(result => {
    console.log("mongodb connected successfully");
     app.listen(4000);
     console.log("app is listening to port number 4000")
}).catch(err => {
    console.log(err);
})



