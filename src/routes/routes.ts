import { Router } from 'express';
import { CreateUserController } from '../useCases/CreateUserController';

const useRoutes = Router();

const createUserController = new CreateUserController();

useRoutes.post('/', createUserController.handle);

export { useRoutes };