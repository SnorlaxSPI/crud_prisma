import { prisma } from '../prisma/client';
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { User } from '@prisma/client';
import { AppError } from '../errors/AppError';

class CreateUserCase {
  async execute ({ name, email }: CreateUserDTO): Promise<User> {

    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (userAlreadyExists) {
      throw new AppError ('User already exists!')
    }

    // Criar usuário
    const user = await prisma.user.create({
      data: {
        name,
        email,
      }
    });

    return user;
  }
};

export { CreateUserCase };