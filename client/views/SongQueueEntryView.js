// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: "li",

  initialize: function(params){
    _.bindAll(this, 'render');
    this.render();
  },

  render: function(){
    // console.log(this.model);
    $(this.el).html(this.model.get("title") + ", " + this.model.get("artist"));
    return this;
  }

});
