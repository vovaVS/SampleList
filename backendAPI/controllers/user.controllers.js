import { use } from "react";
import { User } from "../services/user.service.js";

const user = new User()

export const RegisterUser =  async (req, res) =>
{
    const {login, email, password} = req.body;
    const newUser = user.RegisterUser(login, email, password)
    return res.status(200).json(newUser);
}

export const LoginUser = async (req, res) =>
{
    const {login, password} = req.body;
    const loginUserData = user.LoginUser(login, password);
    return res.status(200).json(loginUserData);
}