// console.log("my awesome dom de baba");
// console.log(document.body);

// const { createElement } = require("react");

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
      // console.log(fruit.innerText);
}

const fruitee = document.getElementsByClassName('fruits-name');
// fruitee.innerText= 'cucambar';

// const ulId = document.getElementById("fruits-basket");
// ulId.getAttribute('class');
// console.log(ulId);
// const ulId = document.getElementById("fruits-basket");
// ulId. setAttribute('class','purple-bg')
// console.log(ulId)
// console.log(ulId)

// const ulId = document.getElementById('fruits-basket');
// ulId.style.color=('red')
// ulId.style.backgroundColor=('pink')
// ulId.style.alignItems('center')
// ulId.style.border("2px solid black")

// ulId.setAttribute('ulId', 'tooltip set by javaScript')
const fruitsH1 = document.getElementById("fruits-id");
// fruitsH1.setAttribute('fruitsH1', 'tooltip set by javascript')
// const ulId = document.getElementById("fruits-basket");
// ulId.classList.add('black-bg');
document.getElementsByClassName('fruits-name');


const mainContainer = document.getElementById("main-container");

const section = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = ('my food list');
section.appendChild(h1);

const ulList = document.createElement("ul");

const liList1 = document.createElement('li');
liList1.innerText = 'birayani';
ulList.appendChild(liList1);

const liList2 = document.createElement('li');
liList2.innerText = "Borhani";
ulList.appendChild(liList2);

const liList3 = document.createElement('li');
liList3.innerText = 'Kabab';
ulList.appendChild(liList3);


section.appendChild(ulList);
mainContainer.appendChild(section);

// section.appendChild(mainContainer);
// console.log(section);


const dressSection = document.createElement('section');
dressSection.innerHTML = `
<h1>My dress secction </h1>
<ul>
<li>T-shirt</li>
<li>T-shirt</li>
<li>T-shirt</li>
<li>T-shirt</li>
</ul>
`
mainContainer.appendChild(dressSection);