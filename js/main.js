$(function () {

$("#service figure").each(function(){
    var nombre  =   $(this).find("img").attr("title");
    console.log(nombre);
    $(this).find("figcaption").html("<div><h6>" +   nombre  +   "</h6></div>");       
    $(this).find("figcaption div").prepend("<i class='bi bi-zoom-in'></i>")
    var rutaImagen=$(this).find("img").attr("src");

 

    $(this).find("figcaption div i").click(function(){
        $("body").append("<div id='fondo-transparente'>");
        $("#fondo-transparente").append("<img src='" + rutaImagen + "'>")
        $("#fondo-transparente").click(function(){
            $(this).remove();
        })
    })

})

$("#service figure").click(function () {
    if ($(this).css("background-color", "#000000")) {
        $(this).css("color", '#FFFFFF');
    }
    else {
        $(this).css("color", "transparent");
    }
})

$("#afterbanner h3").click(function () {
    $("#afterbanner .col").css("background-color", "transparent");

})
})