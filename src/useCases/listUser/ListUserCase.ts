import { User } from '@prisma/client';
import { prisma } from '../../prisma/client';

class ListUserCase {
  async execute(): Promise<User[]> {
    const users = await prisma.user.findMany({});

    return users;
  }
};

export { ListUserCase };