// Atividade: cole o link do firebase aqui


//Atividade: guardar numa variável o nome do usuário

//Atividade: mudar o texto da tela para desejar boas vindas ao usuário

function addRoom()
{
//Atividade: guardar numa variável o nome da sala

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionar sala"
  });

    localStorage.setItem("room_name", room_name);

}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       //preencher
    });
  });

}
//Atividade: chamar a função getData

//Atividade: criar a função redirectToRoomName

//Atividade: criar a função logout

