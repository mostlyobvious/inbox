var Gui,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Gui = (function() {

  function Gui() {
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
    var inbox, message, _i, _len, _results;
    inbox = this.createElementFor('#inbox-template');
    $('.main').append(inbox);
    _results = [];
    for (_i = 0, _len = messages.length; _i < _len; _i++) {
      message = messages[_i];
      _results.push(this.appendInboxMessage(message));
    }
    return _results;
  };

  Gui.prototype.appendInboxMessage = function(message) {
    message = this.createElementFor('#inbox-message-template', this.inboxMessagePresenter(message));
    return $('.inbox').append(message);
  };

  Gui.prototype.inboxMessagePresenter = function(message) {
    return {
      name: message.sender.name,
      body: message.body
    };
  };

  return Gui;

})();
