
function newItem() {
  
  // adding a new item to the list of items
  let list = $('#list');
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  let text = document.createTextNode(inputValue);
  
  li.append(text);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    list.append(li);
  }
  
  // cross out a list item
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', crossOut);
  
  // adding the delete button "X"
  let deleteButton = $('<deleteButton></deleteButton>');
  deleteButton.append(document.createTextNode('X'));
  li.append(deleteButton);

  deleteButton.on('click', deleteListItem);

  // hide list element with CSS class delete (display: none)
  function deleteListItem() {
    li.addClass('delete');
  }

  // reordering the items:
  list.sortable();  
}