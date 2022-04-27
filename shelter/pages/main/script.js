const BURGER_OPEN = document.querySelector('#open-burger');
const BURGER_CLOSE = document.querySelector('#close-burger');
const HEADER_MENU = document.querySelector('#header__menu');
const HEADER_LOGO = document.querySelector('#header__logo');
const BODY        = document.querySelector('body');
const shadow      = document.querySelector('#shadow');
const menuList    = document.querySelector('#menu__list');
const popup       = document.querySelector('#popup');
const sliderItem  = document.getElementsByClassName('slider__item');
const popupImage  = document.querySelector('#popup__image');
const popupTitle  = document.querySelector('#popup__title');
const popupSubtitle = document.querySelector('#popup__subtitle');
const popupText   = document.querySelector('#popup__text');
const popupAge    = document.querySelector('#age');
const popupInoculations   = document.querySelector('#inoculations');
const popupDiseases    = document.querySelector('#diseases');
const popupParasites    = document.querySelector('#parasites');
const overlay     = document.querySelector('#overlay');
const popupShut = document.querySelector('.popup__close');
const leftArrow = document.querySelector('#left__arrow');
const rightArrow = document.querySelector('#right__arrow');

let windowSize = window.innerWidth;
let width;
if (windowSize >= 1280) {
  width = 990;
};
if (windowSize >= 768 && windowSize < 1280) {
  width = 580;
};
if (windowSize >= 320 && windowSize < 768) {
  width = 680;
};

const pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
];


function menuClose() {
    BURGER_OPEN.classList.remove('active-burger');
    HEADER_MENU.classList.remove('active');
    shadow.classList.remove('menu__shadow--active');
    BODY.classList.remove('noscroll');
    HEADER_LOGO.classList.remove('visible');
};

function menuOpen() {
    HEADER_MENU.classList.add('active');
    HEADER_MENU.classList.add('scroll');
    HEADER_LOGO.classList.add('visible');
    BURGER_OPEN.classList.add('active-burger');
    BURGER_CLOSE.classList.remove('inactive-burger');
    BODY.classList.add('noscroll');
    shadow.classList.add('menu__shadow--active');
};

function popupOpen(i) {
    popupImage.src = pets[i].img;
    popupTitle.innerHTML = pets[i].name;
    popupSubtitle.innerHTML = pets[i].type + ' - ' + pets[i].breed;
    popupText.innerHTML = pets[i].description;
    popupAge.innerHTML = `<span>Age: </span> ${pets[i].age}`;
    popupInoculations.innerHTML = `<span>Inoculations: </span> ${pets[i].inoculations}`;
    popupDiseases.innerHTML = `<span>Diseases: </span> ${pets[i].diseases}`;
    popupParasites.innerHTML = `<span>Parasites: </span> ${pets[i].parasites}`;
    popup.classList.add('popup--active');
    BODY.classList.add('noscroll');
    popup.classList.add('scroll');
}

function popupClose() {
    popup.classList.remove('popup--active');
    BODY.classList.remove('noscroll');
}

BURGER_CLOSE.addEventListener('click', () => {
    menuClose();
});

BURGER_OPEN.addEventListener('click', () => {
    menuOpen();
});

shadow.addEventListener('click', () => {
    menuClose()
});

menuList.addEventListener('click', () => {
    menuClose();
});

function mixarr(arr){
  return arr.map(i => [Math.random(), i]).sort().map(i => i[1]);
};

function renderItems(x, y, z) {
  let html = "";
  let arr = mixarr(pets);
  arr = arr.filter(item => item.name != x && item.name != y && item.name != z);
  
  for (let i = 0; i < 3; i++) {
    html += `<div class="slider__item" id="${arr[i].name}">`;
    html += `<img class="item__image" src=${arr[i].img} alt="${arr[i].name}">`;
    html += `<p class="item__name">${arr[i].name}</p>`;
    html += `<a class="item__button" href="#!">Learn more</a>`;
    html += `</div>`; 
  }
  
  return html; 
};

function renderSideItems() {
  let div = document.createElement('div');
  let divLeft = document.createElement('div');
  let divRight = document.createElement('div');
  div.classList.add('slider__item-box');
  divLeft.classList.add('slider__item-box-left');
  divRight.classList.add('slider__item-box-right');

  let arr = mixarr(pets);
  let html = '';
  let htmlLeft = '';
  let htmlRight = '';
  
  for (let i= 0; i < 3; i++) {
    html += `<div class="slider__item" id="${arr[i].name}">`;
    html += `<img class="item__image" src=${arr[i].img} alt="${arr[i].name}">`;
    html += `<p class="item__name">${arr[i].name}</p>`;
    html += `<a class="item__button" href="#!">Learn more</a>`;
    html += `</div>`; 
  }
  arr = arr.slice(3);
  arr = mixarr(arr);
  for (let i= 0; i < 3; i++) {
    htmlLeft += `<div class="slider__item" id="${arr[i].name}">`;
    htmlLeft += `<img class="item__image" src=${arr[i].img} alt="${arr[i].name}">`;
    htmlLeft += `<p class="item__name">${arr[i].name}</p>`;
    htmlLeft += `<a class="item__button" href="#!">Learn more</a>`;
    htmlLeft += `</div>`; 
  }
  for (let i= 0; i < 3; i++) {
    htmlRight += `<div class="slider__item" id="${arr[i].name}">`;
    htmlRight += `<img class="item__image" src=${arr[i].img} alt="${arr[i].name}">`;
    htmlRight += `<p class="item__name">${arr[i].name}</p>`;
    htmlRight += `<a class="item__button" href="#!">Learn more</a>`;
    htmlRight += `</div>`; 
  }

  div.innerHTML = html;
  divLeft.innerHTML = htmlLeft;
  divRight.innerHTML = htmlRight;
  
  document.querySelector('#slider__item-wrapper').appendChild(divLeft);
  document.querySelector('#slider__item-wrapper').appendChild(div);
  document.querySelector('#slider__item-wrapper').appendChild(divRight);
}

renderSideItems()
function addPopupListener() {
  for (let i = 0; i < sliderItem.length; i++) {
    sliderItem[i].addEventListener('click', (event) => {
        let petList = {
            'Jennifer': 1,
            'Sophia': 2,
            'Woody': 3,
            'Scarlett': 4, 
            'Katrine': 5, 
            'Timmy': 6, 
            'Freddie': 7,
            'Charly': 8
        };
        let name = '';
        if (event.target.alt) name = event.target.alt;
        else name = event.target.parentElement.id;
        popupOpen(petList[name]-1);
    });
  };
};

addPopupListener();

overlay.addEventListener('click', () => {
  popupClose();
});

popupShut.addEventListener('click', () => {
  popupClose();
});

const carousel = document.querySelector('.slider__item-wrapper');

function moveLeft() {
  carousel.classList.add('transition-left');
  // leftArrow.removeEventListener('click');
};

function moveRight() {
  carousel.classList.add('transition-right');
  // rightArrow.removeEventListener('click');
};

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);
  
carousel.addEventListener('animationend', (animation) => {
  let a, b, c;
  let regex = new RegExp('id=["][A-Za-z]+', 'g');
  
  if (animation.animationName == 'move-left') {
    carousel.classList.remove('transition-left');  
    let rightCards = document.querySelector('.slider__item-box-right').innerHTML;
    document.querySelector('.slider__item-box').innerHTML = rightCards;
    let names = rightCards.match(regex);
    names = names.map(item => item.slice(4))
    a = String(names[0]);
    b = String(names[1]);
    c = String(names[2]);
    document.querySelector('.slider__item-box-right').innerHTML = '';
    document.querySelector('.slider__item-box-left').innerHTML = '';
    document.querySelector('.slider__item-box-right').innerHTML = renderItems(a, b, c);
    document.querySelector('.slider__item-box-left').innerHTML = renderItems(a, b, c);
    addPopupListener();  
  } else {
    carousel.classList.remove('transition-right');
    let leftCards = document.querySelector('.slider__item-box-left').innerHTML;
    document.querySelector('.slider__item-box').innerHTML = leftCards;
    let names = leftCards.match(regex);
    names = names.map(item => item.slice(4))
    a = String(names[0]);
    b = String(names[1]);
    c = String(names[2]);
    document.querySelector('.slider__item-box-left').innerHTML = '';
    document.querySelector('.slider__item-box-right').innerHTML = '';
    document.querySelector('.slider__item-box-left').innerHTML = renderItems(a, b, c);
    document.querySelector('.slider__item-box-right').innerHTML = renderItems(a, b, c);
    addPopupListener();
  }
  
  leftArrow.addEventListener('click', moveLeft);
  rightArrow.addEventListener('click', moveRight);
});

document.querySelector('#overlay').addEventListener('mouseover', () => {
  document.querySelector('.popup__close').classList.add('popup__close-hover');
});