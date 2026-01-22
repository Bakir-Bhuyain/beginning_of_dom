console.log("my awesome dom de baba");
// console.log(document.body);

const person = {
  name: "Bakir",
  age: 25,
  isMarried: false,
  study: function (time) {
    console.log("study kortese");
  },
};

const liCollection = document.getElementsByTagName("li");
// console.log(liCollection);
for (const li of liCollection) {
//   console.log(li.innerText);
}
const allHeading = document.getElementsByTagName("h1");
for (const heading of allHeading) {
//   console.log(heading.innerText);
}

const allLi = document.getElementsByTagName("li");
for (const li of allLi) {
//   console.log(li.innerText);
}

// const tastyFruits = document.getElementById('fruits-name')
// for (const fruit of tastyFruits){
//       console.log(fruit.innerText);
// }
// console.log(tastyFruits);


const tastyFruits = document.getElementsByClassName("fruits-name");
// console.log(tastyFruits);
for (const fruit of tastyFruits){
      console.log(fruit.innerText);
}

const fruitee = document.getElementsByClassName('fruits-name');
fruitee.innerText= 'cucambar';