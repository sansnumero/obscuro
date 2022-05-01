/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1, 
      username: 'Lorem ipsum', 
      picture_url: 'https://image.shutterstock.com/image-photo/green-stretch-led-lights-600w-122249020.jpg', 
      created_at: Date.now(), 
      updated_at: Date.now()
    },
    {
      id: 2, 
      username: 'Dolor sit amet', 
      picture_url: 'https://image.shutterstock.com/image-photo/purple-pink-stretch-led-lights-600w-417917353.jpg', 
      created_at: Date.now(), 
      updated_at: Date.now()
    },
    {
      id: 3, 
      username: 'Consectetur adipiscing', 
      picture_url: 'https://image.shutterstock.com/image-photo/red-stretch-led-lights-600w-417917368.jpg', 
      created_at: Date.now(), 
      updated_at: Date.now()
    }
  ]);
};
