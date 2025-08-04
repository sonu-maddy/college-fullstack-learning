function BoilWater() {
  return new Promise((resolve, reject) => {
    console.log("Start Boiling water");
    setTimeout(() => {
      console.log("Water ready");
    }, 0);
    resolve();
  });
}

function MakeTea() {
  return new Promise((resolve, reject) => {
    console.log("Start Starting Making Tea");
    setTimeout(() => {
      console.log("Tea ready");
    }, 1000);
    resolve();
  });
}

function makeSandwitch() {
  return new Promise((resolve, reject) => {
    console.log("Start sandwitch making");
    setTimeout(() => {
      console.log("Sandwitch ready");
      return console.error("sandwich burner not working");
    }, 3000);
    resolve();
  });
}

function makeSamosha() {
  return new Promise((resolve, reject) => {
    console.log("Start samosha making");
    setTimeout(() => {
      console.log("Samosha ready");
    }, 4000);
    resolve();
  });
}

BoilWater()
  .then(MakeTea)
  .then(makeSandwitch)
  .then(makeSamosha)
  .then(() => {
    console.log("Breake Fast Ready");
  })
  .catch((err) => {
    console.log("something error", err);
  });




function FindNote() {
    return new Promise((resolve,reject) =>{

   
  console.log("Finding Note for learning");
  setTimeout(() => {
    console.log("Note Find");
  }, 1000);
  resolve();
   })
}

function Study() {
    return new Promise((resolve,reject) => {

   
  console.log("Start Study For exam");
  setTimeout(() => {
    console.log("Study done");
  }, 2000);
  resolve();
   })
}

function Revise() {
     return new Promise((resolve,reject) =>{

    
  console.log("Start Revise");
  setTimeout(() => {
    console.log("Rivise Done");
  }, 3000);
  resolve();
   })
}

function Sleep() {
    return new Promise((resolve,reject) =>{

   
  console.log("Time to sleep");
  setTimeout(() => {
    console.log("Sleeped");
  }, 4000);
resolve();
 })
}

function GoForExam() {
    return new Promise((resolve,reject) => {

   
  console.log("Going to exam center");
  setTimeout(() => {
    console.log("Exam Done");
  }, 5000);
  resolve();
   })
}

FindNote()
  .then(Study)
  .then(Revise)
  .then(Sleep)
  .then(GoForExam)
  .then(() => {
    console.log("go for exam");
  })
  .catch((err) => {
    console.log("something error", err);
  });

