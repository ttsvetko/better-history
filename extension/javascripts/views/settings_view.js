// Generated by CoffeeScript 1.3.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  BH.Views.SettingsView = (function(_super) {

    __extends(SettingsView, _super);

    SettingsView.name = 'SettingsView';

    function SettingsView() {
      return SettingsView.__super__.constructor.apply(this, arguments);
    }

    SettingsView.prototype.className = 'settings_view';

    SettingsView.prototype.templateId = 'settings';

    SettingsView.prototype.events = {
      'click .clear_history': 'clickedClearHistory',
      'change .time_grouping': 'changedTimeGrouping',
      'change .time_format': 'changedTimeFormat',
      'click .domain_grouping': 'clickedDomainGrouping',
      'click .search_by_domain': 'clickedSearchByDomain',
      'click .search_by_selection': 'clickedSearchBySelection',
      'click .credits': 'clickedCredits',
      'click .release_announcement': 'clickedReleaseAnnouncement'
    };

    SettingsView.prototype.initialize = function() {
      this.model.off('change');
      return this.model.on('change', this.saveSettings, this);
    };

    SettingsView.prototype.saveSettings = function() {
      return this.model.save();
    };

    SettingsView.prototype.render = function() {
      this.$el.append(this.template(this.model.toTemplate()));
      window.___gcfg = {
        lang: chrome.i18n.getMessage('google_plus_language')
      };
      (function() {
        var po, s;
        po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js';
        s = document.getElementsByTagName('script')[0];
        return s.parentNode.insertBefore(po, s);
      })();
      return this;
    };

    SettingsView.prototype.changedTimeGrouping = function(ev) {
      return this.model.set({
        timeGrouping: $(ev.currentTarget).val()
      });
    };

    SettingsView.prototype.changedTimeFormat = function(ev) {
      return this.model.set({
        timeFormat: $(ev.currentTarget).val()
      });
    };

    SettingsView.prototype.clickedDomainGrouping = function(ev) {
      return this.model.set({
        domainGrouping: $(ev.currentTarget).is(':checked')
      });
    };

    SettingsView.prototype.clickedSearchByDomain = function(ev) {
      var backgroundPage, method;
      this.model.set({
        searchByDomain: $(ev.currentTarget).is(':checked')
      });
      backgroundPage = chrome.extension.getBackgroundPage();
      method = this.model.get('searchByDomain') ? 'create' : 'remove';
      return backgroundPage.pageContextMenu[method]();
    };

    SettingsView.prototype.clickedSearchBySelection = function(ev) {
      var backgroundPage, method;
      this.model.set({
        searchBySelection: $(ev.currentTarget).is(':checked')
      });
      backgroundPage = chrome.extension.getBackgroundPage();
      method = this.model.get('searchBySelection') ? 'create' : 'remove';
      return backgroundPage.selectionContextMenu[method]();
    };

    SettingsView.prototype.clickedClearHistory = function(ev) {
      ev.preventDefault();
      return chrome.tabs.create({
        url: 'chrome://settings/clearBrowserData'
      });
    };

    SettingsView.prototype.clickedCredits = function(ev) {
      var creditsView;
      ev.preventDefault();
      creditsView = new BH.Views.CreditsView();
      $('body').append(creditsView.render().el);
      return creditsView.open();
    };

    SettingsView.prototype.clickedReleaseAnnouncement = function(ev) {
      var versionView;
      ev.preventDefault();
      versionView = new VersionView({
        model: app.model
      });
      $('body').append(versionView.render().el);
      return versionView.open();
    };

    return SettingsView;

  })(BH.Views.BaseView);

}).call(this);
