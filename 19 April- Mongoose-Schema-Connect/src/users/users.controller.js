import UserModel from './user.model.js'

export const addUser = async(req,res) =>{
    try{
        const {name, email} = req.body;
        const userRequest = new UserModel({name, email})
        // Insert
        const dbRequest = await userRequest.save();
        res.send(dbRequest); 
    }catch(err) {
        console.log(err)
        res.status(500).send({message: "Unable to add your user. Please try later."})
    }
   
}

export const getUsersList = async(req,res) =>{
    try{
        // UserModel === db.users
        const dbResponse = await UserModel.find({isActive:true})
        res.send(dbResponse)
    }catch(err) {
        res.send({message: "Unable to send your users list. Please try later."})
    }
    
} 