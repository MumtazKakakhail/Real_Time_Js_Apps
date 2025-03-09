// Select elements
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todos = []; // Array to store todo items

// Function to add a new todo
function addTodo() {
    let task = todoInput.value.trim(); // Get input value

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let newTodo = {
        id: Date.now(), // Unique ID for each task
        text: task,
        completed: false
    };

    todos.push(newTodo); // Add to array
    todoInput.value = ""; // Clear input
    renderTodos(); // Refresh the UI
}

// Function to render the todo list
function renderTodos() {
    todoList.innerHTML = ""; // Clear previous list

    todos.forEach(todo => {
        let li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" onclick="toggleComplete(${todo.id})" ${todo.completed ? "checked" : ""}>
            <span class="${todo.completed ? "completed" : ""}">${todo.text}</span>
            <button onclick="editTodo(${todo.id})">✏️</button>
            <button onclick="deleteTodo(${todo.id})">🗑️</button>
        `;
        todoList.appendChild(li);
    });
}

// Function to toggle completion
function toggleComplete(id) {
    todos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    renderTodos();
}

// Function to edit a todo
function editTodo(id) {
    let newTask = prompt("Edit your task:");
    if (newTask) {
        todos = todos.map(todo => 
            todo.id === id ? { ...todo, text: newTask } : todo
        );
        renderTodos();
    }
}

// Function to delete a todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}
