var TodosCollection = Backbone.Collection.extend({
  // Reference to this collection's model.
  model: TodoModel,

  toggleAllComplete: function () {
      todosCollection.each(function (model) {
        model.set('completed', true);
      });
    },
});

