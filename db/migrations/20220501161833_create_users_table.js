/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema
		.createTable('users', function (table) {
			table.increments('id');
			table.string('username', 255).notNullable();
			table.string('picture_url', 255);
			table.timestamps();
		});
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
	return knex.schema
		.dropTable('users');
};
