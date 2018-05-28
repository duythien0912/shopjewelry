"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require("uuid/v4");

var _v2 = _interopRequireDefault(_v);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true
  },
  password: String,
  nickname: String,
  role: { type: String, default: "user" }
});
var userModel = _mongoose2.default.model("user", userSchema);

var emailAdmin = process.env.ADMIN_EMAIL || "admin@gmail.com";

userModel.findOne({ "email": emailAdmin }, function (err, user) {

  if (err) {
    console.log("Error", err);
  } else {
    if (!user) {
      var user = new userModel({
        email: process.env.ADMIN_EMAIL || "admin@gmail.com",
        password: process.env.ADMIN_PASSWORD || (0, _v2.default)(),
        nickname: "admin",
        role: "admin"
      });

      user.save(function (err, user) {
        if (err) {
          console.log("Error create new Admin account", err);
        }
        console.log("New Admin account: ", user.email, user.password);
      });
    } else {
      console.log("Admin account: ", user.email, "pass: ", user.password);
    }
  };
});

exports.default = userModel;
//# sourceMappingURL=userModel.js.map