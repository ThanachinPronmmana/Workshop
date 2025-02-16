const prisma = require('../config/prisma')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
exports.register = async(req,res)=>{
    try{
        const {email ,password} = req.body
        if(!email){
            return res.status(400).json({
                massage:"Email is required!"
            })
        }
        if(!password){
            return res.status(400).json({
                massage:"Password is required!"
            })
        }
        const user = await prisma.user.findFirst({
            where:{
                email:email
            }
        })
        if(user){
            return res.status(400).json({
                massage:"Email already exits"
            })
        }
        const hashPassword = await bcrypt.hash(password,10)

        await prisma.user.create({
            data:{
                email:email,
                password:hashPassword
            }
        })
    

  
        res.send("Register Success")
    }catch(err){
        console.log(err)
        res.status(500).json({
            massage:"Server error"
        })
    }



}
exports.login = async(req,res)=>{

    try{
        res.send("hello login c")
    }catch(err){
        console.log(err)
        res.status(500).json({
            massage:"Server error"
        })
    }

}
exports.currentUser = async(req,res)=>{
    try{
        res.send("Hello user")
    }catch(err){
        console.log(err)
        res.status(500).json({
            massage:"Server error"
        })
    }
}
