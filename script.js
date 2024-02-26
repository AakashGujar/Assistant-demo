const keyboardBtn = document.getElementById("keyboard");
const userDiv = document.querySelector(".user");
const usermainDiv = document.querySelector(".usermain");
const textarea = document.querySelector(".users-input");
const voiceBtn = document.getElementById("voicebtn");

voiceBtn.addEventListener("click", () => {
  // Toggle the 'active' class on the voice button
  voiceBtn.classList.toggle("active");

  // Call the openInputField function
  openInputField();
});

function openInputField() {
  userDiv.classList.add("userSecond");
  usermainDiv.classList.add("usermainSecond");
  textarea.classList.remove("hidden");
  textarea.focus();
}

function revertToNormal() {
  userDiv.classList.remove("userSecond");
  usermainDiv.classList.remove("usermainSecond");
  textarea.classList.add("hidden");
  textarea.value = "";
  // Remove the 'active' class from the voice button
  voiceBtn.classList.remove("active");
}

keyboardBtn.addEventListener("click", openInputField);

textarea.addEventListener("blur", () => {
  const message = textarea.value.trim();
  if (message) {
    const mainDiv = document.getElementById("main");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("users-message");
    messageDiv.innerHTML = `<span>${message}</span>`;
    mainDiv.appendChild(messageDiv);
  }
  revertToNormal();
});

textarea.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    textarea.blur();
  }
});

document.addEventListener("click", (event) => {
  // Check if the clicked element is not within the userDiv or textarea
  if (!userDiv.contains(event.target) && !textarea.contains(event.target)) {
    revertToNormal();
  }
});
