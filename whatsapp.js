function getRandom(min,max) {

  return Math.floor(Math.random() * (max-min+1))+min;
}

// -----------CREAZIONE MESSAGGIO INVIATO-----

function addMsg(content) {

  var today= new Date();

  var msgRow=document.createElement("div");
  $(msgRow).addClass("msg-row");

  var msg=document.createElement("div");
  $(msg).addClass("msg");
  $(msg).addClass("sent");

  var msgText=document.createElement("p");
  $(msgText).addClass("msg-text");
  $(msgText).text(content);


  var msgHourCont=document.createElement("div");
  $(msgHourCont).addClass("msg-hourCheck");

  var check=document.createElement("i");
  $(check).addClass("fas fa-check");

  var ora=document.createElement("p");
  ora=today.getHours()+ ":"+ today.getMinutes();

  var info=document.createElement("div");
  $(info).addClass("info");

  var messageInfo=document.createElement("p");
  $(messageInfo).text("Message info");

  var deleteMessage=document.createElement("p");
  $(deleteMessage).text("Delete message");
  $(deleteMessage).addClass("canc");



  msgHourCont.append(check);
  msgHourCont.append(ora);
  info.append(messageInfo);
  info.append(deleteMessage);
  msg.append(msgText);
  msg.append(msgHourCont);
  msg.append(info);
  msgRow.append(msg);
  $(".active .msg-section").append(msgRow);
}

// --------CREAZIONE MESSAGGIO RICEVUTO-----

function msgReply(risposta) {

  var today= new Date();

  var msgRow=document.createElement("div");
  $(msgRow).addClass("msg-row");

  var msg=document.createElement("div");
  $(msg).addClass("msg");
  $(msg).addClass("received");

  var msgText=document.createElement("p");
  $(msgText).addClass("msg-text");
  $(msgText).text(risposta);

  var msgHourCont=document.createElement("div");
  $(msgHourCont).addClass("msg-hourCheck");

  var check=document.createElement("i");
  $(check).addClass("fas fa-check");

  var ora=document.createElement("p");
  ora=today.getHours()+ ":"+ today.getMinutes();

  var info=document.createElement("div");
  $(info).addClass("info");

  var messageInfo=document.createElement("p");
  $(messageInfo).text("Message info");

  var deleteMessage=document.createElement("p");
  $(deleteMessage).text("Delete message");
  $(deleteMessage).addClass("canc");


  msgHourCont.append(check);
  msgHourCont.append(ora);
  info.append(messageInfo);
  info.append(deleteMessage);
  msg.append(msgText);
  msg.append(msgHourCont);
  msg.append(info);
  msgRow.append(msg);
  $(".active .msg-section").append(msgRow);
}

// -----FUNZIONE FRASE RANDOM------

function reply() {

  var array=["ciao come stai?" , "stasera calcetto" , "ti va di uscire?" , "ci vediamo domani", "grazie", "non sono d'accordo", "a dopo", "bene", "come va il lavoro?"];
  var rnd=getRandom(0,11)
  for (var i = 0; i < array.length; i++) {

    var risposta=array[rnd];
  }

  return msgReply(risposta);
}

// --------FUNZIONE DEL CLIC DI INVIO--------
// -------PER CREARE MESSAGGIO INVIATO E RICEVUTO------

function textEvent(e) {

  var me=$(this);
  var content=me.val();
  var keyPressed=e.which;

  if (keyPressed==13) {
    addMsg(content);
    setTimeout(reply,1500);
  }
}

// -------funzione per pulire il testo------

function clearText(e){
  var me=$(this);

  var keyPressed=e.which;

  if (keyPressed==13) {

    me.val("");
  }
}

// --------RICERCA CONTATTI--------

function searchFun() {

  var me=$(this);
  var content=me.val().toLowerCase();
  var name=$(".name");

  var contacts=$(".toHide");


  for (var i = 0; i < contacts.length; i++) {

    var contact=contacts.eq(i);

    var nameContent=name.eq(i).text().toLowerCase();

    if (!nameContent.includes(content)) {
      contact.addClass("hidden");
    }else {
      contact.removeClass("hidden");
    }
  }
}

// -------FUNZIONE CHAT CHANGE-------

function contactClick() {

  var me=$(this);
  var meIndex=me.index();

  var chatActive=$(".active");
  chatActive.removeClass("active");

  var chat=$(".chat-sub-container");
  var selectedChat=chat.eq(meIndex);

  selectedChat.addClass("active");

}

// FUNZIONE PER CREARE MENU A TENDINA

function menuAppear() {

}

// ---Funzione per cancellare riga--

function rowCanc() {
  var me=$(this);
  var msg=me.parent();
  msg.remove();
}

// -------INIT-------

function init() {


  var txt=$("#msg-input-box");
  txt.keyup(textEvent);

  var clear=$("#msg-input-box");
  clear.keyup(clearText);

  var search=$("#search");
  search.keyup(searchFun);

  var persona=$(".change");
  persona.click(contactClick);

  $(document).on("click",".canc", rowCanc);
}



$(document).ready(init);
