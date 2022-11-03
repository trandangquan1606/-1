const modelUser = require('../module/User')

const ControllerUser = (req,res)=>{
    modelUser.find({},(error,data)=>{
        res.render('index',{datas:data})
    })
}
const Updata = (req,res)=>{
    console.log(req.params.id)
    modelUser.findById(req.params.id,(error,data)=>{
        res.render('uppdataUser',{datas:data})
        console.log(data)
    })
}
const addUser = async(req,res)=>{
   await modelUser.create(req.body);
    res.redirect('/')
}
const Up = async(req,res)=>{
    console.log(req.body.id)
   await modelUser.findByIdAndUpdate(req.body.id,req.body)
   res.redirect('/')
}
const Delete = async(req,res)=>{
    await modelUser.findByIdAndRemove(req.params.id)
    res.redirect('/')
}
module.exports = {ControllerUser,addUser,Updata,Up,Delete,}