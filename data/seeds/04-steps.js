exports.seed = function(knex, Promise) {
    return knex('steps').insert([   
        //Spaghet
        { steps_name: 'preheat oven',steps_order:'1',recipe_id:'1'},
        { steps_name: 'boil water in a pot',steps_order:'2',recipe_id:'1'},
        { steps_name: 'add pasta',steps_order:'3',recipe_id:'1'},
        { steps_name: 'add tomato sauce',steps_order:'4',recipe_id:'1'},
        //Hamburgers
        { steps_name: 'preheat stove and oil up skillet',steps_order:'1',recipe_id:'2'},
        { steps_name: 'slap out seasoned hamburger meat and place on skillet ',steps_order:'2',recipe_id:'2'},
        { steps_name: 'cook hamburger meat to desired tempature',steps_order:'3',recipe_id:'2'},
        { steps_name: 'place cooked hamburger meat onto hamburger buns',steps_order:'4',recipe_id:'2'},
        { steps_name: 'place cheese onto warm meat',steps_order:'5',recipe_id:'2'},
        { steps_name: 'add onions',steps_order:'6',recipe_id:'2'},
        { steps_name: 'add tomatoes',steps_order:'7',recipe_id:'2'},
        { steps_name: 'add ketchup',steps_order:'8',recipe_id:'2'},
        //Sushi
        { steps_name: 'prepare fish',steps_order:'1',recipe_id:'3'},
        { steps_name: 'boil sushi rice',steps_order:'2',recipe_id:'3'},
        { steps_name: 'prepare vegetables',steps_order:'3',recipe_id:'3'},
        { steps_name: 'combine ingredients on top of seaweed',steps_order:'4',recipe_id:'3'},
        { steps_name: 'roll seaweed and cut sushi roll',steps_order:'5',recipe_id:'3'},
    ]);
  };