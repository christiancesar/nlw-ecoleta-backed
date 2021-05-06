"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seed = seed;

async function seed(knex) {
  await knex('items').insert([{
    title: 'Lâmpadas',
    image: 'lampadas.svg'
  }, {
    title: 'Pilhas e Baterias',
    image: 'baterias.svg'
  }, {
    title: 'Papéis e Papelão',
    image: 'papeis-papelao.svg'
  }, {
    title: 'Resíduos Eletrônicos',
    image: 'eletronicos.svg'
  }, {
    title: 'Resíduos Orgânicos',
    image: 'organicos.svg'
  }, {
    title: 'Óleo de Cozinha',
    image: 'oleo.svg'
  }]);
}