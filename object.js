// // Object kry>value

// const person = {
//   name: "John",
//   age: 30,
//   telephone: 0624195552,
//   email: {
//     adsress1: "kittipopeong@gmail.com",
//     address2: "kittipopework@gmail.com",
//   },
// };

// console.log("Name:", person.name); //use point
// console.log("Name", person["name"]); // use bracket

// console.log("Name:", person.email.address2);

// objects (Arrayof object)

const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];

data.forEach((person, idx) => {
  console.log("person", idx + 1);
  console.log("name", person.name);
  console.log("age", person.age);
  console.log("job", person.job);
  console.log("--------------");
});
