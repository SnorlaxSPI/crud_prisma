import { PrismaClient } from '@prisma/client';
import { response } from 'express';
import { CreateUserDTO } from '../dtos/CreateUserDTO';

const prisma = new PrismaClient();

class CreateUseCase {
  async execute({ name, email }: CreateUserDTO) {

    const userAlreadyExists = await prisma.user.findFirst({ where: { email }});

    if (userAlreadyExists) {
      throw new Error ('Email already exists!')
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
      }
    });
    
    return user;
 };
}

export { CreateUseCase };


