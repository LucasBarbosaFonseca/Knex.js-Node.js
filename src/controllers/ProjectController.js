const knex = require('../database');

module.exports = {
    async create(req, res, next) {
        
        try {
            
            const { title, user_id } = req.body;

            await knex('projects').insert({
                title,
                user_id
            });

            return res.status(201).send();

        } catch (error) {
            next(error)
        }

    },

    async searchAll(req, res, next) {

        try {

            const results = await knex('projects');

            return res.json(results);
            
        } catch (error) {
            next(error)
        }

    },

    async searchByUserId(req, res, next) {

        try {

            const { user_id } = req.query;
            
            const query = knex('projects');

            if (user_id) {
                query.where({ user_id }).orWhere('deleted_at', null)
            }

            const results = await query;

            return res.json(results);

        } catch (error) {
            next(error)
        }
        
    },

    async searchWithJoin(req, res, next) {

        try {

            const { user_id } = req.query;

            const queryWithJoin = knex('projects');

            if (user_id) {
                queryWithJoin
                .where({ user_id })
                .join('users', 'users.id', '=', 'projects.user_id')
                .select('projects.*', 'users.username')
                .where('users.deleted_at', null)
            }

            const results = await queryWithJoin;

            return res.json(results);
            
        } catch (error) {
           next(error) 
        }

    }
}