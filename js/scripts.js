var $jone= ("#j1");
var $rone= ("#r1");
var $jtwo= ("#j2");
var $rtwo= ("#r2");
var $jthree= ("#j3");
var $rthree= ("#r3");

$("#j1").on("click", function(){
    $("#r1").show();
    $("main").css("background-color", "#D6EEFF");
});
$("#r1").on("click", function(){
    $("#j1").hide();
    $(this).hide();
    $("main").css("background-color", "white");
    $("#j2").show();
    $("main").addClass("scarecrow");
});
$("#j2").on("click", function(){
    $("#r2").show();
    $("main").removeClass("scarecrow");
    $("main").addClass("scarecrow-medal");
});