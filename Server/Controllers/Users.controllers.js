import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const RegisterUser = async (req, res) => {
  try {
    const { firstname, lastname, email, phonenumber, role, password } =
      req.body;
    const parsedphonenumber = parseInt(phonenumber);
    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        role: role,
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

export const DeleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteduser = await prisma.user.delete({
      where: { id: id },
    });
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      deleteduser,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const GetAllUsers = async (req, res) => {
  try {
    const allusers = await prisma.user.findMany();
    res.status(200).json({
      success: true,
      message: "All users fetched successfully",
      allusers,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
