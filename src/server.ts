import express from 'express';
import { useRoutes } from './routes/routes';

const app = express();

app.use(express.json());

app.use(useRoutes);

useRoutes.use('/users', useRoutes);

app.listen(3000, () => {
    console.log('🚀🚀 Server Started!');
});

export { app };
 