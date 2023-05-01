const User = require("../models/user");
const bcrypt = require("bcrypt");

const app = require("express").Router();

app.post("/createAccount", async (req, res) => {
  let { name, mobile, email, password } = req.body;
  try {
    email = email.toString();

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    let user = await User.findOne({ email });
    if (user)
      return res
        .status(402)
        .json({ success: false, error: "user with this email exists already" });

    user = await User.create({ name, mobile, email, password });

    res.status(200).json({ data: user, success: true });
  } catch (err) {
    res.status(500).json({ err: err.message, success: false });
  }
});
app.post("/login", async (req, res) => {
  let { email, password } = req.body;

  try {
    email = email.toString();
    let user = await User.findOne({ email });
    // if (!user) {
    //   return res.status(404).json({
    //     succes: false,
    //     error: "No one is registered with this email id",
    //   });
    // }
    // let passCompare = await bcrypt.compare(password, user.password);
    // if (!passCompare)
    //   return res
    //     .status(401)
    //     .json({ succes: false, error: "Wrong credentials" });

    res.status(200).json({ data: user, success: true });
  } catch (err) {
    res.status(500).json({ err: err.message, success: false });
  }
});

  app.get('/getAllUsers', async (req, res)=>{
try{
let data = await User.find({})
res.status(200).json({data , success : true })
}
catch(err){
 res.status(500).json({err : err.message, success: false})

}
  })




module.exports = app;
