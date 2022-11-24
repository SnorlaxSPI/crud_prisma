 import { Request, Response } from 'express';
import { CreateUserCase } from './CreateUserCase';

class CreateUserController {
  async handle(request:Request, response:Response) {

    const { name, email } = request.body;

    const createUserCase = new CreateUserCase();

    const result = await createUserCase.execute({ name, email });

    return response.status(201).json(result);
  }
};

export { CreateUserController };