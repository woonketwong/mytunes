// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>&#920;&nbsp<%= artist %></td><td><%= title %>,&nbsp&nbspPlay&nbspCount&nbsp<%= playCount %>&nbsp</td>'),

  events: {
    'click': function(){
      this.model.enqueue();
      this.render();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
