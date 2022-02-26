const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ledgerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  payments: [
    { user: { type: Schema.Types.ObjectId, ref: "User" }, amount: Number },
  ],
  date: Date,
  due_date: Date,
  type: String,
  status: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Ledger", ledgerSchema);
