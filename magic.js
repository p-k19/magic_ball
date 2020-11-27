
function myFunction()
{    debugger;
    var name=document.getElementById('name').value;
    var uname=(name == " ") ? "Hello Dear!":document.getElementById('getName').innerHTML="Hello" + " " +name  + "!";
}

function myFunction2(){
var  anser=["It is certain","It is decidedly so." ,"Without a doubt","Yes – definitely.","Most likely.","Cannot predict now.","Better not tell you now.","Better not tell you now" ]
var randomNo=Math.floor(Math.random() * 5);
var eightBall=anser[randomNo];
document.getElementById("getanser").innerHTML=eightBall;
}
function reset(){
    document.getElementById("getanser").innerHTML=" ";
    document.getElementById("getName").innerHTML=" ";
    document.getElementsById("name").innerHTML=" ";
}