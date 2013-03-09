class Glue
  constructor: (@useCase, @gui) ->
    After(@useCase, 'showInbox', => @gui.showInbox(@useCase.inboxMessages()))
