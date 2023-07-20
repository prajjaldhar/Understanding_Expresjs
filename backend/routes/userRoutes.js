const express = require("express");
const router = express.Router();

//Temporary data storage
let userList = [];

//API route to handle form data
router.post("/data", (req, res) => {
  const formData = req.body; //form se data lena
  //console.log(formData); //mai isko console mai dekhne ke liye likha hoon
  userList.push(formData);
  res.status(200).json({
    message: "Data is successfully recieved",
  }); //yeh chiz network mai show karega
});

//API Route to get all user Data
router.get("/data", (req, res) => {
  res.json(userList); //object ko json mai convert kar diya
});

//API route to delete a user by its index value
router.delete("/data/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    const deletedUser = userList.splice(id, 1)[0];
    res.status(201).json({
      message: `Data is successfully deleted for userid = ${deletedUser.name}`,
    });
  } else {
    res.status(404).json({
      error: "invalid request",
    });
  }
});

module.exports = router;
