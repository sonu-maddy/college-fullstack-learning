function greet(name) {
  return "Hello, " + name;
}

function processUserInput(callback) {
  const name = "Sonu";
  console.log(callback(name));
}

processUserInput(greet); // Output: Hello, Sonu
