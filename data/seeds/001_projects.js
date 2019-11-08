const lists = [
  {
    title: "Grocery List"
  },
  {
    title: "Work Out"
  },
  {
    title: "ToDo"
  }
];




exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'rowValue1'},
        { name: 'rowValue2'},
        {name: 'rowValue3'}
      ]);
    });
};
