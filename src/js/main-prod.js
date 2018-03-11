$(function () {

    /*  TABS  */

    var tabBtn = $('.main-tabs .tabs-btn .tabs-title');
    var tabContent = $('.main-tabs .tabs-content');
    $('.main-tabs .tabs-content-wrap > div:not(:first)').hide();

    $(tabBtn).click(function (event) {

        var tabIndex = $(this).index();

        $(tabBtn).removeClass('active-tab');
        $(this).addClass('active-tab');
        $(tabContent).hide().eq(tabIndex).show();
    });

    /*  ACCORDION  */

    $('.main-accordion .accordion-head:last ').addClass('accordion-head-active');
    $('.main-accordion .accordion-content:not(:last) ').hide();

    $('.main-accordion .accordion-head').click(function (event) {
        $(this).next('div .accordion-content').slideToggle().siblings('div .accordion-content:visible').slideUp();
        $(this).toggleClass('accordion-head-active');
        $(this).siblings('.main-accordion .accordion-head').removeClass('accordion-head-active');

    });


    /*  GALLERY  */

    var left = $('.nav-shifter .left-arrow');
    var right = $('.nav-shifter .right-arrow');
    var slideImg = $('.shifter-wrap .shifter-img');
    var activSlid = ('.shifter-img.active-slide');

    slideImg.first().addClass('active-slide');

    // Функция для получение индекса активного элемента
    function getIndex(elem) {
        return $(elem).index();
    }

    // Функция для изменеия класа следующему эллементу
    function additionClass(indexElem) {
        $(slideImg).eq(indexElem).addClass('active-slide').siblings().removeClass('active-slide');
    }

 // Клик по кнопке 

    $(right).click(function () {
        
        var indexActive = getIndex(activSlid);
        // console.log(indexActive);

            if (indexActive == $(slideImg).length - 1 ) {
                indexActive = -1;
            }

        additionClass(indexActive + 1);
        
    });


 // Клик по кнопке 

    $(left).click(function () {
        
        var indexActive = getIndex(activSlid);
        
        if (indexActive == 0) {
            indexActive = $(slideImg).length;
        }
        additionClass(indexActive - 1);
        
    });


    /*  BLOG GALLERY  */

  $(function () {

      var left = $('.nav-shifter__blog .left-arrow');
      var right = $('.nav-shifter__blog .right-arrow');
      var slideImg = $('.blog-shifter__wrap .blog-shifter-img');
      var activSlid = ('.blog-shifter-img.active-slide');

      slideImg.first().addClass('active-slide');

      //Функция для получение индекса активного элемента
      function getIndex(elem) {
          return $(elem).index();
      }

      //Функция для изменеия класа следующему эллементу
      function additionClass(indexElem) {
          $(slideImg).eq(indexElem).addClass('active-slide').siblings().removeClass('active-slide');
      }

      //Клик по кнопке 

      $(right).click(function () {

          var indexActive = getIndex(activSlid);

          if (indexActive == $(slideImg).length - 1) {
              indexActive = -1;
          }

          additionClass(indexActive + 1);

      });


      //Клик по кнопке 

      $(left).click(function () {

          var indexActive = getIndex(activSlid);

          if (indexActive == 0) {
              indexActive = $(slideImg).length;
          }
          additionClass(indexActive - 1);

      });

  });


    // $(left).click(function () {
    //     // console.log('helo');
    //     var activeSlide = $('.project-shifter .shifter-img.active-slide');
    //     var activeSlideIndex = $('.project-shifter .shifter-img.active-slide').index();
    //     var nextSlideIndex = activeSlideIndex + 1;
    //     var nextSlider = $('.shifter-img').eq(nextSlideIndex);

    //     activeSlide.hide();
    //     activeSlide.removeClass('active-slide');

    //     if (nextSlideIndex == $('.shifter-img:last').index()+1) {
    //         $('.shifter-img').eq(0).show();
    //         $('.shifter-img').addClass('active-slide');
    //     } else {
    //         nextSlider.show();
    //         nextSlider.addClass('active-slide');
    //     }
    // });

    // $(right).click(function () {
    //     // console.log('helo');
    //     var activeSlide = $('.project-shifter .shifter-img.active-slide');
    //     var activeSlideIndex = $('.project-shifter .shifter-img.active-slide').index();
    //     var prewSlideIndex = activeSlideIndex - 1;
    //     var prewSlider = $('.shifter-img').eq(prewSlideIndex);

    //     activeSlide.hide();
    //     activeSlide.removeClass('active-slide');
    //     prewSlider.show();
    //     prewSlider.addClass('active-slide');

    // });





    // $('.tabs-content-wrap > div:not(:first)').hide();

    // $(tabBtn).click(function (event) {

    //     var tabIndex = $(this).index();

    //     $(tabBtn).removeClass('active-tab');
    //     $(this).addClass('active-tab');
    //     $(tabContent).hide().eq(tabIndex).show();
    // });

    // /*  ACCORDION  */

    // $('.main-accordion .accordion-head:last ').addClass('accordion-head-active');
    // $('.main-accordion .accordion-content:not(:last) ').hide();

    // $('.main-accordion .accordion-head').click(function (event) {
    //     $(this).next('div .accordion-content').slideToggle().siblings('div .accordion-content:visible').slideUp();
    //     $(this).toggleClass('accordion-head-active');
    //     $(this).siblings('.main-accordion .accordion-head').removeClass('accordion-head-active');

    // });

});
// console.log(tabIndex);