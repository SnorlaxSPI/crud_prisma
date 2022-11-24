import { Router } from 'express';
import { useRoutes } from './routes';

const routes = Router();

routes.use('/users', useRoutes);

export { routes }