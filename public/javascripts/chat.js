$(function() {
  var socket = io();

  $("#message-form").on('submit', function(event) {
    event.preventDefault();

    var message = $('#message-body').val();
    $('#message-body').val('');

    socket.emit('client-chat-message', message);
  });

  socket.on('server-chat-message', function(data){
    let messagesUL = $('#messages');
    let newMessage = $('<li>');
    newMessage.text(data);

    messagesUL.append(newMessage);
  });
});
