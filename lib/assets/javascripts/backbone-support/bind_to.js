Backbone.View.prototype.bindTo = function(source, event, callback) {
  source.on(event, callback, this);
  this.bindings = this.bindings || [];
  this.bindings.push({ source: source, event: event, callback: callback });
}

Backbone.View.prototype.unbindFromAll = function() {
  _.each(this.bindings, function(binding) {
    binding.source.off(binding.event, binding.callback);
  });
  this.bindings = [];
}
