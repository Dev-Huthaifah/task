function addTask() {
  var input = document.getElementById('inputTask').value.trim();
  var li = `<li>${input}</li>`;
  var list = document.getElementById('tasksList');
  
  list.appendChild(li);
  input = '';
}