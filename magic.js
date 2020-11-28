
function myFunction()    //For the userName input here!!
{    debugger;
    var name=document.getElementById('name').value;
    var uname=(name == " ") ? "Hello Dear!":document.getElementById('getName').innerHTML="Hello" + " " +name  + "!";
}

function myFunction2(){       //For the Questioning and  validating the question
    var question=document.getElementById('question').value;
    if(question == undefined)
        {
              document.getElementById("getanser").innerHTML="Enter the question first";
        }
               else if(question.length >10 && isNaN(question))
              {
                    var  anser=["It is certain","It is decidedly so." ,"Without a doubt","Yes – definitely.","Most likely.","Cannot predict now.","Better not tell you now.","Better not tell you now","Outlook good.",
                      "Reply hazy, try again.",
                    "Signs point to yes.",
                    "Very doubtful.",
                    "Without a doubt.",
                    "Yes.",
                     "You may rely on it."
                    ];
                    var randomNo=Math.floor(Math.random() * 12);
                    var eightBall=anser[randomNo];
                    document.getElementById("getanser").innerHTML=eightBall;
                }
  else   {
         document.getElementById("getanser").innerHTML="Enter the valid question";
       }

}

function reset(){                                        //For resting the  forms
    document.getElementById("getanser").innerHTML=" ";
    document.getElementById("getName").innerHTML=" ";
    document.getElementsById("name").innerHTML=" ";
}

