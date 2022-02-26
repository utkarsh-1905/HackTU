const express = require("express");
const req = require("express/lib/request");
const router = express.Router({ mergeParams: true });
const User = require("../models/UserSchema");
const Ledger = require("../models/ledger");
const res = require("express/lib/response");
const { send } = require("express/lib/response");

router.get("/ledger", async (req, res) => {
  // res.status(200).json({ text: "hello" });
  const ledgerData = await Ledger.findById("621a3d9f0df0e12438a47c3b")
    .populate("user")
    .populate({
      path: "payments",
      populate: {
        path: "user",
      },
    });
  res.send(ledgerData);
});

router.post("/post", async (req, res) => {
  await User.deleteMany({});
  await Ledger.deleteMany({});
  const newUser = new User({
    username: "test",
  });
  const newUser1 = new User({
    username: "test1",
  });
  await newUser.save();
  await newUser1.save();
  const newLedger = new Ledger({
    user: newUser1._id,
    payments: { user: newUser._id, amount: 100 },
    date: Date.now(),
    due_date: Date.now(),
    type: "credit",
    status: false,
  });
  await newLedger.save();
  res.status(200).send("OK");
});

module.exports = router;
