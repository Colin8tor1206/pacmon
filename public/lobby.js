var socket = io.connect("18.217.96.119:8080");


var myIndex = null;

socket.on('player', function(data){
    myIndex == null? myIndex = data.playerIndex: null;
    for(let i = 0; i<=data.playerIndex;i++){
        document.getElementById(`player${i}`).innerHTML = "Ready";
	document.getElementById(`player${i}`).style.color = "green";
    }
    console.log(data.playerIndex);
    if(data.playerIndex == 3){
        
        setTimeout(function(){
            console.log("hellothere");
            window.location.href = "http://18.217.96.119:8080/game.html";
        }, myIndex*1000);
    }
});
