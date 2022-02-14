let flutterDev = document.getElementById("flut-dev");
let techAuth =  document.getElementById("tech-auth");
let jugaad =  document.getElementById("master-jugaad");
let memester =  document.getElementById("memester");

let developer = ["flut-icon", "android-icon", "ios-icon","firebase-icon"];
let author = ["flut-icon", "android-icon", "ios-icon","firebase-icon", "js-icon"];
let tinkerer =["flut-icon", "android-icon", "ios-icon","firebase-icon", "node-icon", "js-icon", "discord-icon","openai-icon","web-icon", "py-icon"];
let meme = ["js-icon", "py-icon", "doge-icon"];

flutterDev.addEventListener("mouseenter", function( event ) {
  developer.forEach((id, index, _)=>document.getElementById(id).style.filter = "grayscale(0%)");
}, false);

flutterDev.addEventListener("mouseleave", function( event ) {
  developer.forEach((id, index, _)=>document.getElementById(id).style.filter = "grayscale(100%)");
}, false);

techAuth.addEventListener("mouseenter", function( event ) {
  author.forEach((id, index, _)=>document.getElementById(id).style.filter = "grayscale(0%)");
}, false);

techAuth.addEventListener("mouseleave", function( event ) {
  author.forEach((id, index, _)=>document.getElementById(id).style.filter = "grayscale(100%)");
}, false);

jugaad.addEventListener("mouseenter", function( event ) {
  tinkerer.forEach((id, index, _)=>document.getElementById(id).style.filter = "grayscale(0%)");
}, false);

jugaad.addEventListener("mouseleave", function( event ) {
  tinkerer.forEach((id, index, _)=>document.getElementById(id).style.filter = "grayscale(100%)");
}, false);

memester.addEventListener("mouseenter", function( event ) {
  meme.forEach((id, index, _)=>document.getElementById(id).style.filter = "grayscale(0%)");
}, false);

memester.addEventListener("mouseleave", function( event ) {
  meme.forEach((id, index, _)=>document.getElementById(id).style.filter = "grayscale(100%)");
}, false);

