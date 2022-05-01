/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
	return knex.schema
		.createTable('votes', function (table) {
			table.increments('id');
			table.string('type', 100).notNullable();
			table.uuid('user_id').notNullable().references('id').inTable('users');
			table.uuid('comment_id').notNullable().references('id').inTable('comments');
			table.timestamps();
		});
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
	return knex.schema
		.dropTable('votes');
};
