import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";

import { User } from "../models/user";
import { Cart } from "../models/cart";

const register = async (req: Request, res: Response) => {
  const hashPassword = await bcrypt.hash(req.body.password, 12);

  const user = await User.save({ ...req.body, password: hashPassword });
  //if a new user is created, then a new cart must be created
  await Cart.save({
    user: {
      email: user.email,
    },
  });

  return res.status(201).json(user);
};

const login = async (req: any, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  const isValidPassword = await bcrypt.compare(password, user!.password);

  if (!(user && isValidPassword)) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  const me = {
    name: user.name,
    email: user.email,
  };

  req.session.user = me;

  return res.status(200).json({ message: "loged 😊", user: me });
};

const loginRequired = async (req: any, res: Response, next: NextFunction) => {
  if (!req.session || !req.session.user) {
    return res
      .status(400)
      .json({ message: "You must login to access to this route" });
  }

  next();
};

const logout = async (req: any, res: Response) => {
  delete req.session.user;

  res.json({ message: "Loged out 😢" });
};

const whoami = async (req: any, res: Response) => {
  res.status(200).json({ user: req.session.user });
};

export { register, login, whoami, loginRequired, logout };
