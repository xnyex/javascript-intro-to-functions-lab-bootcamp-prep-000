function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}
function logShout(string){
  string = string.toUpperCase();
  console.log (string)
}
function logWhisper(string){
  string = string.toLowerCase();
  console.log(string)
}
function sayHiToGrandma(string){
  if (string ===string.toUpperCase()) {
    return "I can't hear you!"
  } else if (string ==== string.toLowerCase()){
    return "YES INDEED!"
  } else if (string === "I love you, grandma."){
    return "I love you, too."
  }
}

