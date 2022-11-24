import { Router } from 'express';
import { CreateUserController } from '../useCases/CreateUserController';

const createUserController = new CreateUserController();

const useRoutes = Router();

useRoutes.post('/', createUserController.handle);

export { useRoutes };