Backbone.View.prototype.leave = function() {
  if (this.onLeave) {
    this.onLeave();
  }
  if (this.unbindFromAll) {
    this.unbindFromAll();
  }
  this.off();
  this.remove();
};
