//normalloop
function normalLoop() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
normalLoop();

//reverseloop

function reverseLoop() {
  for (let i = 3; i >= 0; i--) {
    console.log(i);
  }
}
reverseLoop();

//array

function myTrip() {
  const myTrip = ["Japan", "Korea", "Gorgia", "Hongkong", "Mexico"];
  for (let i = 0; i < myTrip.length; i++) {
    if (myTrip[i] === "Korea") {
      break;
    }
    console.log(myTrip[i]);
  }
}

myTrip();

function myTrip() {
  const myTrip = ["Japan", "Korea", "Gorgia", "Hongkong", "Mexico"];
  for (let i = 0; i < myTrip.length; i++) {
    if (myTrip[i] === "Korea") {
      continue;
    }
    console.log(myTrip[i]);
  }
}

myTrip();
