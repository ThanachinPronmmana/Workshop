exports.create = async(req,res)=>{
    try{
        res.send("Hello Category")
    }catch(err){
        console.log(err)
        res.status(500).json({
            massage:"Server error"
        })
    }
}
exports.list = async(req,res)=>{
    try{
        res.send("Hello list")
    }catch(err){
        console.log(err)
        res.status(500).json({
            massage:"Server error"
        })
    }
}
exports.remove = async(req,res)=>{
    try{
        const {id} = req.params
        console.log(id)
        res.send("Hello remove")
    }catch(err){
        console.log(err)
        res.status(500).json({
            massage:"Server error"
        })
    }
}
