// function addItem() {
//   var add = document.querySelector("#addhogia");
//   var txt = document.createTextNode(add.value);
//   // Clear the input field after adding the task
//   add.value = "";
//   var lis = document.createElement("li");
//   lis.appendChild(txt);
//   // put li into ul container
//   var taskList = document.querySelector("#taskList");
//   taskList.appendChild(lis);

//   // Edit
//   var editBut = document.createElement("button");
//   editBut.textContent = "Edit";
//   editBut.setAttribute("onclick", "editItem(this)");
//   lis.appendChild(editBut);

//   // Delete
//   var delBut = document.createElement("button");
//   delBut.textContent = "Delete";
//   delBut.setAttribute("onclick", "delItem(this)");
//   lis.appendChild(delBut);

// }
// function delItem(e) {
//   e.parentNode.remove();
// }
// function editItem(e) {
//   var editValue = prompt("Enter new value", "Enter task");
//   e.parentNode.firstChild.nodeValue = editValue;
// }

// Make through InputField
function addItem() {
  // Add
  var add = document.querySelector("#addhogia");
  var txt = document.createTextNode(add.value);
  var lis = document.createElement("li");
  add.value = ""; // Clear the input field after adding a task

  // Create a span for the text
  var span = document.createElement("div");
  span.className = "task-text";
  span.appendChild(txt);
  lis.appendChild(span);

  // Create a div for buttons
  var buttonDiv = document.createElement("div");
  buttonDiv.className = "buttons";

  // Edit
  var editBut = document.createElement("button");
  editBut.textContent = "Edit";
  editBut.setAttribute("onclick", "editItem(this)");
  editBut.setAttribute("class", "But editButton");
  buttonDiv.appendChild(editBut);

  // Delete
  var delBut = document.createElement("button");
  delBut.textContent = "Delete";
  delBut.setAttribute("onclick", "delItem(this)");
  delBut.setAttribute("class", "But delButton");
  buttonDiv.appendChild(delBut);

  lis.appendChild(buttonDiv);

  // enter ul to li
  var ul = document.querySelector("#taskList");
  ul.appendChild(lis);
}

function delItem(e) {
  e.parentNode.parentNode.remove();
}

function editItem(e) {
  var li = e.parentNode.parentNode;
  var currentText = li.querySelector(".task-text").textContent;

  // Change background color when editing
  li.classList.add("editing");

  // Create an input field with the current text as its value
  var inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = "Edit Task";
  inputField.value = currentText;

  // Save button
  var saveBut = document.createElement("button");
  saveBut.textContent = "Save";
  saveBut.setAttribute("onclick", "saveItem(this)");
  saveBut.setAttribute("class", "But saveButton");

  // Create a container for input and button with flex properties
  var editContainer = document.createElement("div");
  editContainer.className = "edit-container"; // New container for flex properties
  editContainer.appendChild(inputField);
  editContainer.appendChild(saveBut);

  // Clear the current contents of the list item and add the edit container
  li.innerHTML = "";
  li.appendChild(editContainer); // Add the container instead of the input field and save button directly
}

function saveItem(e) {
  var li = e.parentNode.parentNode; // Changed from e.parentNode to e.parentNode.parentNode
  var inputField = li.querySelector("input");

  // Get the new text from the input field
  var newText = inputField.value;
  var span = document.createElement("span");
  span.className = "task-text";
  span.appendChild(document.createTextNode(newText));

  // Clear the current contents of the list item
  li.innerHTML = "";

  // Add the new text span
  li.appendChild(span);

  // Recreate the button div
  var buttonDiv = document.createElement("div");
  buttonDiv.className = "buttons";

  // Edit button
  var editBut = document.createElement("button");
  editBut.textContent = "Edit";
  editBut.setAttribute("onclick", "editItem(this)");
  editBut.setAttribute("class", "But editButton");
  buttonDiv.appendChild(editBut);

  // Delete button
  var delBut = document.createElement("button");
  delBut.textContent = "Delete";
  delBut.setAttribute("onclick", "delItem(this)");
  delBut.setAttribute("class", "But delButton");
  buttonDiv.appendChild(delBut);

  // Append the button div to the li
  li.appendChild(buttonDiv);

  //Remove the class name of editing class so it will bocome to its original position
  li.classList.remove("editing");
}
