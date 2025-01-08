import { Router } from 'express';
import IndexController from '../controllers';

const routes = Router();
const controller = new IndexController();

routes.get('/cars', controller.getCars.bind(controller));
routes.post('/cars', controller.createCar.bind(controller));

export default routes;