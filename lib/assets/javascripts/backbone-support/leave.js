Backbone.View.prototype.leave = function() {
  if (this.onLeave) {
    this.onLeave();
  }
  this.off();
  this.remove();
};
