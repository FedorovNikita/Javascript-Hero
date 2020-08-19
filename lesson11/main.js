let numbers = [10, 20, -10, 2, 5];
let users = [
  {
    name: 'Denis',
    age: 29,
    gender: 'male',
    balance: 100
  },
  {
    name: 'Olga',
    age: 21,
    gender: 'female',
    balance: 200
  },
  {
    name: 'Ivan',
    age: 22,
    gender: 'male',
    balance: 300
  }
]

// Filter
// let res = numbers.filter(item => {
//   return item >= 0;
// })

// console.log(res);

// let res = users.filter(user => user.gender === 'female');

// console.log(res);

// Map
// let mapRes = users.map(user => user.name);
// console.log(mapRes);

// let mapRes = users.map(user => {
//   user.age = user.age + ' years old'
//   return user;
// });
// console.log(mapRes);

// Reduce 
// let total = users.reduce((sum, user) => sum += user.balance, 0)
// console.log(total);

// Promises

/* const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('some value');
  }, 2000);
});

promise
  .then(data => {
    console.log(data);
    return data;
  })
  .then(data => {
    console.log(data + ' next step')
  }) */


/* let post;
let comments;

function getPostById(id) {
  return new Promise(function (resolve, reject) {
    ajax.send({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      success: resolve,
      error: reject
    })
  })
}

function getCommentsById(id) {
  return new Promise(function (resolve, reject) {
    ajax.send({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      success: resolve,
      error: reject
    })
  })
}

function generateTemplate(comments) {
  comments.forEach(comment => {
    // console.log(comment);
  });
}

getPostById(1)
  .then(res => {
    post = JSON.parse(res);
    return post.id
  })
  .then(getCommentsById)
  .then(res => {
    comments = JSON.parse(res);
    return comments;
  })
  .then(generateTemplate)
  .catch(err => {
    console.log(err);
  }); */

// Fetch
/* fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
  method: 'GET'
})
  .then(res => {
    console.log(res.status);
    console.log(res.headers.get('Content-type'));
    // console.log(res.json());
    return res.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  }); */

  const server = new JsonPlaceholder();

  server.getPosts(1)
    .then(data => data.id)
    .then(server.getCommentsById)
    .then(comment => console.log(comment));


