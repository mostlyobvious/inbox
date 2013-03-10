class MessagingUseCase
  constructor: ->
    @received_messages = []

  start: =>
    @showInbox()

  showInbox: =>

  inboxMessages: =>
    senders  = []
    messages = for message in @received_messages
      continue if _.contains(senders, message.sender)
      senders.push(message.sender)
      message
    messages

  messageReceived: (message) =>
    @received_messages.push(message)

  showConversation: (user) =>

  conversationMessages: (user) =>
    _.filter(@received_messages, (message) -> message.sender == user)

