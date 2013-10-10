// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.songQueue = new SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    // this.model.on('change:currentSong', function(model){
    //   this.songQueue.toNextSong(model.get('songQueue'));
    // });
  },

  render: function(){
    return this.$el.html([
      this.songQueue.$el,
      this.playerView.$el,
      new LibraryView({collection: this.model.get('library')}).render()
    ]);
  }

});
