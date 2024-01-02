const router=require("express").Router()
const controller=require("../controller/FoodController")

router.post('/',controller.postdata)

module.exports=router