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
    element = @createElementFor('#inbox-message-template', @inboxMessagePresenter(message))
    element.find('.show-conversation').click => @showConversationClicked(message.sender)
    $('.inbox-list').append(element)

  inboxMessagePresenter: (message) =>
    {name: message.sender.name, body: message.body}

  showConversationClicked: (user) =>

  showConversation: (messages) =>
    @hideConversation()
    conversation = @createElementFor('#conversation-template')
    $('.main').append(conversation)
    for message in messages
      @appendConversationMessage(message)

  appendConversationMessage: (message) =>
    element = @createElementFor('#conversation-message-template', @conversationMessagePresenter(message))
    $('.conversation-list').append(element)

  conversationMessagePresenter: (message) =>
    @inboxMessagePresenter(message)

  hideConversation: =>
    $('.conversation').remove()

