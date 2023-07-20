const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); //(cross origin resource sharing)
const userRouter = require("./routes/userRoutes");

const app = express();

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cors
app.use(cors());

//PORT
const PORT = process.env.PORT || 5000;

//use the userRoute for handling user-related routes
app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`Server chal raha hai port ${PORT} par.`);
});
