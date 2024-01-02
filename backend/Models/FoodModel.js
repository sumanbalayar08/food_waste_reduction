const {
    Schema,
    model
  } = require("mongoose");
  
  const FoodSchema = new Schema({
    name: {
      type: String,
      required: true,
      maxlength: 50
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
        maxlength:200
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const FoodModel = model("food", FoodSchema)
  
  module.exports = FoodModel