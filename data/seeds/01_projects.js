
exports.seed = function(knex, Promise) {
  return knex('table_name').insert([
  {
    name: 'WebDB guided/challenge', 
    description: '1 week of learning Relational Databases',
    completed: true
  },
  {
    name: 'Sprint Challenge RDBMS',
    description: 'projects and actions',
    completed: false
  },
  {
    name: 'Build Week 2',
    description: 'Fifastats 2019',
    completed: true
  }
      ]);
};
