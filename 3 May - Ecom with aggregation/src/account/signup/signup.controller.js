import { UserModel } from "./signup.model.js";

export const signupUser = async (req,res) => {
    try{
        const payload = req.body;
        const User = new UserModel(payload);
        const response = await User.save();
        res.send({message: "User sigup successful"})
    }catch(err) {
        console.log(err)
        res.status(500).send({message: "Unable to add your user. Please try later."})
    }
}