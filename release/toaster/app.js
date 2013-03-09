var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

App = (function() {

  function App() {
    this.loadInitialFakeData = __bind(this.loadInitialFakeData, this);

    var glue, gui;
    this.useCase = new MessagingUseCase();
    gui = new Gui();
    glue = new Glue(this.useCase, gui);
    this.loadInitialFakeData();
    this.useCase.start();
    window.useCase = this.useCase;
  }

  App.prototype.loadInitialFakeData = function() {
    var message, messages, name, sender, senders, _i, _len, _results;
    messages = ['Hi!', 'How are you?'];
    senders = (function() {
      var _i, _len, _ref, _results;
      _ref = ['Alice', 'Bob', 'Claire', 'David'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        name = _ref[_i];
        _results.push(new User(name));
      }
      return _results;
    })();
    _results = [];
    for (_i = 0, _len = senders.length; _i < _len; _i++) {
      sender = senders[_i];
      _results.push((function() {
        var _j, _len1, _results1;
        _results1 = [];
        for (_j = 0, _len1 = messages.length; _j < _len1; _j++) {
          message = messages[_j];
          _results1.push(this.useCase.messageReceived(new Message(sender, message)));
        }
        return _results1;
      }).call(this));
    }
    return _results;
  };

  return App;

})();

new App();
