var nice = document.getElementById("input").value;
var time = new Date();
console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
// var test = "how old are you";

function echoFunction(nice, now) {
  // var test = "how old are you";
  // document.getElementById("chat-area").textContent = document.getElementById("input").value;
if(input.value == "how old are you") {
  console.log(2);
  document.getElementById("chat-area").textContent =
       "17 years old";
}else if (input.value == "what is your name") {
  document.getElementById("chat-area").textContent = "Jordan";
}else if(input.value == "what time is it") {
  document.getElementById("chat-area").textContent = "Here is the time and date" + " " + time;
}


}
