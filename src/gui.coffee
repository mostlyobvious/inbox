class Gui
  constructor: ->

  createElementFor: (templateId, data) =>
    source   = $(templateId).html()
    template = Handlebars.compile(source)
    html     = template(data)
    element  = $(html)

  showInbox: (messages) =>
    inbox = @createElementFor('#inbox-template')
    $('.main').append(inbox)
    for message in messages
      @appendInboxMessage(message)

  appendInboxMessage: (message) =>
    message = @createElementFor('#inbox-message-template', @inboxMessagePresenter(message))
    $('.inbox').append(message)

  inboxMessagePresenter: (message) =>
    {name: message.sender.name, body: message.body}

