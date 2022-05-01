/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('votes').del()
  await knex('votes').insert([
    {
      id: 1, 
      type: 'up', 
      user_id: 2, 
      comment_id: 1, 
      created_at: Date.now(), 
      updated_at: Date.now()
    },
    {
      id: 2, 
      type: 'up', 
      user_id: 3, 
      comment_id: 2, 
      created_at: Date.now(), 
      updated_at: Date.now()
    },
    {
      id: 3, 
      type: 'up', 
      user_id: 1, 
      comment_id: 3, 
      created_at: Date.now(), 
      updated_at: Date.now()
    },
  ]);
};
