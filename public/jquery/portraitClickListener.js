for(i=0; i<$(".characterPortraits .portraitContainer").length; i++){
    let id = $(".characterPortraits .portraitContainer")[i].id;
    $("#" + id).on("click", function(){
        $(this).toggleClass("clickedPortrait blackText");
        setTimeout(() =>{
            $(this).toggleClass("clickedPortrait blackText");
        }, 200);
    })
}

//For loop to add click listener to each portrait