
const Knex = require('knex')
const { knexSnakeCaseMappers } = require('objection')

const knex = Knex({
  client: 'mysql2',
  connection: {
    host: 'kodedaydb.c3y76lf77uyu.us-west-1.rds.amazonaws.com',
    user: 'kodedaydb',
	password: 'kodedaydb',
    database: 'kodedaydb'
  },
  ...knexSnakeCaseMappers()
})

module.exports = { knex }
