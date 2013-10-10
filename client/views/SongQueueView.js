// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  el: '<section>',

  initialize: function(params){
    this.collection = params.collection;
    this.listenTo( this.collection, 'add', this.addController);
    this.listenTo( this.collection, 'pop', this.update );
    this.render();
  },

  render: function() {
    var self = this;
    $(this.el).append('<ol></ol>');
    _(this.collection.models).each(function(song){
      var songView = new SongQueueEntryView({model: song});
      $('ol', self.el).append(songView.render().el);
    });
  },

  addController: function(song){
    if (this.collection.models.length === 1){
      this.collection.playFirst();
    }
    this.render();
  },

  appendItem: function(song){
    var songView = new SongQueueEntryView({model: song});
    $('ol', this.el).append(songView.render().el);
  }

});



