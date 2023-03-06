console.log("Jquery.js is running");

$("#sol").on("click", function(){
    $(this).toggleClass("clickedPortrait");
    setTimeout(() => {
        $(this).toggleClass("clickedPortrait");
    }, 200);
});

$("#ky").on("click",function(){
    $(this).toggleClass("clickedPortrait");
    setTimeout(() =>{
        $(this).toggleClass("clickedPortrait");
    }, 200);
});

$("#may").on("click", function(){
    $(this).toggleClass("clickedPortrait");
    setTimeout(() =>{
        $(this).toggleClass("clickedPortrait");
    }, 200);
});

$("#axl").on("click",function(){
    $(this).toggleClass("clickedPortrait");
    setTimeout(() =>{
        $(this).toggleClass("clickedPortrait");
    }, 200);
})