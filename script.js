const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


//add a task to the to do list
function addTask() {
    //make sure that the input box is not empty
  if (inputBox.value == '') {
    alert('Please enter a task');

  } else {
    //create a new list item and add it to the list container
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00D7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();

    }
    }, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showList();