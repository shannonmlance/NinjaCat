$("img").click(function() {
    var tempImage = $(this).attr("alt-src");
    $(this).attr("alt-src", $(this).attr("src"));
    $(this).attr("src", tempImage);
});