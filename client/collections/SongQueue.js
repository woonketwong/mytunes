// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){

    this.on('add', function(song){
      this.push(song);
      if( this.length === 1 ){
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      this.remove(song);
    });

    this.on('ended', function(song){
      this.shift();
      if(this.length){
        this.playFirst();
      }
    }, this);

    this.on('enqueue', function(song){
      this.add(song);
    });

  },

  playFirst: function(){
    this.at(0).play();
  }


});