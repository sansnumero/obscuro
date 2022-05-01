/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('comments').del()
  await knex('comments').insert([
    {
      id: 1, 
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
      user_id: 1,
      upvote_count: 10,
      created_at: Date.now(), 
      updated_at: Date.now()
    },
    {
      id: 2, 
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
      user_id: 2, 
      upvote_count: 20,
      created_at: Date.now(), 
      updated_at: Date.now()
    },
    {
      id: 3, 
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
      user_id: 3, 
      upvote_count: 30,
      created_at: Date.now(), 
      updated_at: Date.now()
    }
  ]);
};
