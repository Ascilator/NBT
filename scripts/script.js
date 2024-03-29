$(function () {
  // Intro animation

  // Slick slider
  $('.slider_container').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    prevArrow: $('.arrow_prev'),
    nextArrow: $('.arrow_next'),
    variableWidth: true
  });

  $('.slider_logo')
    .children('.slider_body')
    .slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 700,
      arrows: true,
      prevArrow: $('.logo_slider_prev'),
      nextArrow: $('.logo_slider_next'),
      dots: true,
      appendDots: $('.slider_dots'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });

  $('.slider_bg').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    appendDots: $('.slider_bg_dots')
  });

  $('.btn_container')
    .children('button')
    .click(function () {
      $(document.documentElement).animate(
        {
          scrollTop: $('.contact_us').offset().top
        },
        2000
      );
    });
  $('._contact_us').click(function () {
    $(document.documentElement).animate(
      {
        scrollTop: $('.contact_us').offset().top
      },
      2000
    );
  });

  $('.menu_item')
    .children('.item_title')
    .click(function () {
      $(this).toggleClass('_active');
      $(this).siblings().slideToggle();
    });

  $('.hide_btn').click(function () {
    $('.invisible_cont').slideToggle();
    $(this).toggleClass('_active');
  });

  $('.burger').click(function () {
    $('.nav').toggleClass('_active');
    $(this).toggleClass('_active');
  });

  $('.main_link').click(function () {
    $(this).siblings('.hidden').slideToggle();
  });

  $('.drop_down_title').click(function () {
    $(this).siblings('.drop_down_body').slideToggle();
  });

  $('.drop_down_item').click(function () {
    $(this).parent().siblings('.drop_down_title').children('span').text($(this).text());
    $(this).parent().slideUp();
  });

  $('.warning').click(function () {
    $('.warning_popup').addClass('_active');
  });
  $(document).click(function (e) {
    if (e.target.closest('.warning')) return;

    if (!e.target.closest('.warning_popup')) {
      $('.warning_popup').removeClass('_active');
    }
  });

  $(document).scroll(function () {
    $('.warning_popup').removeClass('_active');
  });

  $('.warning_close').click(function () {
    $('.warning_popup').removeClass('_active');
  });

  const type = () => {
    const text = $('#typed').text();
    $('#typed').text('');
    let count = 0;
    let maxspeed = 120;

    function character(start, end, text) {
      return text.substring(start, end);
    }

    function typeLetter() {
      let random = Math.floor(Math.random() * maxspeed);
      if (count === text.length) {
        $('.karetka').addClass('_active');
        return;
      }
      setTimeout(typeLetter, random);
      if (count === 0) {
        $('#typed').html(
          $('#typed').html() +
            '<span>' +
            character(count, count + 1, text) +
            '</span>' +
            '<span class="karetka">|</span>'
        );
      }
      if (character(count, count + 1, text) === "'") {
        $('#typed').html(
          $('#typed').html().slice(0, -30) + '<br />' + '<span class="karetka">|</span>'
        );
        count++;
        return;
      }

      if (count < 42) {
        $('#typed').html(
          $('#typed').html().slice(0, -30) +
            '<span>' +
            character(count, count + 1, text) +
            '</span>' +
            '<span class="karetka">|</span>'
        );
      } else {
        $('#typed').html(
          $('#typed').html().slice(0, -30) +
            character(count, count + 1, text) +
            '<span class="karetka">|</span>'
        );
      }
      count++;
    }

    typeLetter();
  };
  type();
});
