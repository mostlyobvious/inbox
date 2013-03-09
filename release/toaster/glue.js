var Glue;

Glue = (function() {

  function Glue(useCase, gui) {
    var _this = this;
    this.useCase = useCase;
    this.gui = gui;
    After(this.useCase, 'showInbox', function() {
      return _this.gui.showInbox(_this.useCase.inboxMessages());
    });
  }

  return Glue;

})();
