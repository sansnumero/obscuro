/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
	return knex.schema
		.createTable('comments', function (table) {
			table.increments('id');
			table.string('content', 1000).notNullable();
			table.uuid('user_id').notNullable().references('id').inTable('users');
			table.timestamps();
		});
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
	return knex.schema
		.dropTable('comments');
};
