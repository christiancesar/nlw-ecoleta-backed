import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index (request: Request, response: Response) {
        const items = await knex('items').select('*');
      
        const seralizedItems = items.map(item => {  
            return {
                id: item.id,
                name: item.title,
                image_url: `${process.env.BASE_URL}:${process.env.PORT}/uploads/${item.image}`,
                
            };                      
        });
        return response.json(seralizedItems);
    }
    
}

export default ItemsController;