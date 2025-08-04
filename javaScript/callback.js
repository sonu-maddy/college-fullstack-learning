function greet(name) {
  console.log("Hello" + " " + name);
}

function prossesuser(callback) {
  let name = "Sonu";
  callback(name);
}

prossesuser(greet);

function makingTea(milk) {
  console.log("chai ready");
}
function panigaram(callback) {
  console.log("Gas on");
  console.log("water boiling");
  setTimeout(() => {
    console.log("water boiled");
    console.log("chai ki patti or chinni");
    console.log("adrak or ilaychi ek sath dalenge");
    let milk = "1 leter";
    callback(milk);
  }, 6000);
}

panigaram(makingTea);
