// Atividade: cole as informações do firebase

// Atividade: guardar numa variável o nome do usuário
// Atividade: guardar numa variável o nome da sala

// Atividade: crie a função send

// Atividade: crie a função logout

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//preencher
      } });  }); }
getData();

// Atividade: crie a função updateLike


