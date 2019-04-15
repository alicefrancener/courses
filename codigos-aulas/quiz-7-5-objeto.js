/*
 * Programming Quiz: Facebook Friends (7-5)
 */

var facebookProfile = {
  name: "Alice",
  friends: 100,
  messages: ["Hoje é dia 15 :)", "Ontem choveu.", "Amanhã será um belo dia!"],
  postMessage: function (message){
    this.messages.push(message);  
  },
  deleteMessage: function(index){
    this.messages.splice(index, 1);  
  },
  addFriend: function(){
      this.friends += 1;
  },
  removeFriend: function(){
      this.friends -= 1;
  }
};
