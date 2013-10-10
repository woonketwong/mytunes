// Song.js - Defines a backbone model class for songs.
var Song = Backbone.Model.extend({

  initialize: function(params){
    if (params !== undefined) {
      if (localStorage[params.title]){
        this.set("playCount", localStorage[params.title]);
      } else {
        localStorage[params.title] = 0;
      }
    }
  },

  defaults: {
    "title": "No Title",
    "artist": "No Artist",
    "playCount": 0
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.attributes.playCount++;
    localStorage[this.attributes.title] = this.attributes.playCount;
    this.trigger('play', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  }
});
