import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class CreateUserController {
  async handle(request: Request, response:Response) {

    const { name, email } = request.body;

    const user = await prisma.user.create({
      data: {
        name,
        email,
      }
    })
    
    return response.status(201).json(user);
  }
};

export { CreateUserController };