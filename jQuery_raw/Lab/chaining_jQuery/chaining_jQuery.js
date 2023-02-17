$(document).ready(function(){
    $(".start").click(function(){
        $("ul")
        .animate({
            width: "50%"
        })
        .animate({
            fontSize: "15px"
        })
        .animate({
            borderWidth: "30"
        })
        .addClass("red");
    });

$(".filter").click(() => {
    if ($("input[value='odd']").is(":checked")) {
        $("ul li").removeClass("highlight");
        $("ul li")
        .filter(function (index){
            return index % 2 ==0;
        })
        .addClass("highlight");
    }

    if ($("input[value = 'even']").is(":checked")){
        $("ul li").removeClass("highlight");
        $("ul li")
        .filter(function (index){
            return index % 2 !=0;
        })
        .addClass("highlight");
    }
});

$(".reset").click(() => {
    $("ul").removeClass("red");
    $("ul").removeAttr("style");
    $("ul li").removeClass("highlight");
})

});