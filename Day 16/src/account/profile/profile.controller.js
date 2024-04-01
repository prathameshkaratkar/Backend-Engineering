import jwt from "jsonwebtoken";
export const getUserDetails = (req,res)=>{
    const {authorization} = req.headers;

    //Validate Token
    let user = null
    try {
        user = jwt.verify(authorization,"prathameshkaratkar");

    } catch(error) {
        user = {message: "Invalid Token"}
    }

    return res.send({message: authorization, user})
}