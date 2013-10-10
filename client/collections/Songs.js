// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: Song
  // if the song model play() is triggered, it triggers a play event here
});
