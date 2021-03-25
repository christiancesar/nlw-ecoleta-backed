import express, { response } from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// index - quando a rota faz listagem, 
// show - caso for ixibir apenas um registro 
// create - quando a rota cria um novo registro 
// update - quando atualiza o registro(s) 
// delete - quando deleta o registro(s)
routes.get('/items', itemsController.index); 
routes.get('/points/', pointsController.index); 
routes.post('/points', pointsController.create); 
routes.get('/points/:id', pointsController.show); 

export default routes; 