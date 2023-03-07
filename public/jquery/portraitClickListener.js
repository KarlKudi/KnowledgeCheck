for(i=0; i<$(".characterPortraits img").length; i++){
    let id = $(".characterPortraits img")[i].id;
    $("#" + id).on("click", function(){
        $(this).toggleClass("clickedPortrait");
        setTimeout(() =>{
            $(this).toggleClass("clickedPortrait");
        }, 200);
    })
}

//For loop to add click listener to each portrait