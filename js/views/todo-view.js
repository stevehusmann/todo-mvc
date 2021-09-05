// The DOM element for a todo item...
TodoView = Backbone.View.extend({
  //... is a list tag.
  tagName:  'li',

  events: {
    'click .toggle':'toggleCompleted',
    'click .destroy':'destroyModel',
  },

  toggleCompleted: function () {
    this.model.toggle();
  },

  destroyModel: function () {
    this.model.destroy();
  },

  // Cache the template function for a single item.
  template: Handlebars.compile($('#item-template').html()),

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    this.$el.toggleClass('completed', this.model.get('completed'));

    return this;
  },
});