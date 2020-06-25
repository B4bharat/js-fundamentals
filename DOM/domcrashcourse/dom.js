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
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submitButton = document.querySelector('input[type="submit"]');
// submitButton.value = 'send';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// // QuerySelectorAll
// let titles = document.querySelectorAll('.title');
// console.log(titles);

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = 'lightgrey';
// }

// Traversing the DOM
let itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#ccc';

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#ccc';

// ChildNodes
// console.log(itemList.childNodes);

// Children
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'yellow';

// lastChild
// console.log(itemList.lastChild);
// // lastElementChild
// console.log(itemList.lastElementChild);

// Siblings
// let titleNode = document.getElementsByClassName('title');
// console.log(titleNode);
// console.log(titleNode[1].nextElementSibling);

// createElement
// let newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.textContent = 'yoyoma';
// console.log(newDiv);

// // This is the best way to create DOM
// // - https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

// // Inserting to DOM
// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);
document.getElementById('button').addEventListener('click', function (e) {
  console.log(e.target.className);
  console.log(e.target.classList);
  console.log(e.type);
  console.log(e.clientX);

  console.log('offset', e.offsetX);
});
