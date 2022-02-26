require("dotenv").config();
const mongoose = require("mongoose");
const ExpressError = require("../utils/ExpressError");
const Ledger = require("../models/ledger");
const User = require("../models/UserSchema");
const dbUrl = process.env.DB_URL;
const connectDB = async () => {
  await mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
connectDB()
  .then(() => console.log("Connected to Database"))
  .catch((e) => new ExpressError(e));

const seedDB = async () => {
  // await Ledger.deleteMany({});
  // await User.deleteMany({});
  const newUser = new User({
    username: "test",
  });
  const newUser1 = new User({
    username: "test1",
  });
  await newUser.save();
  await newUser1.save();
  for (let i = 0; i < 1; i++) {
    let newLedger = new Ledger({
      payments: [newUser._id, newUser1._id],
      date: new Date(),
      due_date: new Date(),
      type: `${i % 2 ? "debit" : "credit"}`,
      status: false,
    });
    await newLedger.save();
  }
};

seedDB()
  .then(() => {
    mongoose.connection.close();
    console.log("seeded");
  })
  .catch((e) => console.log(e));
