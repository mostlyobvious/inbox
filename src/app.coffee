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
    senders  = (new User(Faker.Name.findName()) for _ in [1..8])

    for sender in senders
      (@useCase.messageReceived(new Message(sender, Faker.Lorem.paragraph())) for _ in [1..Math.floor((Math.random() * 6) + 1)])

new App()
