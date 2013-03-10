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
    var sender, senders, _, _i, _len, _results;
    senders = (function() {
      var _i, _results;
      _results = [];
      for (_ = _i = 1; _i <= 8; _ = ++_i) {
        _results.push(new User(Faker.Name.findName()));
      }
      return _results;
    })();
    _results = [];
    for (_i = 0, _len = senders.length; _i < _len; _i++) {
      sender = senders[_i];
      _results.push((function() {
        var _j, _ref, _results1;
        _results1 = [];
        for (_ = _j = 1, _ref = Math.floor((Math.random() * 6) + 1); 1 <= _ref ? _j <= _ref : _j >= _ref; _ = 1 <= _ref ? ++_j : --_j) {
          _results1.push(this.useCase.messageReceived(new Message(sender, Faker.Lorem.paragraph())));
        }
        return _results1;
      }).call(this));
    }
    return _results;
  };

  return App;

})();

new App();
