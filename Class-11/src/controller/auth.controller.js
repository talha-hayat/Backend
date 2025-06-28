import jwt from "jsonwebtoken"
import User from "../model/auth.model.js"

// SIGNUP 
export const createuser = async (req,res)=>{
    try {
        const {email}= req.body 
        const userExist = await User.findOne({email})

        if (userExist){
            return res.status(400).json({
                message:"User already exists",
            })
        }

        const user = await User.create(req.body)
        return res.status(201).json({
            message:"User created successfully",
            user,
        })

    } catch (error) {
        return res.status(500).json({
            message:"An error occurred while creating user",
            error:error.message,
        })
    }
}

// LOGIN 
export const login = async (req,res)=>{
    try {
      const {email,password} = req.body
      const findUser = await User.findOne({email})
      if(!findUser){
        return res.status(400).json({
            message:"User not Exists",
        })
      } 
      const comparePassword = password===findUser.password
      if(!comparePassword){
        return res.status(400).json({
            message:"Invalid credentials",
        })
      }

      const token = jwt.sign({id:findUser._id},process.env.JWT_TOKEN,{expiresIn:"1h"})

      res.status(200).json({
        message:"Login successful",
        user:findUser,
        token,
      })

    } catch (error) {
        return res.status(500).json({
            message:"An error occurred while logging in",
            error:error.message,
        })
    }
}