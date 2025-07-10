// import mongoose, { Schema } from "mongoose"

// const UserSchema = new Schema({
//     profileImage:{
//         type: String,
//     },
//     username: 
//     { 
//         type: String,
//         required:true,
//         unique: true 
//     },
//     email: 
//     { 
//         type: String, 
//         required: true,
//         unique: true 
//     },
//     password: 
//     { 
//         type: String, 
//         required: true 
//     }
// });


// const User = mongoose.model('Auth', UserSchema);

// export default User







import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String
  },

  profileImage: {
    type:String
  },

  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    default: 'user'
  }
});

const User = model("Auth", userSchema);

export default User;