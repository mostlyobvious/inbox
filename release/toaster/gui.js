var Gui,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Gui = (function() {

  function Gui() {
    this.openFirstConversation = __bind(this.openFirstConversation, this);

    this.hideConversation = __bind(this.hideConversation, this);

    this.conversationMessagePresenter = __bind(this.conversationMessagePresenter, this);

    this.appendConversationMessage = __bind(this.appendConversationMessage, this);

    this.showConversation = __bind(this.showConversation, this);

    this.showConversationClicked = __bind(this.showConversationClicked, this);

    this.inboxMessagePresenter = __bind(this.inboxMessagePresenter, this);

    this.appendInboxMessage = __bind(this.appendInboxMessage, this);

    this.showInbox = __bind(this.showInbox, this);

    this.createElementFor = __bind(this.createElementFor, this);

  }

  Gui.prototype.createElementFor = function(templateId, data) {
    var element, html, source, template;
    source = $(templateId).html();
    template = Handlebars.compile(source);
    html = template(data);
    return element = $(html);
  };

  Gui.prototype.showInbox = function(messages) {
    var inbox, message, _i, _len;
    inbox = this.createElementFor('#inbox-template');
    $('.main').append(inbox);
    for (_i = 0, _len = messages.length; _i < _len; _i++) {
      message = messages[_i];
      this.appendInboxMessage(message);
    }
    return this.openFirstConversation();
  };

  Gui.prototype.appendInboxMessage = function(message) {
    var element,
      _this = this;
    element = this.createElementFor('#inbox-message-template', this.inboxMessagePresenter(message));
    element.find('.show-conversation').click(function() {
      return _this.showConversationClicked(message.sender);
    });
    return $('.inbox-list').append(element);
  };

  Gui.prototype.inboxMessagePresenter = function(message) {
    return {
      name: message.sender.name,
      body: message.body
    };
  };

  Gui.prototype.showConversationClicked = function(user) {};

  Gui.prototype.showConversation = function(messages) {
    var conversation, message, _i, _len, _results;
    this.hideConversation();
    conversation = this.createElementFor('#conversation-template');
    $('.main').append(conversation);
    _results = [];
    for (_i = 0, _len = messages.length; _i < _len; _i++) {
      message = messages[_i];
      _results.push(this.appendConversationMessage(message));
    }
    return _results;
  };

  Gui.prototype.appendConversationMessage = function(message) {
    var element;
    element = this.createElementFor('#conversation-message-template', this.conversationMessagePresenter(message));
    return $('.conversation-list').append(element);
  };

  Gui.prototype.conversationMessagePresenter = function(message) {
    return this.inboxMessagePresenter(message);
  };

  Gui.prototype.hideConversation = function() {
    return $('.conversation').remove();
  };

  Gui.prototype.openFirstConversation = function() {
    return $('.inbox-list li:first').find('.show-conversation').click();
  };

  return Gui;

})();
