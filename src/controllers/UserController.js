const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('users')

        //Trazer somente os usuários que a coluna deleted_at com valor null,
        //que não tem a data do falso delete.
        .where('deleted_at', null);

        return res.json(results);
    },

    async create(req, res, next) {
        console.log(req.body)

        try {

            const { username } = req.body;

            await knex('users').insert({
                username
            });
            
            return res.status(201).send();

        } catch (error) {
            next(error)
        }
        
    },

    async update(req, res, next) {

        try {
            
            const { username } = req.body;
            const { id } = req.params;

            await knex('users')
            .update({ username }).where({ id });

            return res.send();

        } catch (error) {
            next(error)
        }

    },

    async delete(req, res, next) {

        try {
            const { id } = req.params;

            await knex('users')
            .where({ id })
            /* Soft delete - Vamos deletar mas não deletar de verdade, vamos adicionar
            a data que foi deletado falsamente. Depois não vamos mostrar na busca
            de todos os usuários o usuário deletado falsamente, o usuário não vai ser
            deletado do banco de dados. */
            .update('deleted_at', new Date())
            //.del();

            return res.send();
            
        } catch (error) {
            next(error)
        }

    }
}