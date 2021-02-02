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
$("#r2").on("click", function(){
    $("#j2").hide();
    $(this).hide();
    $("main").removeClass("scarecrow-medal");
    $("#j3").show();
    $("main").addClass("grapes");
});
$("#j3").on("click", function(){
    $("#r3").show();
    $("main").removeClass("grapes");
    $("main").addClass("grapes-wine");
});
$("#r3").on("click", function(){
    $("#j3").hide();
    $(this).hide();
    $("main").removeClass("grapes-wine");
    $("#j1").show();
});