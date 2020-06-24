// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// // document.title = 'Fun with document';
// console.log(document.title);

// console.log(document.head);
// console.log(document.body);

// // HTML collection of everything in the DOM
// console.log(document.all);
// console.log(document.querySelector('#main.card.card-body').textContent);
// console.log(document.forms);
// console.log(document.links);

console.log(document.images);

// Selecting, quering the DOM
console.log(document.getElementById('header-title'));

let headerTitle = document.getElementById('header-title');
headerTitle.textContent = 'New Item Lister';

// Styling
headerTitle.style.color = '#000';

// Get Elements by Class Name
// let listItems = document.getElementsByClassName('list-group-item');
// console.log(listItems[1].textContent);
// listItems[1].textContent = 'New Item';
// listItems[1].style.fontWeight = 'bold';
// listItems[1].style.backgroundColor = 'yellow';

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.backgroundColor = 'lightgrey';
// }

// Get Elements by TagName
// let listItems = document.getElementsByTagName('li');
// console.log(listItems[1].textContent);
// listItems[1].textContent = 'New Item';
// listItems[1].style.fontWeight = 'bold';
// listItems[1].style.backgroundColor = 'yellow';

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.backgroundColor = 'lightgrey';
// }

// QuerySelector
let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

let input = document.querySelector('input');
input.value = 'Hello World';
