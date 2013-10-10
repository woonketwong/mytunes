// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  el: '#playList',

  initialize: function(params){
    this.collection = params.collection;

    this.collection.on('add', function(model){
      this.render();
    }, this);

    this.collection.on('remove', function(model){
      this.render();
    }, this);

  },

  render: function() {
    var self = this;
    $(this.el).empty();
    this.collection.each(function(song){
      var songQueueEntry = new SongQueueEntryView({ model: song }).render();
      $(self.el).append(songQueueEntry);
    });
  }
});



