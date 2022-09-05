/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // await knex.raw('TRUNCATE TABLE "user" CASCADE');
  // Deletes ALL existing entries
//  await knex('table_name').del()
  await knex('user').insert([
    {id: 1, username: 'ahmed',password:'12345'},
    {id: 2, username: 'ayman',password:'1234'},
    {id: 3, username: 'ahmedKamel',password:'123456'}
  ]);
};
