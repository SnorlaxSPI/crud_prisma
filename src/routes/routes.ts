import { Router } from 'express';
import { CreateUserCase } from '../useCases/CreateUserCase';
import { CreateUserController } from '../useCases/CreateUserController';

const useRoutes = Router();

const createuserController = new CreateUserController();
const createUserCase = new CreateUserCase();

useRoutes.post('/', createUserCase.findByName, createuserController.handle);

export { useRoutes };