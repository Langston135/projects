var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, tablinks, tabcontents) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

console.log(8);

































function encode(){
  console.log(13);
  let newword = "";
  let num = 0;
  let change_word = prompt("enter the message you would like ");
  let shift = prompt("Shiftkey");
  let abc1 = "abcdefghijklmnopqrstuvwxyz";
  const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  for (let y of change_word) {
     let x = abc.indexOf(y);
     x += shift % 26;
     newword += abc[x];
 
  }
  document.getElementById("demo").innerHTML = newword;  
}
function decode(){
  let newword = "";
  let num = 0;
  let change_word = prompt("enter the message you would like ");
  let shift = prompt("Shiftkey");
  let abc1 = "abcdefghijklmnopqrstuvwxyz";
  const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  for (let y of change_word) {
     let x = abc.indexOf(y);
     x = x - shift % 26;
     newword += abc[x];
 
  }
  document.getElementById("demo").innerHTML = newword;  
}
