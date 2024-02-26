// Get the elements
const keyboardBtn = document.getElementById('keyboard');
const userDiv = document.querySelector('.user');
const usermainDiv = document.querySelector('.usermain');
const textarea = document.querySelector('.users-input');

// Function to handle reverting back to normal state
function revertToNormal() {
  userDiv.classList.remove('userSecond');
  usermainDiv.classList.remove('usermainSecond');
  textarea.classList.add('hidden');
  // Clear textarea value
  textarea.value = '';
}

// Add click event listener to the keyboard button
keyboardBtn.addEventListener('click', () => {
  // Change class names and show textarea
  userDiv.classList.add('userSecond');
  usermainDiv.classList.add('usermainSecond');
  textarea.classList.remove('hidden');
  // Focus on the textarea
  textarea.focus();
});

// Add blur event listener to the textarea
textarea.addEventListener('blur', () => {
  // Get the value of the textarea
  const message = textarea.value.trim();

  if (message) {
    // Append the message to the main div
    const mainDiv = document.getElementById('main');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('users-message');
    messageDiv.innerHTML = `<span>${message}</span>`;
    mainDiv.appendChild(messageDiv);
  }

  // Revert back to normal state
  revertToNormal();
});

// Add keydown event listener to the textarea
textarea.addEventListener('keydown', (event) => {
  // Check if the pressed key is Enter
  if (event.key === 'Enter') {
    // Prevent the default action of Enter key (e.g., form submission)
    event.preventDefault();

    // Trigger blur event to handle the message and revert back to normal
    textarea.blur();
  }
});

// Add click event listener to the document to revert back to normal state when clicking outside user area
document.addEventListener('click', (event) => {
  // Check if the click is outside the user area
  if (!userDiv.contains(event.target)) {
    // Revert back to normal state
    revertToNormal();
  }
});
