import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{type:"string", required: true},
    email:{type:"string", required: true},
    isActive:{type:"boolean",required: true, default:true},
},{timestamps:true})

const UserModel = mongoose.model("users",userSchema);
export default UserModel