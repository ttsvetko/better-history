// Generated by CoffeeScript 1.3.1
(function() {
  var route;

  window.router = new BH.Router();

  Backbone.history.start();

  if (!location.hash) {
    route = state.get('route');
    router.navigate(route, {
      trigger: true
    });
  }

}).call(this);
