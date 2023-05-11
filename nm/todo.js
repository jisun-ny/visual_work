// adding toDos
// deleting
// saving

const toDoForm = document.querySelector('#todo-form');
const toDoinput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const toDos = [];

function saveToDo() {
  localStorage.setItem('todos', JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const button = document.createElement('button');
  button.innerText = '✖';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  //인풋의 이너텍스트를
  //사라지게 하고
  //리스트에띄워주고
  //저장
  const newTodo = toDoinput.value;
  toDoinput.value = '';
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDo();
}

toDoForm.addEventListener('submit', handleToDoSubmit);
