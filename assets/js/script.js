/*wowJs*/

	new WOW().init();


/*toTop*/

  const toTop = document.querySelector(".to-top");
  window.addEventListener("scroll",() => {

    if (window.pageYOffset > 100) {      
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
     }
    });

/*swiperJs*/

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets : true,
        
      },

      loop:true,
       autoplay: {
        delay:1400 ,
        disableOnInteraction: false,

      },
    });