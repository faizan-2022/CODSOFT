const Item = require("../models/Item");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//CREATE Items

router.post("/", verifyTokenAndAdmin, async (req,res)=>{
    const newItem = new Item(req.body)

    try{
        const savedItem = await newItem.save();
        res.status(200).json(savedItem);
    }catch(err){
        res.status(500).json(err);
    }
})

//UPDATE Items
router.put("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try{
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new: true}
        );
        res.status(200).json(updatedItem);
    }catch(err){
        res.status(500).json(err);
    }
});

//DELETE Items

router.delete("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try{
        await Item.findByIdAndDelete(req.params.id)
        res.status(200).json("Item has been deleted...");
    }catch(err){
        res.status(500).json(err);
    }
});


//GET Items

router.get("/find/:id", async (req, res)=>{
    try{
        const item = await Product.findById(req.params.id);
        res.status(200).json(item);
    }catch(err){
        res.status(500).json(err);
    }
});

//GET ALL Items

router.get("/", async (req, res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try{
        let items;
        if(qNew){
            items = await Item.find().sort({createdAt: -1}).limit(1);
        }else if(qCategory){
            items = await Item.find({categories: {
                $in: [qCategory],
            },
        });
        }else{
            items = await Item.find();
        }
        res.status(200).json(items);
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;