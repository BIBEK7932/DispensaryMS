const router = require("express").Router();
const adminModel = require("../model/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dctrModel = require("../model/dctrModel");
const bookModel = require("../model/bbokMode");

router.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const userExist = await adminModel.findOne({ email: req.body.email });
    if (userExist) {
      return res
        .status(500)
        .send({ message: "User already Exist", success: false });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashPassword;

    const newUser = new adminModel(req.body);

    await newUser.save();
    res.status(200).send({
      message: "USer created successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const user = await adminModel.findOne({ email: req.body.email });
    if (!user) {
      res.status(500).send({ message: "user don't exist" });
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(500).send({ message: "Error" });
    }

    const token = jwt.sign({ userId: user._id }, "arijit", {
      expiresIn: "30d",
    });

    return res.status(200).send({
      message: "User login successfully",
      success: true,
      userId: user._id,
      name: user.name,
      token: token,
      success: true,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("/get-doctor", async (req, res) => {
  try {
    const data = await dctrModel.find({});
    return res.status(201).send({
      message: "Fetch succesfully",
      success: true,
      data: data,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
router.put("/make-doctor",async(req,res)=>{
    try {
        console.log(req.query.id)
        const id = req.query.id;
        const data = await dctrModel.findById(id)
        const isDoctor = !data.isDoctor;
        await dctrModel.findByIdAndUpdate(id, { isDoctor });
        return res.status(201).send({
            message:"Updated succesfully",
            success:true,
            data:data
        })
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.get("/get-all-patient",async(req,res)=>{
  try {
    const data = await bookModel.find({});
    const medicines = data.map((item) => ({
      medicine: item.medicine, // Assuming you want to include the user's ID
      nextdate: item.nextdate,
    }));
    return res.status(201).send({
      message:"fetch",
      success:true,
      data:data,
      medicine:medicines,
    })
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
})

module.exports = router;