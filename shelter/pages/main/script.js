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
console.log(sliderItem);
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

overlay.addEventListener('click', () => {
    popupClose();
});

popupShut.addEventListener('click', () => {
  popupClose();
})
