import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema
    .withSchema('public')
    .createTable('user_has_role', function (table) {
        table.integer('user_id').notNullable()
        table.foreign('user_id').references('id').inTable('users')

        table.integer('role_id').notNullable()
        table.foreign('role_id').references('id').inTable('roles')

    })
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists('user_has_role')
}

