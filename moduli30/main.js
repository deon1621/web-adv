// var mosha=7;

// if(mosha <8){
//     document.write("your child is to young to learn programing")
// };
// else{
//     document.write("we will call you soon")
// };


// var age =7;
// if(age<8){
//     document.write("your child is to young to learn programing")
// }
// else if(age >18){
//     document.write("your child is to old to learn programing")
// }
// else{
//     document.write("we will call you soon")
// }

//  var input = document.getElementById("input_id");
// var button = document.getElementById("btn_id");
// var text = document.getElementById("text_id");
// button.onclick = function() {
    // text.innerHTML = input.value;
// };

// var num1 = document.getElementById("input_id1");
// var num2 = document.getElementById("input_id2");
// var btn = document.getElementById("btn2_id");
// var result = document.getElementById("text2_id");
// var num3 = document.getElementById("text2_id");
// var result2 = document.getElementById("result_id1")

//  btn.onclick = function() {
    //  var result1=result.innerHTML = parseInt(num1.value) + parseInt(num2.value);

    // if (result1 > 10){
        // result2.innerHTML= "greater then 10"
    // }
    // else if (result1 < 10){
        // result2.innerHTML= "less then 10"

    
    // }
    // else {
        // result2.innerHTML= " equal then 10"
    // } 
//  } 


    var wakeuptime;
var dstime;
var sleeptime;
var noon = 12;




function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();


    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();


    var meridian = "AM";



    if(hours >= noon){
        meridian = "PM";
    }


    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    clock.innerText = clockTime;
    changeImage();
};



var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);


function changeImage() {
    var time = new Date(). getHours() ;

    var imageHTML = document.getElementById("timeImage");

    if(time == wakeuptime) {

        image = "DSClcok/img/moring.gif";
    }
else if(time == dstime) {

     image = "DSClcok/img/class.gif"
}

else if(time == sleeptime){

image = "DSClcok/img/night.gif"

}

imageHTML.scr = image;

}

function updateclock() {

    var wakeuptimesolector = document.getElementById("wakeuptimesolector");
    wakeuptime = wakeuptimesolector.value;

    var dstimeselector = document.getElementById("dstimeselector");
    dstime = dstimeselector.value;

    var sleeptimeselector =document. getElementById("sleeptimeselector");
    sleeptime = sleeptimeselector.value;
}

var savebutton = document.getElementById("savebutton");
  savebutton.addEventlistener("")