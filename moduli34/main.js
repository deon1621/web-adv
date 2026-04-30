// function printname(){
// document.write("deon");
// document.write("<br>");
// setTimeout(
// function(){
//     document.write("detjon");
//      }, 3000
// );
// document.write("drin");
// }


// printname();


var color = ['red', 'green', 'purple', 'yellow', 'orange', 'black', ];

var names = ['omer', 'rigon', 'ernes', 'patris', 'venis', 'olti' ];

function changecolor(){
    document.querySelector('body').style.background = color [Math.floor(Math.random()*color.length)]
}


function changename(){
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)]
}

setInterval(changecolor, 10);
setInterval(changename, 10);