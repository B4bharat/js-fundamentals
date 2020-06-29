let formElement = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filterItem = document.getElementById('filter');

// Form submit event
formElement.addEventListener('submit', addItem);
// Delete Event
itemList.addEventListener('click', removeItem);
// Filter Items
filterItem.addEventListener('keyup', filterItems);

// Add Item
function addItem(e) {
  e.preventDefault();

  // Get input value
  let newItem = document.getElementById('item').value;

  // Create new li element
  let li = document.createElement('li');
  li.className = 'list-group-item';

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // create delete button element
  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('x'));

  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  // convert text to lowercase
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName('li');

  Array.from(items).forEach(function (item) {
    let itemText = item.firstChild.textContent;
    if (itemText.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
