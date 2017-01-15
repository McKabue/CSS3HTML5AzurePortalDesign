var i = 0;

$('#add').click(function () {
    $('.container').append('<div class="box"></div>');
    var ddd = $('.box:last-child');
   // $('.container').scrollLeft(ddd[0].offsetLeft);
});