import '../scss/style.scss';

console.log('Works!');

let close = document.querySelector('.close');
let closeNone = document.querySelector('.close_display_none');
let seeAllNone = document.querySelector('.seeAll_display_none');
let hiddenBrand = document.querySelectorAll('.brands-logo_display_none');
let brandsLogo = document.querySelectorAll('.brands-logo');


let seeAll = document.querySelector('.seeAll');


seeAll.addEventListener('click', function () {

  for(let i = 0; i < hiddenBrand.length; i++) {
    hiddenBrand[i].classList.remove('brands-logo_display_none');
  }
  closeNone.classList.remove('close_display_none');
  seeAll.classList.add('seeAll_display_none');

})

close.addEventListener('click', function () {
  if(window.innerWidth >= 1120) {
    for (let i = 8; i < brandsLogo.length; i++) {
      brandsLogo[i].classList.add('brands-logo_display_none');
    }
  }
  else {
    for (let i = 6; i < brandsLogo.length; i++) {
      brandsLogo[i].classList.add('brands-logo_display_none');
    }
  }
  close.classList.add('close_display_none');
  seeAll.classList.remove('seeAll_display_none');
})



var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

var mySwiper2 = new Swiper('.swiper-container-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-2',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})


var mySwiper3 = new Swiper('.swiper-container-3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-3',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})


let close2 = document.querySelector('.close2');
let closeNone2 = document.querySelector('.close2_display_none');
let seeAllNone2 = document.querySelector('.seeAll2_display_none');
let hiddenEquipment = document.querySelectorAll('.computer-equipment_display_none');
let computerEquipment = document.querySelectorAll('.computer-equipment');


let seeAll2 = document.querySelector('.seeAll2');


seeAll2.addEventListener('click', function () {
  for(let i = 0; i < hiddenEquipment.length; i++) {
    hiddenEquipment[i].classList.remove('computer-equipment_display_none');
  }
  closeNone2.classList.remove('close2_display_none');
  seeAll2.classList.add('seeAll2_display_none');
})

close2.addEventListener('click', function () {
  if(window.innerWidth >= 1120) {
    for (let i = 4; i < computerEquipment.length; i++) {
      computerEquipment[i].classList.add('computer-equipment_display_none');
    }
  }
  else {
    for (let i = 3; i < computerEquipment.length; i++) {
      computerEquipment[i].classList.add('computer-equipment_display_none');
    }
  }
  close2.classList.add('close2_display_none');
  seeAll2.classList.remove('seeAll2_display_none');
})
