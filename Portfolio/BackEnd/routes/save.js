const UserData = require("../models/UserData");
const router = require("express").Router();

// Save Data
router.post("/save", async (req, res) => {
  const newUser = new UserData({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to save user data" });
  }
});

// Get single data
router.get("/find/:id", async (req, res)=>{
    try{
        const user = await UserData.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});


// Get All Data
router.get("/", async (req, res)=>{
    const query = req.query.new;
    try{
        const users = query ? await UserData.find().sort({_id:-1}).limit(5) : await UserData.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
});


// Delete Single Data
router.delete("/delete/:id", async (req, res)=>{
    try{
        await UserData.findByIdAndDelete(req.params.id)
        res.status(200).json("Data has been deleted...");
    }catch(err){
        res.status(500).json(err);
    }
});


// Delete All Data
router.delete('/delete', async (req, res) => {
    try {
      await UserData.deleteMany({});
      res.status(200).json("All data deleted successfully");
    } catch (error) {
      res.status(500).json(err);
    }
  });

module.exports = router;