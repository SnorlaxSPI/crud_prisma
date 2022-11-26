import { Request, response, Response } from 'express';
import { ListUserCase } from './ListUserCase';

class ListUserController {

  async handle(request: Request, response: Response) {
    const { name, email } = request.body;

    const listUserCase = new ListUserCase();
    
    const user = await listUserCase.execute();
   
    return response.status(200).json(user);
  }
};

export { ListUserController };