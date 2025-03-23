// Change the text of the heading when the "Change Text" button is clicked
document.getElementById('change-text-btn').addEventListener('click', () => {
  const heading = document.getElementById('main-heading');
  heading.textContent = 'The DOM has been edited!';
});

// Add a new item to the list when the "Add Element" button is clicked
document.getElementById('add-element-btn').addEventListener('click', () => {
  const newItem = document.createElement('li');
  const itemList = document.getElementById('item-list');
  const itemCount = itemList.children.length + 1;
  newItem.textContent = `Item ${itemCount}`;
  itemList.appendChild(newItem);
});