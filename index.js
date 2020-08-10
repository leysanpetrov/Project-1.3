let close = document.querySelector('.close');
let closeNone = document.querySelector('.close_display_none');
let seeAllNone = document.querySelector('.seeAll_display_none');
let hiddenBrand = document.querySelectorAll('.brands-logo_display_none');
let brandsLogo = document.querySelectorAll('.brands-logo');


let seeAll = document.querySelector('.seeAll');


seeAll.addEventListener('click', function () {
  console.log(hiddenBrand);
  for(let i = 0; i < hiddenBrand.length; i++) {
    hiddenBrand[i].classList.remove('brands-logo_display_none');
  }
  closeNone.classList.remove('close_display_none');
  seeAll.classList.add('seeAll_display_none');

})

close.addEventListener('click', function () {
  console.log(hiddenBrand);
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

