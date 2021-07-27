exports.seed = function(knex, Promise) {
    return knex('steps_ingredients').insert([   
        //Spaghet
      { steps_id: '1',ingredients_id:'',quantity:''},
      { steps_id: '2',ingredients_id:'1',quantity:'2'},
      { steps_id: '3',ingredients_id:'2',quantity:'2'},
      { steps_id: '4',ingredients_id:'3',quantity:'16'},
      //Hamburgers
      { steps_id: '5',ingredients_id:'',quantity:''},
      { steps_id: '6',ingredients_id:'6',quantity:'4'},
      { steps_id: '7',ingredients_id:'6',quantity:''},
      { steps_id: '8',ingredients_id:'7',quantity:'4'},
      { steps_id: '9',ingredients_id:'10',quantity:'4'},
      { steps_id: '10',ingredients_id:'8',quantity:'4'},
      { steps_id: '11',ingredients_id:'9',quantity:'4'},
      { steps_id: '12',ingredients_id:'11',quantity:''},
        //Sushi
      { steps_id: '13',ingredients_id:'13',quantity:'1'},
      { steps_id: '14',ingredients_id:'12',quantity:'4'},
      { steps_id: '15',ingredients_id:'5',quantity:'2'},
      { steps_id: '16',ingredients_id:'',quantity:''},
      { steps_id: '17',ingredients_id:'14',quantity:'2'},

    ]);
  };
