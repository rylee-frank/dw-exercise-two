var $jone = $("#j1");
var $rone = $("#r1");
var $jtwo = $("#j2");
var $rtwo = $("#r2");
var $jthree = $("#j3");
var $rthree = $("#r3");
$jone.on("click", function(){
    $rone.show();
    $("main").css("background-color", "#D6EEFF");
});
$rone.on("click", function(){
    $jone.hide();
    $(this).hide();
    $("main").css("background-color", "white");
    $jtwo.show();
    $("main").addClass("scarecrow");
});
$jtwo.on("click", function(){
    $rtwo.show();
    $("main").removeClass("scarecrow");
    $("main").addClass("scarecrow-medal");
});
$rtwo.on("click", function(){
    $jtwo.hide();
    $(this).hide();
    $("main").removeClass("scarecrow-medal");
    $("main").css("background-color", "#dec8c8");
    $jthree.show();
    $("main").addClass("grapes");
});
$jthree.on("click", function(){
    $rthree.show();
    $("main").removeClass("grapes");
    $("main").addClass("grapes-wine");
});
$rthree.on("click", function(){
    $jthree.hide();
    $(this).hide();
    $("main").removeClass("grapes-wine");
    $("main").css("background-color", "#ffff82");
    $jone.show();
});