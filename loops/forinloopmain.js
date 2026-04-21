var person = {firstname: "jhon", lastname: "doe" , age:25};

var text = "";
var x;

for(x in person){
    text +=person[x] + "<br>";
}
 document.getElementById("forloop").innerHTML = text;
 console.log(text);
 