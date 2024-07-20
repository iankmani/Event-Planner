import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  const LoggedInUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  res.json(LoggedInUser);
  if (LoggedInUser) {
    const ComparedPassword = await bcrypt.compare(
      password,
      LoggedInUser.password,
    );
    if (ComparedPassword === true)
      return res.status(200).json({
        success: true,
        message: "Logged in Successfully",
      });
  } else {
    res.status(400).json({ success: false, message: "User not found" });
  }
};
