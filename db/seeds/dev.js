/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
// exports.seed = async function(knex) {
//   // await knex.raw('TRUNCATE TABLE "user" CASCADE');
//   // Deletes ALL existing entries
// //  await knex('table_name').del()
//   await knex('student').insert([
//     {id: 1, name: 'ahmed',class_id:'1'},
//     {id: 2,id: 1, name: 'ayman',class_id:'1'},
//     {id: 3,id: 1, name: 'mohammed',class_id:'1'},
//   ]);
// };
exports.dev = function(knex) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
            {id: 1, name: 'ahmed',class_id:'1'},
            {id: 2, name: 'ayman',class_id:'1'},
            {id: 3, name: 'mohammed',class_id:'1'},
          ])
    });
};
