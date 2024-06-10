import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    avatar: {
      type: String,
    },
    createdate: {
      type: Date,
      default: Date.now, // Set the default value to the current date and time
    },
    avator: {
      type: String,
      default:
        "https://images.pexels.com/photos/20441505/pexels-photo-20441505/free-photo-of-crouching-by-wall-woman-in-trench-coat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
