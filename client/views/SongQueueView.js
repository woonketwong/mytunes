// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  el: '<section>',

  initialize: function(params){
     //_.bindAll(this, 'addController');
    // save the params object to songQueue collection
    this.collection = params.collection;
    console.log(this);
    this.listenTo( this.collection, 'add', this.addController);
    this.listenTo( this.collection, 'pop', this.update );
    this.render();
  },

  //   // 1) check counter
  //   //    may call collection playFirst()
  //   // 2) this.render
  // },

  render: function() {
    var self = this;
    $(this.el).append('<ol></ol>');
    _(this.collection.models).each(function(song){
      var songView = new SongQueueEntryView({model: song});
      $('ol', self.el).append(songView.render().el);
    });
    // return this.$el;
  },

  addController: function(song){
    console.log('here2');
    console.log(this);
    console.log(this.collection.models.length);
    if (this.collection.models.length === 1){
      console.log('here2');
      this.collection.playFirst();
    }
    this.render();
    // console.log(this.collection.length);
    //var songQueueEntryView = new SongQueueEntryView({model: song});
    //$('section').append(songQueueEntryView.render().el);
  },

  appendItem: function(song){
    // console.log("Hey")
    var songView = new SongQueueEntryView({model: song});
    $('ol', this.el).append(songView.render().el);
  }

});



