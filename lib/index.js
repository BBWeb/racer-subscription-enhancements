module.exports = function(racer) {
  var Model = racer.Model;

  Model.prototype.__forSubscribable = Model.prototype._forSubscribable;
  Model.prototype._forSubscribable = function (argumentsObject, method) {
    var args = Array.prototype.slice.call(argumentsObject);

    for(var i = 0, len = args.length; i < len; i++) {
      if(typeof args[i] === 'string') {
        // TODO: Implement
      } else if(typeof args[i] === 'object' && args[i] instanceof Model) {
        var pathSegments = args[i]._splitPath();

        if(pathSegments.length > 1) {
          // Convert to path query, since it's still ok to subscribe to a single doc
          args[i] = args[i].path();
        } else {
          args[i] = this.root.query(pathSegments[0], {});
        }
      }
    }

    this.__forSubscribable(args, method);
  };
};
