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

  msgHourCont.append(check);
  msgHourCont.append(ora);
  msg.append(msgText);
  msg.append(msgHourCont);
  msgRow.append(msg);
  $(".msg-section").append(msgRow);
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

  msgHourCont.append(check);
  msgHourCont.append(ora);
  msg.append(msgText);
  msg.append(msgHourCont);
  msgRow.append(msg);
  $(".msg-section").append(msgRow);
}

// -----FUNZIONE FRASE RANDOM------

function reply() {

  var array=["ciao come stai?" , "stasera calcetto" , "ti va di uscire?" , "birretta?", "ci vediamo domani"];
  var rnd=getRandom(0,4)
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

// -------INIT-------

function init() {


  var txt=$("#msg-input-box");
  txt.keyup(textEvent);

  var clear=$("#msg-input-box");
  clear.keyup(clearText);

  var search=$("#search");
  search.keyup(searchFun);
}



$(document).ready(init);
