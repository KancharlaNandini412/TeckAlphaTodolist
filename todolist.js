function addTask() {
    var inputField = document.getElementById("taskInput");
    var taskText = inputField.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    var taskList = document.getElementById("taskList");
  
    var listItem = document.createElement("li");
    listItem.textContent = taskText;
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
      listItem.remove();
    };
  
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  
    inputField.value = "";
  }
  