class User {
  #name = "";
  #userName = "";
  #email = "";
  #id = "";
  constructor(name, userName, email, id) {
    this.#name = name;
    this.#userName = userName;
    this.#email = email;
    this.#id = id;
  }

  getUserName() {
    return this.#userName;
  }

  getInfo() {

  }
}

class Subscriber extends User{
  #groups = [];
  #pages = [];
  #canMonetize = false;
  constructor(name, userName, email, id, groups, pages, canMonetize) {
    super(name, userName, email, id);
    this.#groups = groups;
    this.#pages = pages;
    this.#canMonetize = canMonetize;
  }
}

const feed = document.querySelector(".feed");
const send = document.querySelector(".send");
const target = document.querySelector(".target");
const post = document.querySelector(".post");
const inputText = document.querySelector(".inputText");
const user = new User("Rone", "RoninTheDev", "Gamewarrior1andbowser@gmail.com", "RoninTheDev")

function publish(text, image, time, publisher) {
  if (image == "" && text == "") {
    
  } else if (image == "") {
    feed.innerHTML += `<div class="chat"><div class="chatHeader"><div class="icon"></div><h3 class="userName">${publisher}</h3><h4 class="date">${time}</h4></div><div class="chatInfo"><p class="text">${text}</p></div></div>`;
  } else if (text == "") {
    feed.innerHTML += `<div class="chat"><div class="chatHeader"><div class="icon"></div><h3 class="userName">${publisher}</h3><h4 class="date">${time}</h4></div><div class="chatInfo"><img class="chatImg" src=${image}></div></div>`;
  } else {
    feed.innerHTML += `<div class="chat"><div class="chatHeader"><div class="icon"></div><h3 class="userName">${publisher}</h3><h4 class="date">${time}</h4></div><div class="chatInfo"><p class="text">${text}</p><img class="chatImg" src=${image}></div></div>`;
  }
  inputText.value = "";
  target.files = null; 
}

send.addEventListener('click', function() {
  let inputImg = "";
  if (target.files[0] != null) {
    inputImg = URL.createObjectURL(target.files[0]);
  }
  let date = new Date;
  let time = date.toDateString();
  time = time.slice(3, time.length - 5) + "," + time.slice(time.length - 5, time.length);
  let name = user.getUserName();
  publish(inputText.value, inputImg, time, name);
})

