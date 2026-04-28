const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
// db connection
mongoose
  .connect("mongodb://abhinaybari794_db_user:Abhinay1234567@ac-l1045i3-shard-00-00.w6ovwkn.mongodb.net:27017,ac-l1045i3-shard-00-01.w6ovwkn.mongodb.net:27017,ac-l1045i3-shard-00-02.w6ovwkn.mongodb.net:27017/?ssl=true&replicaSet=atlas-hh0tvv-shard-0&authSource=admin&appName=Cluster0")
  .then(() => {
    console.log("Mongodb connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

//user schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// create user
app.post("/createuser", async (req, res) => {
  try {
    const bodyData = req.body;
    const user = new User(bodyData);
    const userData = await user.save();
    res.send(userData);
  } catch (error) {
    res.send(error);
  }
});
// read all user

app.get("/readalluser", async (req, res) => {
  try {
    const userData = await User.find({});
    res.send(userData);
  } catch (error) {
    res.send(error);
  }
});
app.get("/read/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById({ _id: id });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

// update user

app.put("/updateuser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete({ _id: id });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, () => {
  console.log(`server ise running on ...${PORT}`);
});