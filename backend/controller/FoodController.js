const FoodModel = require("../Models/FoodModel.js");

exports.postdata = async (req, res) => {
  try {
    const { name, price, image, description } = req.body;

    const newFood = new FoodModel({ name, price, image, description });
    const savedFood = await newFood.save();
    res.status(200).json({ message: "Saved Data Successfully", savedFood });
  } catch (err) {
    console.error(`Error Saving into the Database ${err}`);
    res.status(500).json({ error: err.message });
  }
  //res.send("Data Saved into the Database")
};
