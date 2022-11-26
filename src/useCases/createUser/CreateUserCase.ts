import { PrismaClient } from '@prisma/client';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';

const prisma = new PrismaClient();

class CreateUseCase {
  async execute({ name, email }: CreateUserDTO) { 
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    }); 

    return user;
  };
};

export { CreateUseCase };


