var MessagingUseCase,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

MessagingUseCase = (function() {

  function MessagingUseCase() {
    this.conversationMessages = __bind(this.conversationMessages, this);

    this.showConversation = __bind(this.showConversation, this);

    this.messageReceived = __bind(this.messageReceived, this);

    this.inboxMessages = __bind(this.inboxMessages, this);

    this.showInbox = __bind(this.showInbox, this);

    this.start = __bind(this.start, this);
    this.received_messages = [];
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
      _ref = this.received_messages;
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
    return this.received_messages.push(message);
  };

  MessagingUseCase.prototype.showConversation = function(user) {};

  MessagingUseCase.prototype.conversationMessages = function(user) {
    return _.filter(this.received_messages, function(message) {
      return message.sender === user;
    });
  };

  return MessagingUseCase;

})();
