// event pada saat link diklik
$('.page-scroll').on('click', function (e) {

  //ambil isi href
  var tujuan = $(this).attr('href');
  //tangkap element bersangkutan
  var elementTujuan = $(tujuan);
  // console.log(elementTujuan.offset().top);
  // $('body').scrollTop(elementTujuan.offset().top);

  $('body').animate({
    scrollTop: elementTujuan.offset().top - 50
  }, 1250, 'easeInOutExpo');
  e.preventDefault();

})
