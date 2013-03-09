class MessagingUseCase
  constructor: ->
    @messages = []

  start: =>
    @showInbox()

  showInbox: =>

  inboxMessages: =>
    senders  = []
    messages = for message in @messages
      continue if _.contains(senders, message.sender)
      senders.push(message.sender)
      message
    messages

  messageReceived: (message) =>
    @messages.push(message)


