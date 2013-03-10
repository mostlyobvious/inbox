class Glue
  constructor: (@useCase, @gui) ->
    After(@useCase, 'showInbox', => @gui.showInbox(@useCase.inboxMessages()))
    After(@gui, 'showConversationClicked', (user) => @useCase.showConversation(user))
    After(@useCase, 'showConversation', (user) => @gui.showConversation(@useCase.conversationMessages(user)))
