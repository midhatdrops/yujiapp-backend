import { Router } from "express";
import { getRepository } from "typeorm";
import { users } from "../Models/users";

const userRouter = Router();

userRouter.post("/", async (req, res) => {
  try {
    const repo = getRepository(users);
    const response = await repo.save(req.body);
    return res.status(201).json(response);
  } catch (err) {
    return console.log("err.message :>>", err.message);
  }
});

userRouter.get("/", async (req, res) => {
  try {
    const repo = getRepository(users);
    const response = await repo.find();
    return res.status(200).json(response);
  } catch (err) {
    return console.log("err.message :>>", err.message);
  }
});
userRouter.get("/:nome", async (req, res) => {
  try {
    const repo = getRepository(users);
    const response = await repo.find({
      where: {
        nome: req.params.nome,
      },
    });
    return res.status(200).json(response);
  } catch (err) {
    return console.log("err.message :>>", err.message);
  }
});

export default userRouter;
