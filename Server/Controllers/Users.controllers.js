import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const RegisterUser = async (req, res) => {
  try {
    const { firstname, lastname, email, phonenumber, password } = req.body;
    const parsedphonenumber = parseInt(phonenumber);
    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phonenumber: parsedphonenumber,
        password: hashedpassword,
      },
    });
    res
      .status(201)
      .json({ success: true, message: "Signup successful", newUser });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
