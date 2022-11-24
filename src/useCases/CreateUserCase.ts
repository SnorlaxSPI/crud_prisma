import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';

const prisma = new PrismaClient();

//const CreateUserCase = async(
//  request: Request, response: Response, next: NextFunction) => {
//
//    const { email } = request.body;
//
//    let user = await prisma.user.findFirst({ where: { email }});
//
//    if (user) {
//      return response.status(400).json({ error: 'email already exists!'});
//    }
//
//    return next();
//  };
//
//  export { CreateUserCase };

class CreateUserCase {
  async findByName(request: Request, response:Response, next:NextFunction) {
    const { email } = request.body;

    let user = await prisma.user.findFirst({ where: { email }});

    if (user) {
      return response.status(400).json({ error: 'Email already exists!'});
    }

    return next();
  }
};

export { CreateUserCase };