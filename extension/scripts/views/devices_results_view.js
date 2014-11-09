(function() {
  var DevicesResultsView = Backbone.View.extend({
    className: 'devices_results_view',

    template: BH.Templates.devices_results,

    initialize: function() {
      this.model.on('change:name', this.onDeviceChange, this);
      this.collection.on('reset', this.render, this);
    },

    render: function() {
      var properties = _.extend(this.getI18nValues(), {sessions: this.collection.toJSON()});
      var html = Mustache.to_html(this.template, properties);
      this.$el.html(html);
      return this;
    },

    onDeviceChange: function() {
      var historian = new Historian.Devices();

      var _this = this;
      historian.fetchSessions(this.model.get('name'), function(visits) {
        _this.collection.reset(visits);
      });
    },

    getI18nValues: function() {
      return BH.Chrome.I18n.t([
        'no_visits_found',
        'search_by_domain'
      ]);
    }
  });

  BH.Views.DevicesResultsView = DevicesResultsView;
})();
