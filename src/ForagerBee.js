

var ForagerBee = function() {
  Bee.call(this)
  this.age = 10;
  this.job = 'find pollen';
  this.honeyPot = 0;
  this.canFly = true;
  this.treasureChest = [];
};


ForagerBee.prototype = Object.create(Bee.prototype);
//what does this bottom code do??!
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function (item) {
this.treasureChest.push(item);
}

