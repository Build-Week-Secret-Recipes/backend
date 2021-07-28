exports.seed = async function (knex){
    return knex('users').insert([
    { first_name: 'Spongebob', last_name: 'Squarepants', email: 'spongebob@gmail.com', usersname: 'sb123', password: 'imready' },
    { first_name: 'Patrick', last_name: 'Star', email: 'star@gmail.com', usersname: 'star245', password: 'rock' },
    { first_name: 'Sandy', last_name: 'Cheeks', email: 'sandyc@gmail.com', usersname: 'squirell12', password: 'texas' },
  ]);
}