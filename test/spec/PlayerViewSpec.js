describe('PlayerView', function() {
  var library, appView;

  beforeEach(function() {
    jasmine.Clock.useMock();

    library = new Songs([
      {
        url: "mp3s/08 4 Page Letter.mp3",
        title: "4 Page Letter",
        artist: "Aaliyah"
      },
      {
        url: "mp3s/11 We Need A Resolution.mp3",
        title: "We Need A Resolution",
        artist: "Aaliyah"
      }
    ]);
    // playerView is created in AppView initialize
    // access with appView.playerView
    appView = new AppView({model: new App({library: library})});
  });

  it('gets its model property set to any song that is played', function(){
    expect(appView.playerView.model).not.toEqual(library.at(0));
    library.at(0).play();
    expect(appView.playerView.model).toEqual(library.at(0));
  });

  describe('Song transitions', function() {
    it('dequeues a song when finished playing & plays the next song', function(){
      library.at(0).play();
      var originalSong = appView.playerView.model;
      appView.model.get('songQueue').add(library.at(1));
      appView.model.get('songQueue').add(library.at(2));
      $(appView.playerView.el).trigger('ended');
      expect(appView.playerView.model).not.toEqual(originalSong);
      var nextSong = appView.playerView.model;
      expect(appView.playerView.model).toEqual(nextSong);
    });
  });

});
