

 // Cache selectors
 var lastId,
 topMenu = $("#mainNav"),
 topMenuHeight = topMenu.outerHeight() + 1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function () {
     var item = $($(this).attr("href"));
     if (item.length) {
         return item;
     }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
 var href = $(this).attr("href"),
     offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
 $('html, body').stop().animate({
     scrollTop: offsetTop
 }, 850);
 e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
 // Get container scroll position
 var fromTop = $(this).scrollTop() + topMenuHeight;

 // Get id of current scroll item
 var cur = scrollItems.map(function () {
     if ($(this).offset().top < fromTop)
         return this;
 });
 // Get the id of the current element
 cur = cur[cur.length - 1];
 var id = cur && cur.length ? cur[0].id : "";

 if (lastId !== id) {
     lastId = id;
     // Set/remove active class
     menuItems
         .parent().removeClass("active")
         .end().filter("[href='#" + id + "']").parent().addClass("active");
 }
});



jQuery(document).ready(function() {
    // back to top button
    if ($(window).scrollTop() >= 400) {
        $("#scrollTop").css("display", "block");
    } else {
        $("#scrollTop").css("display", "none");
    }

    // add and remove sticky class to header 
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".Topnav").addClass("sticky");
        $('body').addClass("sticky");
    } else {
        $(".Topnav").removeClass("sticky");
        $('body').removeClass("sticky");
    }

    // header footer padding assigned to body
    $(window).resize(function () {
        $(document.body).css("padding-top", $(".Topnav").height());
        $(document.body).css("padding-bottom", $(".footer").height());
    }).resize();

});

