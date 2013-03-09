#<< utils
#<< messaging_use_case
#<< user
#<< message
#<< gui
#<< glue

class App
  constructor: ->
    @useCase = new MessagingUseCase()
    gui      = new Gui()
    glue     = new Glue(@useCase, gui)

    @loadInitialFakeData()
    @useCase.start()
    window.useCase = @useCase

  loadInitialFakeData: =>
    messages = ['Hi!', 'How are you?']
    senders  = for name in ['Alice', 'Bob', 'Claire', 'David']
      new User(name)

    for sender in senders
      for message in messages
        @useCase.messageReceived(new Message(sender, message))

new App()
