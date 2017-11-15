$(document).ready(function(){






let click = false

let expand = $(".tweet-compose")
expand.on("click", function(){
    if (!click) {
    expand.height(expand.height()*2)
    click = true;
        $("button").removeClass("button-hidden");
        $("button").addClass("button");
        $("count").removeClass("char-count-hidden");
        $("count").addClass("char-count");
    }

})






// $('#button').prop('disabled', true)

// $("#tweet-compose").keyup(function(){
//     $("#text").text($("tweet-compose").val())
//     $("#button").prop("disabled", false)
// })


})