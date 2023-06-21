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
  $('.warning_close').click(function () {
    $('.warning_popup').removeClass('_active');
  });

  const type = () => {
    const text = $('#typed').text();
    $('#typed').text('');
    let count = 0;
    let maxspeed = 50;

    function character(start, end, text) {
      return text.substring(start, end);
    }

    function typeLetter() {
      let random = Math.floor(Math.random() * maxspeed);
      if (count === text.length) {
        return;
      }
      setTimeout(typeLetter, random);
      if (count < 42) {
        $('#typed').html(
          $('#typed').html() + '<span>' + character(count, count + 1, text) + '</span>'
        );
      } else {
        $('#typed').html($('#typed').html() + character(count, count + 1, text));
      }
      count++;
    }

    typeLetter();
  };
  type();
});
