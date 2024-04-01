import jwt from "jsonwebtoken"

export const profile = {
    id: "007",
    email: "prathameshkaratkar@gmail.com",
    password: "123456",
    name: "Prathamesh Karatkar",
    city: "Solapur",
    state: "Maharashtra"
}

export const signinUser = (req,res) =>{
    const {email, password} = req.body;

    if(email !== profile.email || password !== profile.password) {
        return res.status(401).send({message: "Your credential are invalid"})
    }

    

    return res.status(200).send({
        
        meta:{message: "you're logged in"}
    })
}
