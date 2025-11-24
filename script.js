document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "All fields are required!";
    } else if(!emailPattern.test(email)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Invalid email format!";
    } else {
        formMessage.style.color = "green";
        formMessage.textContent = "Message sent successfully!";
        document.getElementById("contactForm").reset();
    }
});
document.getElementById("addTask").addEventListener("click", function() {
    let todoInput = document.getElementById("todoInput");
    let todoList = document.getElementById("todoList");

    if(todoInput.value.trim() === "") return;

    let li = document.createElement("li");
    li.textContent = todoInput.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() { li.remove(); };

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    todoInput.value = "";
});

