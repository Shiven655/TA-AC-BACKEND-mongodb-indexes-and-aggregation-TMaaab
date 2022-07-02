let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: String,
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    address: {
      city: String,
      state: { type: String, unique: true },
      country: String,
      pin: Number,
    },
  },
  { timestamps: true }
);

userSchema.index({ 'address.country': 1, 'address.state': 1 });

let User = mongoose.model('User', userSchema);

module.exports = User;
