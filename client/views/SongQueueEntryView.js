// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  el: "<div>",

  template: _.template('&#920;&nbsp<%= artist %>&nbsp&nbsp&nbsp&nbsp&nbsp<%= title %>&nbsp&#9833;'),

  events: {
    'click': function(){
      // console.log(this);
    }
  },

  initialize: function(params){
    _.bindAll(this, 'render');
    this.render();
  },

  render: function(){
    return  $(this.el).html(this.template(this.model.attributes));
  }

});
