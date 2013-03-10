var Glue;

Glue = (function() {

  function Glue(useCase, gui) {
    var _this = this;
    this.useCase = useCase;
    this.gui = gui;
    After(this.useCase, 'showInbox', function() {
      return _this.gui.showInbox(_this.useCase.inboxMessages());
    });
    After(this.gui, 'showConversationClicked', function(user) {
      return _this.useCase.showConversation(user);
    });
    After(this.useCase, 'showConversation', function(user) {
      return _this.gui.showConversation(_this.useCase.conversationMessages(user));
    });
  }

  return Glue;

})();
