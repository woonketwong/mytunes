// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
    this.on('add', this.addModelController, this);
    this.on('ended', this.endedModelController, this);
  },

  playFirst: function(){
    this.at(0).play();
  },

  addModelController: function(){
    if(this.models.length === 1){
      this.playFirst();
    }
  },

  endedModelController: function(){
    this.remove(this.models[0]);
    if( this.models.length > 0){
      this.playFirst();
    }
  }


});