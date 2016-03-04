
exports.up = function(knex, Promise) {
  return knex.schema.createTable('main_info', function(table){
  table.increments();
  table.string('name');
  table.string('location');
  table.string('links');
  table.string('email');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('main_info')
};