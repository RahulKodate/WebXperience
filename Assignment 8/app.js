const express = require("express");
const app = express();

const mongoose = require("mongoose");
// const userSchema = require("./models/userModel");
const userRouters = require("./routes/userRouters");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");

app.use(express.json());
mongoose.connect(
  "mongodb+srv://kodatera1:kodatera1@cluster1.rqvpmrd.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Connected to db");
    } else {
      console.log("Error with connection");
    }
  }
);

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/user/create", userRouters);
app.use("/user/edit", userRouters);
app.use("/user/delete", userRouters);
app.use("/user/getAll", userRouters);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8001;

app.listen(PORT, console.log(`Server started running on PORT ${PORT}`));
