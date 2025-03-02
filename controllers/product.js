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
        res.status(500).json({
            message:"Server error"
        })
    }
}
exports.list = async(req,res)=>{
    try{
        const {count} = req.params
        const products = await prisma.product.findMany({
            take: parseInt(count),
            orderBy:{createdAdd:"desc"},
            include:{
                category:true,
                images:true,
            } //include คือ รวมถึงการรวมตาราง category และ image มาโชว์ด้วย
        })
        res.send(products)
    }catch(err){
        res.status(500).json({
            message:"Server Error"
        })
    }
}
exports.remove = async(req,res)=>{
    try{
        const {id} = req.params

        //ต้องทำของที่อยู่ในอีกtable ด้วย


        await prisma.product.delete({
            where:{
                id:Number(id)
            }
        }) //แต่มีรูปอยู่ในคลาวด้วย
        res.send("Delete Sccess")
    }catch(err){
        res.status(500).json({
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
        const {title,description,price,quantity,categoryId,images} = req.body
    
        //clear images

        await prisma.image.deleteMany({
            where:{
                productId:Number(req.params.id)
            }
        })
        const product = await prisma.product.update({
            where:{
                id:Number(req.params.id)
            },
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
        res.status(500).json({
            message:"Server error"
        })
    }
}
exports.read = async (req,res)=>{
    try{
        const {id} = req.params
        const products = await prisma.product.findFirst({
            where:{
                id:Number(id)
            },
            include:{
                category:true,
                images:true
            }
            
        })
        res.send(products)
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"Server Error"
        })
    }
}