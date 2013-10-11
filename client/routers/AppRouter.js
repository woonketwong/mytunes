var AppRouter = Backbone.Router.extend({
  routes: {
    'songs/:id': "playTheSong"
  },

  initialize: function(params){
    // console.log("Hi");
    this.model = params.model;
  },

  playTheSong: function(id){
    var song = this.model.attributes.library.models[id];
    this.model.set('currentSong', song);
  }
});
