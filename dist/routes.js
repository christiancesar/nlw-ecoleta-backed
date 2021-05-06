"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _PointsController = _interopRequireDefault(require("./controllers/PointsController"));

var _ItemsController = _interopRequireDefault(require("./controllers/ItemsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = _express.default.Router();

const pointsController = new _PointsController.default();
const itemsController = new _ItemsController.default(); // index - quando a rota faz listagem, 
// show - caso for ixibir apenas um registro 
// create - quando a rota cria um novo registro 
// update - quando atualiza o registro(s) 
// delete - quando deleta o registro(s)

routes.get('/items', itemsController.index);
routes.get('/points/', pointsController.index);
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);
var _default = routes;
exports.default = _default;