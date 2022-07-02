let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    reputation: { type: Number, default: 0 },
  },
  { timestamps: true }
);
userSchema.index({ email: 1 });

db.data.aggregate({
  $group: {
    _id: '$reputation',
    total: { sum: 1 },
  },
});
module.exports = Schema;
