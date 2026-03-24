
// var button1 = document.getElementById("button1");

// button1.onclick = function() {
//     alert("hello");
// }

var button1 = document.getElementById("bttn1");


button1.onclick= function() {
    alert("button was cliked");
}

var button2 = document.getElementById("bttn2");

button2.onmouseover= function() {
    alert("Mouse is over");
}


var button3 = document.getElementById("bttn3");

button3.onmouseleave= function() {
    alert("mouse left");
}

var button4 = document.getElementById("bttn4");

button4.onmousewheel= function() {
    alert("mouse wheel");
}

var v_button = document.getElementById("bttn6");

var v_text = document.getElementById("text1")
v_button.onclick = function(){
    v_text.style.color="red"
}



var btn_circle = document.getElementById("btncircle");
var btn_rectangle = document.getElementById("btn_rectangle");
var btn_triangle = document.getElementById("btntriangle");

var circle = document.getElementById("circle");
var rectangle = document.getElementById("rectangle");
var triangle = document.getElementById("triangle");


btn_circle.onclick = function()
 {
    circle.setAttribute("class", "shapecircle");
}

btn_rectangle.onclick = function()
 {
    rectangle.setAttribute("class", "shaperectangle");
}

btn_triangle.onclick = function()
    {
        triangle.setAttribute("class", "shapetriangel");
    
    }
    circle.onclick = function() {
        circle.setAttribute("class", "hide");
    }

    rectangle.onclick = function() {
        rectangle.setAttribute("class", "hide");
    }

    triangle.onclick = function() {
        triangle.setAttribute("class", "hide");
    }