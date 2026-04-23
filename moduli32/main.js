var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("tekst_id");


button.onclick = function(){

    text.innerHTML = input.value;
}


// var text = "the best school in the world id digital school";
// var result = text.search("digital school");
// document.getElementById("result1").innerHTML = result;

// var text = "the best school in the world id digital school";
// var result = text.search(/digital school/);
// document.getElementById("result2").innerHTML = result;

// var text = "the best school in the world is digital school";
// var result = text.replace(/digital school/, "another school")
// document.getElementById("result3").innerHTML = result;

// var text = "abcdef"
// var regex = new RegExp('abc');
// document.getElementById('result4').innerHTML = regex.test(text);


// var text = "my school is the best school in the world";
// var regex = /school/g;
// document.getElementById("result5").innerHTML = text.match(regex);

// var text = "digital school is the best school in the wrold";
// var regex = /i/g;
// document.getElementById('result6').innerHTML = text.match(regex);


// var text = "digital school is the best school in the wrold";
// var regex = /[abc]/g;
// document.getElementById('result7').innerHTML = text.match(regex);

var text = "digital school is in top 10 best school in the wrold";
var regex =/[0-9]/g;
document.getElementById('result8').innerHTML = text.match(regex) 

var text = "my school is the best schoolin the wrold";
var regex = /(top|best|school)/g;
document.getElementById('result9').innerHTML = text.match(regex);

var text = "100 percent";
var regex = /\d/g;
document.getElementById('result10').innerHTML = text.match(regex);