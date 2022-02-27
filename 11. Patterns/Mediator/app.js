const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(msg, to){
    this.chatroom.send(msg, this, to);
  },

  receive: function(msg, from) {
    console.log(`${from.name} to ${this.name}: ${msg}`);    
  }
}

const Chatroom = function() {
  let users = {}; //list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },

    send: function(msg, from, to) {
      if (to) {
        // Single user message
        to.receive(msg, from);
      } else {
        // Broadcast message
        for(username in users){
          if(users[username] !== from){
            users[username].receive(msg, from);
          }
        }
      }
    }
  }
}

const renato = new User('Renato');
const rafael = new User('Rafa');
const dario = new User('Dario');

const chatroom = new Chatroom();

chatroom.register(renato);
chatroom.register(rafael);
chatroom.register(dario);

renato.send('Gym?');
dario.send('Vais?', rafael);
rafael.send('Siga', dario);
dario.send('Ya', renato);
rafael.send('Ya', renato);