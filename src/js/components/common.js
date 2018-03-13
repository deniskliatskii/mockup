$(function () {

    /*  TABS  */

    $(function () {
        
        var tabBtn = $('.main-tabs .tabs-btn .tabs-title');
        // var tabContent = $('.main-tabs .tabs-content');
        $('.main-tabs .tabs-content-wrap > div:not(:first)').hide();
        
        $(tabBtn).click(function (event) {
            var tabIndex

            var tabIndex = $(this).index();

            $(this).addClass('active-tab').siblings().removeClass('active-tab').parent().parent().children().filter('.tabs-content').hide().eq(tabIndex).show();
            var par = $(this).parent().parent().find('.tabs-content-wrap').children().hide().eq(tabIndex).show();


            // $(tabBtn).removeClass('active-tab');
            // $(this).addClass('active-tab');
            // $(tabContent).hide().eq(tabIndex).show();
        });

    })



    /*  SIDEBAR TABS  */

    $(function () {

        var tabBtn = $('.sidebar-tabs .tabs-btn .tabs-title');
        
        $('.sidebar-tabs .tabs-content-wrap > div:not(:first)').hide();
        
        $(tabBtn).click(function (event) {
            var tabIndex

            var tabIndex = $(this).index();

            $(this).addClass('active-tab').siblings().removeClass('active-tab').parent().parent().children().filter('.tabs-content').hide().eq(tabIndex).show();
            var par = $(this).parent().parent().find('.tabs-content-wrap').children().hide().eq(tabIndex).show();

        });

    })


    

    /* MAIN ACCORDION  */

    $(function () {

        var accordionButon = $('.main-accordion .accordion-head ');

        $(accordionButon).last().addClass('accordion-head-active');
        $('.main-accordion .accordion-content:not(:last) ').hide();

        $(accordionButon).click(function () {
            $(this).next('div').slideToggle().siblings('div .accordion-content:visible').slideUp().end().end().toggleClass('accordion-head-active').siblings().removeClass('accordion-head-active');

        });


    })



    /*  SIDEBAR ACCORDION  */

   $(function () {
       

       var accordionButon = $('.sidebar-accordion .accordion-head ');

       $(accordionButon).last().addClass('accordion-head-active');
       $('.sidebar-accordion .accordion-content:not(:last) ').hide();

       $(accordionButon).click(function () {
           $(this).next('div').slideToggle().siblings('div .accordion-content:visible').slideUp().end().end().toggleClass('accordion-head-active').siblings().removeClass('accordion-head-active');

       });

   })



    /*  GALLERY  */

    var left = $('.nav-shifter .left-arrow');
    var right = $('.nav-shifter .right-arrow');
    var slideImg = $('.shifter-wrap .shifter-img');
    var activSlid = ('.shifter-img.active-slide');
    var line = ('.pagination .line')

    slideImg.first().addClass('active-slide');

    // Функция для получение индекса активного элемента
    function getIndex(elem) {
        return $(elem).index();
    }

    // Функция для изменеия класа следующему эллементу
    function additionClass(elemSlid, indexElem, classActiv) {
        $(elemSlid).eq(indexElem).addClass(classActiv).siblings().removeClass(classActiv);
    }

 // Клик по кнопке 

    $(right).click(function () {
        
        var indexActive = getIndex(activSlid);
        // console.log(indexActive);

            if (indexActive == $(slideImg).length - 1 ) {
                indexActive = -1;
            }

        additionClass(slideImg, indexActive + 1, 'active-slide');
        additionClass(line, indexActive + 1, 'active-line');

       

        
    });


 // Клик по кнопке 

    $(left).click(function () {
        
        var indexActive = getIndex(activSlid);
        
        if (indexActive == 0) {
            indexActive = $(slideImg).length;
        }
        additionClass(slideImg, indexActive - 1, 'active-slide');
        additionClass(line, indexActive - 1, 'active-line');
        
    });


    /*  BLOG GALLERY  */

  $(function () {

      var left = $('.nav-shifter__blog .left-arrow');
      var right = $('.nav-shifter__blog .right-arrow');
      var slideImg = $('.blog-shifter__wrap .blog-shifter-img');
      var activSlid = ('.blog-shifter-img.active-slide');
      var line = ('.blog-pagination .line')

      slideImg.first().addClass('active-slide');

      //Функция для получение индекса активного элемента
      function getIndex(elem) {
          return $(elem).index();
      }

      // Функция для изменеия класа следующему эллементу
      function additionClass(elemSlid, indexElem, classActiv) {
          $(elemSlid).eq(indexElem).addClass(classActiv).siblings().removeClass(classActiv);
      }

      // Клик по кнопке 

      $(right).click(function () {

          var indexActive = getIndex(activSlid);
          // console.log(indexActive);

          if (indexActive == $(slideImg).length - 1) {
              indexActive = -1;
          }

          additionClass(slideImg, indexActive + 1, 'active-slide');
          additionClass(line, indexActive + 1, 'active-line');




      });


      // Клик по кнопке 

      $(left).click(function () {

          var indexActive = getIndex(activSlid);

          if (indexActive == 0) {
              indexActive = $(slideImg).length;
          }
          additionClass(slideImg, indexActive - 1, 'active-slide');
          additionClass(line, indexActive - 1, 'active-line');

      });

  });


    /*  SIDEBAR GALLERY  */

    $(function () {
        
        var left = $('.nav-shifter__sidebar .left-arrow__min');
        var right = $('.nav-shifter__sidebar .right-arrow__min');
        var slideImg = $('.shifter-sidebar__wrap .shifter-sidebar__img');
        var activSlid = ('.shifter-sidebar__img.active-slide');
        var line = ('.min-pagination .min-line')

        slideImg.first().addClass('active-slide');

        // Функция для получение индекса активного элемента
        function getIndex(elem) {
            return $(elem).index();
        }

        // Функция для изменеия класа следующему эллементу
        function additionClass(elemSlid, indexElem, classActiv) {
            $(elemSlid).eq(indexElem).addClass(classActiv).siblings().removeClass(classActiv);
        }

        // Клик по кнопке 

        $(right).click(function () {

            var indexActive = getIndex(activSlid);
            // console.log(indexActive);

            if (indexActive == $(slideImg).length - 1) {
                indexActive = -1;
            }

            additionClass(slideImg, indexActive + 1, 'active-slide');
            additionClass(line, indexActive + 1, 'active-line');




        });


        // Клик по кнопке 

        $(left).click(function () {

            var indexActive = getIndex(activSlid);

            if (indexActive == 0) {
                indexActive = $(slideImg).length;
            }
            additionClass(slideImg, indexActive - 1, 'active-slide');
            additionClass(line, indexActive - 1, 'active-line');

        });

    });

    

    /*   SEARCH   */

    $('.search-btn').click(function () {
        $(this).toggleClass('search-btn__active').next('.search-form').fadeToggle();
        
    });

    /*   GALLERY  */

    var overlay = $('.overlay-m');
    var modalWindow = $('.modal-window');

    // Функция открывает модальное окно оверлей и устанавливает атрибут картинке
    function addAtrGalery(atribute) {
        $(modalWindow).show('slow').next().show().end().children().attr({ src: atribute });
    }
    

    
    $('.gallery-item a').click(function (event) {
        event.preventDefault();
        var hrefImages;
        hrefImages = $(this).attr('href');
        addAtrGalery(hrefImages);

        
        $(overlay).click(function () {
            $(this).hide().prev().hide('slow');
        })
       
        
    })


    /*   PORTFOLIO   */

    $('.portfolio-nav span').click(function () {

        srcImages = $(this).parent().prev().attr('src');
                
        addAtrGalery(srcImages);


        $(overlay).click(function () {
            $(this).hide().prev().hide('slow');
        })
    })



    $('.menu-btn').click(function () {
        $('.nav-header').show('slow');
        $('.menu-overlay').show('slow').click(function () {
            $(this).hide('slow');
            $('.nav-header').hide('slow');
        });
    })
});
