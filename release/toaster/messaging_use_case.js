var MessagingUseCase,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

MessagingUseCase = (function() {

  function MessagingUseCase() {
    this.messageReceived = __bind(this.messageReceived, this);

    this.inboxMessages = __bind(this.inboxMessages, this);

    this.showInbox = __bind(this.showInbox, this);

    this.start = __bind(this.start, this);
    this.messages = [];
  }

  MessagingUseCase.prototype.start = function() {
    return this.showInbox();
  };

  MessagingUseCase.prototype.showInbox = function() {};

  MessagingUseCase.prototype.inboxMessages = function() {
    var message, messages, senders;
    senders = [];
    messages = (function() {
      var _i, _len, _ref, _results;
      _ref = this.messages;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        message = _ref[_i];
        if (_.contains(senders, message.sender)) {
          continue;
        }
        senders.push(message.sender);
        _results.push(message);
      }
      return _results;
    }).call(this);
    return messages;
  };

  MessagingUseCase.prototype.messageReceived = function(message) {
    return this.messages.push(message);
  };

  return MessagingUseCase;

})();
