// AJAX
/* const xhr = new XMLHttpRequest();

xhr.addEventListener('load', function(e) {
  console.log(xhr.responseText);
});

xhr.addEventListener('error', function(e) {
  console.log(xhr.responseText);
});

xhr.addEventListener('timeout', function(e) {
  console.log('timeout');
});

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// xhr.timeout = 50;

xhr.setRequestHeader('Content-type', 'application/json');

xhr.send(); */

//  get all posts
ajax.send({
  method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/posts',
  success: function(res) {
    let response = JSON.parse(res);
    console.log(response);
  },
  error: function(err) {
    console.log(err);
  }
})

ajax.send({
  method: 'POST',
  url: 'https://jsonplaceholder.typicode.com/posts',
  data: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  },
  success: function(res) {
    let response = JSON.parse(res);
    console.log(response);
  },
  error: function(err) {
    console.log(err);
  }
})

