exports.register = async(req,res)=>{
    try{
        const {email ,password} = req.body
        if(!email){
            return res.status(400).json({
                massage:"Email is required!"
            })
        }
        console.log(email,password)
        res.send("hello")
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
