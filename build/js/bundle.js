(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
  $(window).on('beforeunload', function () {
    $(window).scrollTop(0);
  });
  $('.header').animate({
    width: '100%'
  }, 'slow');

  $('.front-page').animate({
    height: 'toggle'
  }, 600);

  /*$('.intro-content').animate({
  	width: 'toggle'
  }, 'slow');*/
  $('.intro-content h1').animate({
    width: 'toggle'
  }, 900);
  $('.intro-content p').animate({
    width: 'toggle'

  }, 1300);

  $('.intro-content button').animate({
    width: 'toggle'
  }, 1400);

  $("cakes-imgs").css({ "left": "2000px" }).animate({
    "left": "0px"
  }, "slow");
  $('.cakes-imgs').on('mouseenter', 'img', function () {
    $(this).addClass('rotate');
  });

  $('.cakes-imgs').on('mouseleave', 'img', function () {
    $(this).removeClass('rotate');
  });

  $('.pancake').hide();
  $('.slide-pancake').click(function () {
    $('.pancake').animate({
      width: 'toggle'
    });
  });
  $('.slider-imgs').flickity({
    initialIndex: 1

  });
});

},{}]},{},[1]);
