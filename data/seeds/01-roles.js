exports.seed = async function (knex){
    await knex('users').truncate()
    await knex('roles').truncate()
    await knex('roles').insert([
        {role_name:'admin'},
        {role_name:'user'},
    ])
    await knex('users').insert([
       { 
        username:'Mariah',
        password:'1234',
        role_id:1,
    },
       { 
        username:'Michelle',
        password:'1234',
        role_id:2,
    },
    ])
}