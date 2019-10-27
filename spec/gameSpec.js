describe('Game', function() {
  var game;
  beforeEach(function() {
    game = new Game();
  })

    it("starts at frame 1", function() {
      expect(game.currentFrame()).toEqual(1); 
    });

    describe('Roll', function() {
      it('stores number of pins in the correct scores array', function() {
        game.frame = 4
        game.roll(10)
        expect(game.scores[3][0]).toEqual(10);
      })    
    });
    
    describe('next frame', function() {
      it('adds 1 to the current frame', function() {
        game.frame = 1
        game.nextFrame()
        expect(game.frame).toEqual(2)
      })
    });    

    describe('is spare?', function() {
      it('returns true if the total score for the frame equals 10', function() {
        game.frame = 1
        game.roll(5)
        game.roll(5)
        expect(game.isSpare()).toBe(true)
      })
      it('returns false if the total score for the frame is below 10', function() {
        game.frame = 1
        game.roll(4)
        game.roll(2)
        expect(game.isSpare()).toBe(false)
      })
      it('returns false if the user has a strike', function() {
        game.frame = 1
        game.roll(10)
        expect(game.isSpare()).toBe(false)
      })
    });

    describe('is strike?', function() {
      it('returns true if the total score of the first roll is 10', function() {
      game.frame = 1
      game.roll(10)
      expect(game.isStrike()).toBeTruthy()
      })
    });

    describe('total frame score', function() {
      it('returns the total score for the current frame', function() {
        game.frame = 1
        game.roll(3)
        game.roll(4)
        game.totalFrameScore()
        expect(game.totalScore).toEqual(7)
      })
    })
});