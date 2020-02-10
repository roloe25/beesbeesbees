var Bee = function() {
  Grub.call(this)
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

};

Bee.prototype = Object.create(Grub.prototype);
//what does this bottom code do??!
Bee.prototype.constructor = Bee;

