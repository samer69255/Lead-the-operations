


$(".attk").on('click',function () {
  brq_show();
});

$(".rpg").on('click',function () {
  rpg_show();
});

$(".sw").on('click',function () {
  swt_show();
});

$(".rpg_b").click(rpg_click);
$(".brq_b").click(brq_click);
$(".sw_b").click(sw_click);

$('.Numeric').bind('keydown',function(e){
    if ((e.key !== "Backspace") && (/\D/).test(e.key))
        {

          return false; }
    return true;
})
