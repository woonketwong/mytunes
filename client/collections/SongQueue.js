// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
    this.on('add', this.addModelController);
    this.on('ended', this.endedModelController);
    this.on('remove', this.removeModelController);
  },

  playFirst: function(){
    // this.models.at(0).play();
  },

  addModelController: function(){
    if(this.models.length === 1){
      this.playFirst();
    }
  },

  endedModelController: function(){
    console.log("We are ended !!!!");
    console.log(this);
    this.remove(this.models[0]);
    if( this.models.length > 0){
      this.playFirst();
    }
    // call playFirst
  },
  removeModelController: function(params){
    console.log("We are removed !!!!", params);
    // this.remove();
  }



});