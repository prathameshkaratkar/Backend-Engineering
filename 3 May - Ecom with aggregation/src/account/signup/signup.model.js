import {Schema, models} from 'mongoose';

const userSchema = Schema(
    {
        userName: {type: 'string', required: true},
        email : {type: 'string', required: true, unique: true},
        phone: {type:string}
    },
    {
        timestamps: true
    }
)

export const UserModel = model("users",userSchema)