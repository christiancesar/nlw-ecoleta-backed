"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("../database/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PointsController {
  async index(request, response) {
    const {
      city,
      uf,
      items
    } = request.query;
    const parsedItems = String(items).split(',').map(item => Number(item.trim()));
    const points = await (0, _connection.default)('points').join('point_items', 'points.id', '=', 'point_items.point_id').whereIn('point_items.item_id', parsedItems).where('city', String(city)).where('uf', String(uf)).distinct().select('points.*');
    return response.json(points);
  }

  async show(request, response) {
    const {
      id
    } = request.params;
    const point = await (0, _connection.default)('points').where('id', id).first();

    if (!point) {
      return response.status(400).json({
        message: 'point not found.'
      });
    }

    const items = await (0, _connection.default)('items').select('items.title').join('point_items', 'items.id', '=', 'point_items.item_id').where('point_items.point_id', id);
    return response.json({
      point,
      items
    });
  }

  async create(request, response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = request.body;
    const trx = await _connection.default.transaction();
    const point = {
      image: 'image-fake',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    };
    const insertedIds = await trx('points').insert(point);
    const point_id = insertedIds[0];
    const pointItems = items.map(item_id => {
      return {
        item_id,
        point_id
      };
    });
    await trx('point_items').insert(pointItems);
    await trx.commit();
    return response.json({
      id: point_id,
      ...point
    });
  }

}

var _default = PointsController;
exports.default = _default;