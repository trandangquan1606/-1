const express = require('express');
const router = express.Router();
// const add_Users = require('../Controller/addUser')
const HomeController = require('../Controller/ControolerUser')

const initRouter = (app)=>{
  router.get('/',HomeController.ControllerUser)
  router.get('/addUser',(req,res)=>{
    res.render('addUser')
  })
  router.get('/form_update/:id', HomeController.Updata)
  router.post('/Add',HomeController.addUser)
  router.post('/Update',HomeController.Up)
  router.get('/delete/:id',HomeController.Delete)
  return app.use('/',router)
}
module.exports = initRouter;