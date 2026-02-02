const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark task as completed
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete task on double click
  li.addEventListener("dblclick", function () {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = "";
});
