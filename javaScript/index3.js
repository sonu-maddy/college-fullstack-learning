 const arr = [];
      const display = document.getElementById("display");

      function updateDisplay() {
        display.innerHTML = `Array [${arr}]`;
        document.getElementById("inputValue").value = "";
        console.log(arr);
      }
      function popValue() {
        arr.pop();
        updateDisplay();
      }

      function additem() {
        const value = document.getElementById("inputValue").value;
        if (value != "") {
          arr.push(value);
          updateDisplay();
        }
      }

      function shiftValue() {
        arr.shift();
        updateDisplay();
      }

      function unshiftValue() {
        const value = document.getElementById("inputValue").value;
        if (value !== "") {
          arr.unshift(value);
          updateDisplay();
        }
      }

      // array

      let snack = ["burger", "pizza", "coke"];
      // console.log("before Add")
      // console.log(snack)

      //  console.log("after Add")
      // snack.push("sandwich")
      // console.log(snack)

      console.log("before splice");
      console.log(snack);

      console.log("after splice");
      snack.splice(0, 1, "banana", "drink");

      console.log(snack);

      snack.splice(1, 0, "lassi");

      console.log(snack);

      snack.includes("banana"); // return true;

      snack.indexOf("banana"); // return index of matching value

      let snackFind = snack.find((x) => {
        // console.log(x); return all item from the array;

        return x == "lassi";
      });
      console.log(snackFind);

      let foreachItem = snack.forEach((item) => {
        return item;
      });

      let mapItem = snack.map((item) => {
        return item + "some";
      });
      console.log(mapItem);

      let filterItem = snack.filter((item) => {
        return item != "lassi";
      });
      console.log(filterItem);

      let number = [1, 2, 3];
      let reduceItem = number.reduce((acc, val) => {
        return acc + val;
      }, 2);
      console.log(reduceItem);

      // object

      // let person  = {
      //   name : "sonu ",
      //   age : 22

      // }

      // object creation
      //       console.log(person.name);
      //       console.log(person[age]);
      //       console.log("using new keyword");
      //       const detail = new person();
      //       console.log(detail.name);

      //       // bind property
      //       const cal = {
      //         add: function(a,b){
      //           return a+b;
      //         },
      //         sub:function(){
      //           return a*b;
      //         }

      //       }
      //       const addResult = new cal.add(2,5);
      //       console.log(addResult);

      //       // arrow function.....
      //       const calculater = {
      //         add : (() =>{

      //         })
      //       }

      //       // this keyword - refer to owner object...
      //      const personProp = {
      //   firstName: "Sonu",
      //   lastName: "Maddheshiya",
      //   showDetail: function(firstName, lastName) {
      //     console.log("user this", this.firstName, this.lastName);
      //     console.log("passed arguments", firstName, lastName);
      //   }
      // }

      // personProp.showDetail("Ram", "Sohan");

      // Date obj

     // console.log(Date);

      // let date = new Date();
      // const fullYear = date.getFullYear();
      // const month = date.getMonth();
      // const day = date.getDay();
      // const hour = date.getHours();

      // showing running time in text box.
      // using settime interval

      function updateClock() {
        const date = new Date();
        let hour = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const ampm = hour >= 12 ? "PM" : "AM";

        hour = hour % 12;
        hour = hour === 0 ? 12 : hour;

        const formattedHour = hour < 10 ? "0" + hour : hour;
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

        const timer = `${formattedHour}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
        console.log(timer);

        const showtimer = document.querySelector(".showtimer");
        showtimer.innerHTML = timer;
      }

      updateClock();

      setInterval(updateClock, 1000);