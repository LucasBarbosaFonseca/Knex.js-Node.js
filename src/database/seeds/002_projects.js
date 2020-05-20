
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {  
          user_id: 6,
          title: "Projeto com Node.js, React.js, Adonis.js e Redux"
        }
      ]);
    });
};
