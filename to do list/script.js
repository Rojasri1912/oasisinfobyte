// Selecting elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const pendingList = document.getElementById('todo-pending-list');
const completedList = document.getElementById('todo-completed-list');

// Event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const todoText = input.value.trim(); // Remove leading/trailing whitespace

  if (todoText !== '') {
    createTodoItem(todoText); // Create new to-do item
    input.value = ''; // Clear input field
  }
});

// Function to create a new to-do item
function createTodoItem(todoText) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const label = document.createElement('label');
  label.textContent = todoText;
  const button = document.createElement('button');
  button.textContent = 'Delete';

  // Event listener for delete button
  button.addEventListener('click', function() {
    li.remove(); // Remove the to-do item
  });

  // Event listener for checkbox
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      li.classList.add('completed');
      completedList.appendChild(li);
    } else {
      li.classList.remove('completed');
      pendingList.appendChild(li);
    }
  });

  // Appending elements to the list item
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(button);

  pendingList.appendChild(li); // Add the new to-do item to the pending list
}