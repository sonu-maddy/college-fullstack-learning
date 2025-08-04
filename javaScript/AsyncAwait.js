function FindNote() {
  return new Promise((resolve, reject) => {
    console.log("Finding Note for learning");
    setTimeout(() => {
      console.log("Note Find");
    }, 1000);
    resolve();
  });
}

function Study() {
  return new Promise((resolve, reject) => {
    console.log("Start Study For exam");
    setTimeout(() => {
      console.log("Study done");
    }, 2000);
    resolve();
  });
}

function Revise() {
  return new Promise((resolve, reject) => {
    console.log("Start Revise");
    setTimeout(() => {
      console.log("Rivise Done");
    }, 3000);
    resolve();
  });
}

function Sleep() {
  return new Promise((resolve, reject) => {
    console.log("Time to sleep");
    setTimeout(() => {
      console.log("Sleeped");
    }, 4000);
    resolve();
  });
}

function GoForExam() {
  return new Promise((resolve, reject) => {
    console.log("Going to exam center");
    setTimeout(() => {
      console.log("Exam Done");
    }, 5000);
    resolve();
  });
}

async function studytime() {
  try {
    await FindNote();
    await Study();
    await Revise();
    await Sleep();
    await GoForExam();
    console.log("go for exam");
  } catch (err) {
    console.log("something error", err);
  }
}
