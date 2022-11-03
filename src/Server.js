
const express = require('express')
const connectDB = require('./config/ConnectDB')
const initView = require('./config/ConfigViewEngine')
const initRouter = require('./router/initRouter')


const app = express();
var bodyParser = require('body-parser');
const port =  3000;
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connectDB();
initRouter(app);
initView(app);
app.listen(port,()=>{
    console.log(`run at port ${port}`)
})