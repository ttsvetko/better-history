class BH.Views.BaseView extends Backbone.View
  cssClass:
    selected: 'selected'

  i18nFetcher: new BH.Helpers.I18nFetcher(chrome)
  urlBuilder: new BH.Helpers.UrlBuilder()

  renderTemplate: (json) ->
    Mustache.render(@template, json)

  select: ->
    $('.mainview > *').removeClass(@cssClass.selected)
    @$el.addClass(@cssClass.selected)
    @pageTitle() if @pageTitle

  setPageTitle: (title) ->
    element = $('<div/>')
    document.title = $(element).html(title).text() + ' - Better History'

  tabIndex: (selector) ->
    $('button').attr('tabindex', '-1')
    $(selector).each (i) ->
      $(this).attr('tabindex', i + 2)
