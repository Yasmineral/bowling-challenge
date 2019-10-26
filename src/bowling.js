"use strict";
// Declared at the beginning of a script, it has global scope
// Strict mode makes it easier to write "secure" JavaScript.
// Strict mode changes previously accepted "bad syntax" into real errors.
// e.g Using a variable, without declaring it, is not allowed.

function Game() {
  this.totalScore = 0;
  this.frame = 1;
  this.scores = [[],[],[],[],[],[],[],[],[],[]]
};


Game.prototype.currentFrame = function() {
  return this.frame;
}

Game.prototype.nextFrame = function() {
  this.frame += 1;
}


Game.prototype.updateScore = function(pins) {
this.scores[this.frame -1].push(pins);
}

Game.prototype.roll = function(number) {
 

}