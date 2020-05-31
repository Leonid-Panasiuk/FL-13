const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');

// GET LIST

function loadUsers() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', baseUrl + '/users');

  xhr.onloadstart = function (){
    let dataElement = document.getElementById('data');
    dataElement.classList.add('hide');
    dataElement.classList.remove('show');

    let loaderElement = document.getElementById('loader');
    loaderElement.classList.remove('hide');
    loaderElement.classList.add('show');
  }

  xhr.onloadend = function (){
    let dataElement = document.getElementById('data');
    dataElement.classList.remove('hide');
    dataElement.classList.add('show');

    let loaderElement = document.getElementById('loader');
    loaderElement.classList.add('hide');
    loaderElement.classList.remove('show');
  }

  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById('table').innerHTML = '';
      let users = JSON.parse(this.responseText);
      for (let i = 0; i < users.length; i++) {
        document.getElementById('table').innerHTML += '<tr>' +
          '<td>' + users[i].id + '</td>' +
          '<td><input id="name-' + users[i].id + '" type="text" value="' + users[i].name + '" /></td>' +
          '<td><input id="username-' + users[i].id + '" type="text" value="' + users[i].username + '" /></td>' + 
          '<td><button onclick="updateUser(this, \'' + users[i].id + '\')">Update</button></td>' +
          '<td><button onclick="deleteUser(this, \'' + users[i].id + '\')">Delete</button></td>' +
          '</tr>';
      }
    } else if (this.status === 404) {
      console.log('Not found');
    }
  };

  xhr.send();
}

// ADD NEW USER

function addUser() {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', baseUrl + '/users');
  xhr.setRequestHeader('Content-Type', 'application/json');

  let nameVal = document.getElementById('user_name').value;
  let fullNameVal = document.getElementById('full_name').value;

  xhr.onloadend = function (){
    let element = document.getElementById('add-user');
    element.disabled = false;
    loadUsers();
  }

  xhr.onloadstart = function (){
    let element = document.getElementById('add-user');
    element.disabled = true;
  }

  xhr.send(JSON.stringify({
    name: nameVal,
    username: fullNameVal
  }));
}

// DELETE USER

function deleteUser(button, userId) {
  let xhr = new XMLHttpRequest();
  xhr.open('DELETE', baseUrl + '/users/' + userId);
  xhr.setRequestHeader('Authorization', 'admin');

  xhr.onloadend = function (){
    loadUsers();
  }

  xhr.onloadstart = function (){
    button.disabled = true;
  }

  xhr.send();
}

// UPDATE USER

function updateUser(button, userId) {
  let xhr = new XMLHttpRequest();
  xhr.open('PUT', baseUrl + '/users/' + userId);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onloadend = function (){
    button.disabled = false;
  }

  xhr.onloadstart = function (){
    button.disabled = true;
  }

  let nameVal = document.getElementById('name-' + userId).value;
  let fullNameVal = document.getElementById('username-' + userId).value;

  xhr.send(JSON.stringify({
    name: nameVal,
    username: fullNameVal
  }));
}

loadUsers();