import { PrismaClient} from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();

export const LoginUser = async (req, res) => {
  
  const { email, password } = req.body;
  const LoggedInUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (LoggedInUser) {
    const ComparedPassword = await bcrypt.compare(
      password,
      LoggedInUser.password,
    );
    if (ComparedPassword){
      const payload = {
        id: LoggedInUser.id,
        email: LoggedInUser.email,
        role: LoggedInUser.role,
        
      }
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "999h",
      })
      res.cookie("access_token", token, {httpOnly: true})
      res.status(200).json({success: true, message: "Logged in Successfully", LoggedInUser, token})
    }
  } else {
    res.status(400).json({ success: false, message: "User not found" });
  }
};
