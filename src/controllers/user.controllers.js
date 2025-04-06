import mongoose from "mongoose";
import User from "../modules/user.model.js";
import hashPassword from "../utils/hashPwd.js";
import { hash } from "bcryptjs";

const Createuser = async (req,res)=>{
    //business logic for creating a user account
    const {name,email,password,mobile,gender} = req.body
    const mobilenumber = Number(mobile);

    //Check if all parameter are present
    if(!(name && email && password && gender && mobilenumber))
        return res.status(400)
                  .json({
                    success:false,
                    message:"Please enter all the fields"
                  })
    
    if(password.length < 8)
        return res.status(400)
                .json({
                    success:false,
                    message:"Password should be at least 8 characters long"
                })

    if(!email.match())
        return res.status(400)
                .json({
                    success:false,
                    message:"Invalid email id"
                })

    const hashedPassword = await hashPassword(password);

    try {
        const existinguser = await User.findOne({email:email})
        if(existinguser)
            return res.status(400)
                .json({
                    success:false,
                    message:"user with this email already exist"
                }) 

        



        const user = new User({
            name:name,
            email:email,
            password:password,
            hashPassword:hashPassword,
            mobile:mobile,
            gender:gender
        })
        user.save()
        res
            .status(200)
            .json({
                success:true,
                message:"User Created Successfully",
                user:user
            })
    } catch (error) {
        res
            .status(400)
            .json({
                success:false,
                message:error
            })
    }
}
const getAllUser = ()=>{

}
const getUser = ()=>{

}
const deleteUser = ()=>{

}
const updateUser = ()=>{
    
}

export {createUser,getAllUser,getUser,deleteUser,updateUser}