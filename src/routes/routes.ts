import { Router } from 'express';
import { CreateUserController } from '../useCases/createUser/CreateUserController';
import { ListUserController } from '../useCases/listUser/ListUserController';

const useRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

useRoutes.post('/', createUserController.handle);
useRoutes.get('/', listUserController.handle);

export { useRoutes };