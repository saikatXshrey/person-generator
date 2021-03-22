const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  fetchPerson();
});

function fetchPerson() {
  const ajax = new XMLHttpRequest();
  const url = `https://randomuser.me/api/`;
  ajax.open('GET', url, true);

  ajax.onload = function () {
    if (this.status === 200) {
      processData(JSON.parse(this.responseText));
    }
  };

  ajax.send();
}

function processData(data) {
  console.log(data);

  const {
    name: { first },
    name: { last },
    picture: { large },
    location: { street: { name } },
    phone,
    email
  } = data.results[0];

  showData(first, last, large, name, phone, email);
}

function showData(first, last, large, name, phone, email) {
  document.getElementById('first').textContent = first;
  document.getElementById('last').textContent = last;
  document.getElementById('street').textContent = name;
  document.getElementById('phone').textContent = phone;
  document.getElementById('email').textContent = email;
  document.getElementById('photo').src = large;
}