function addMsg() {

  var today= new Date();

  var msgRow=$(".msg-row")
  var msg=$(".msg");
  var msgText=document.createElement("p");
  var msgHourCont=document.createElement("div");
  var check=$(".msg .fas.fa-check");
  var ora=document.createElement("p");

  msgText= document.getElementById('msg-input-box').value;
  ora=today.getHours()+ ":"+ today.getMinutes();

  msgHourCont.append(check);
  msgHourCont.append(ora);
  msg.append(msgText);
  msg.append(msgHourCont);
  msgRow.append(msg);
}

function init() {

addMsg();
}

$(document).ready(init);
