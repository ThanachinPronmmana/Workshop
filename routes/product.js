const express = require("express")
const router = express.Router()
const {create,remove,list,listby,searchFilters,update,read} = require("../controllers/product")

router.post("/product",create)
router.get("/products/:count",list)
router.get("/product/:id",read)
router.delete("/product/:id",remove)
router.post("/productby",listby)
router.post("/search/filters",searchFilters)
router.put("/product/:id",update)


module.exports = router