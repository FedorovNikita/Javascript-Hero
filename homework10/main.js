let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];
let notificationAlert = document.querySelector('.notification-alert'); 

function listTemplate(task) {
  // create list item
  let li = document.createElement('li');
  li.className = 'list-group-item d-flex align-items-center';
  li.setAttribute('data-id', task.id);
  let span = document.createElement('span');
  span.textContent = task.title;

  if (task.completed) {
    li.classList.add('bg-success');
  }

  // create tag i fas fa-trash-alt
  let iDelete = document.createElement('i');
  iDelete.className = 'fas fa-trash-alt delete-item ml-4';
  let iEdit = document.createElement('i');
  iEdit.className = 'fas fa-edit edit-item ml-auto';
  // append span, edit and delete icon to li
  li.appendChild(span);
  li.appendChild(iEdit);
  li.appendChild(iDelete);  

  return li
}

function clearList() {
  ul.innerHTML = '';
}

function getTasks() {
  ajax.send({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/todos',
    success: function(res) {
      tasks = JSON.parse(res);
      generateList(tasks);
    },
    error: function(err) {
      console.log(err);
    }
  })
} 

function generateList(tasksArray) {

  clearList();

  for (let i = 0; i < tasksArray.length; i++) {
    let li = listTemplate(tasksArray[i]);
    ul.appendChild(li);
  }

}

function addList(task) {
  let newTask = {
    id: task.id,
    title: task.title,
  }
  tasks.unshift(newTask);

  ul.insertAdjacentElement('afterbegin', listTemplate(newTask));
  // add to localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}



function deleteListItem(id) {
//   fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
//     method: 'DELETE',
//   })

  ajax.send({
    method: 'DELETE',
    url: 'https://jsonplaceholder.typicode.com/todos/' + id,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    success: function(res) {
      let response = JSON.parse(res);
      // console.log(response);
      message({
        text: 'Task deleted success',
        cssClass: 'alert-warning',
        timeout: 4000
      });
    },
    error: function(err) {
      console.log(err);
    }
  })

  
}

function editListItem(id, newValue) {

  ajax.send({
    method: 'PATCH',
    url: 'https://jsonplaceholder.typicode.com/todos/' + id,
    data: JSON.stringify({
      title: newValue,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    success: function(res) {
      let response = JSON.parse(res);
      // addList(response);
      message({
        text: 'Task updated success',
        cssClass: 'alert-success',
        timeout: 4000
      });
    },
    error: function(err) {
      console.log(err);
    }
  })
  // fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
  //   method: "PUT",
  //   body: JSON.stringify({
  //     id: id,
  //     title: newValue,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => addList(json));

  
}

function message(settings) {
  notificationAlert.classList.add(settings.cssClass);
  notificationAlert.textContent = settings.text;
  notificationAlert.classList.add('show');
  setTimeout(() => {
    notificationAlert.classList.remove('show');
  }, settings.timeout); 
}

ul.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-item')) {
    let parent = e.target.closest('li');
    let id = parent.dataset.id;
    // delete list item
    deleteListItem(id);
    parent.remove();

  } else if (e.target.classList.contains('edit-item')) {
    e.target.classList.toggle('fa-save');
    let id = e.target.closest('li').dataset.id;
    let span = e.target.closest('li').querySelector('span');
    span.setAttribute('contenteditable', true);
    span.focus();

    if (e.target.classList.contains('fa-save')) {
      span.setAttribute('contenteditable', true);
      span.focus();
    } else {
      span.setAttribute('contenteditable', false);
      span.blur();
      editListItem(id, span.textContent);
    }
  }

  
})

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (!inputText.value) {
    inputText.classList.add('is-invalid');
  } else {
    // inputText.classList.remove('is-invalid');
    let text = inputText.value;
    ajax.send({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/todos',
      data: JSON.stringify({
        title: text,
        completed: false
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      success: function(res) {
        let response = JSON.parse(res);
        addList(response);
      },
      error: function(err) {
        console.log(err);
      }
    })
    form.reset();
  }

})

inputText.addEventListener('keyup', function(e) {
  if (inputText.value) {
    inputText.classList.remove('is-invalid');
  }
})

getTasks()


