import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CreateUseCase } from './CreateUserCase';

const prisma = new PrismaClient();

class CreateUserController {
  async handle(request: Request, response:Response) {
    const { name, email } = request.body;

    const createUserCase = new CreateUseCase();

    const userAlreadyExists = await prisma.user.findFirst({ where: { email }});

    if (userAlreadyExists) {
      return response.status(400).json({ error: "Já existe um e-mail" });
    }

    const user = await createUserCase.execute({ name, email });
   
    return response.status(201).json(user);
  }
};

export { CreateUserController };