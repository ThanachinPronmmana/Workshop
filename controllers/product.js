const prisma = require("../config/prisma")

exports.create = async(req,res)=>{
    try{
        const {title,description,price,quantity,images,categoryId} = req.body
        const product = await prisma.product.create({
            data:{
                title:title,
                description:description,
                price:parseFloat(price),
                quantity:parseInt(quantity),
                categoryId:parseInt(categoryId),
                images:{
                    create:images.map((item)=>({
                        asset_id:item.asset_id,
                        public_id:item.public_id,
                        url:item.url,
                        secure_url:item.secure_url
                    }))
                }
              
                
            }
        })
        
        res.send(product)
    }catch(err){
        console.log(err)
        res.status(400).json({
            message:"Server error"
        })
    }
}
exports.list = async(req,res)=>{
    try{
        const {count} = req.params
        const products = await prisma.product.findMany({
            take: parseInt(count),
            orderBy:{createdAdd:"desc"}
        })
        res.send(products)
    }catch(err){
        res.status(400).json({
            message:"Server Error"
        })
    }
}
exports.remove = async(req,res)=>{
    try{
        const {id} = req.params
        const product = await prisma.product.delete({
            where:{
                id:Number.id
            }
        })
        res.send(product)
    }catch(err){
        res.status(400).json({
            message:"Server error"
        })
    }   
}
exports.listby = async(req,res)=>{
    try{

    }catch(err){

    }
}
exports.searchFilters = async(req,res)=>{
    try{

    }catch(err){

    }
}
exports.update = async(req,res)=>{
    try{

    }catch(err){

    }
}