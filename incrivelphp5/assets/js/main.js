$(document).ready(function () {
    "use strict";
    new WOW({ boxClass: "wow", animateClass: "animated" }).init();
    var e = $("#hero_slider_carousel").find(".item").length;
    $("#hero_slider_carousel").owlCarousel({
        dots: e > 1,
        nav: !1,
        touchDrag: e > 1,
        mouseDrag: e > 1,
        loop: e > 1,
        autoplay: e > 1 && 3e3,
        autoplayHoverPause: e > 1,
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 768: { items: 1 }, 1000: { items: 1 } },
    });
    var s = $("#slider_list_carousel").find(".item").length;
    $("#slider_list_carousel").owlCarousel({
        margin: 15,
        responsiveClass: !0,
        responsive: {
            0: { items: 1, dots: s > 1, nav: s > 1, touchDrag: s > 1, mouseDrag: s > 1, loop: s > 1 },
            600: { items: 2, dots: s > 1, nav: s > 1, touchDrag: s > 1, mouseDrag: s > 1, loop: s > 1 },
            768: { items: 3, dots: s > 3, nav: s > 3, touchDrag: s > 3, mouseDrag: s > 3, loop: s > 3 },
            1025: { items: 4, dots: !1, nav: s > 4, touchDrag: s > 4, mouseDrag: s > 4, loop: s > 4 },
        },
    });
    var o = $("#custom_slider_carousel").find(".item").length;
    $("#custom_slider_carousel").owlCarousel({
        touchDrag: o > 1,
        mouseDrag: o > 1,
        loop: o > 1,
        autoplay: o > 1 && 3e3,
        autoplayHoverPause: o > 1,
        responsive: { 0: { items: 1, dots: o > 1, nav: !1 }, 600: { items: 1, dots: o > 1, nav: !1 }, 768: { items: 1, dots: !1, nav: o > 1 }, 1000: { items: 1, dots: !1, nav: o > 1 } },
    });
    var t = $(".custom_slider_carousel").find(".item").length;
    $(".custom_slider_carousel").owlCarousel({
        touchDrag: t > 1,
        mouseDrag: t > 1,
        loop: t > 1,
        autoplay: t > 1 && 3e3,
        autoplayHoverPause: t > 1,
        responsive: { 0: { items: 1, dots: t > 1, nav: !1 }, 600: { items: 1, dots: t > 1, nav: !1 }, 768: { items: 1, dots: !1, nav: t > 1 }, 1000: { items: 1, dots: !1, nav: t > 1 } },
    });
    var a = $("#paper-boat").find(".item").length;
    $("#paper-boat").owlCarousel({ dots: !1, nav: a > 1, touchDrag: a > 1, mouseDrag: a > 1, loop: a > 1, responsive: { 0: { items: 1 }, 600: { items: 1 }, 768: { items: 1 }, 1000: { items: 1 } } });
    var n = $("#atp_slider_carousel").find(".item").length;
    $("#atp_slider_carousel").owlCarousel({
        dots: !1,
        nav: n > 1,
        touchDrag: n > 1,
        mouseDrag: n > 1,
        loop: n > 1,
        autoplay: n > 1 && 3e3,
        autoplayHoverPause: n > 1,
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 768: { items: 1 }, 1000: { items: 1 } },
    });
    var i = $("#employeespeak_slider").find(".item").length;
    $("#employeespeak_slider").owlCarousel({
        dots: i > 1,
        nav: i > 1,
        touchDrag: i > 1,
        mouseDrag: i > 1,
        loop: i > 1,
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 768: { items: 1 }, 1000: { items: 1 } },
    }),
        $("body")
            .find('[data-target="#videoModal"]')
            .click(function () {
                var e = $(this).data("target"),
                    s = $(this).attr("data-theVideo"),
                    o = $(this).attr("data-title"),
                    t = s + "?rel=0&amp;showinfo=0&amp;autoplay=1";
                $(e + " iframe").attr("src", t),
                    $(".popup-description").html(o),
                    $(e + " iframe").attr("src", t),
                    $(e + " button.close").click(function () {
                        $(e + " iframe").attr("src", s), (o = $(this).attr("data-title", ""));
                    }),
                    $(".modal").click(function () {
                        $(e + " iframe").attr("src", s);
                    });
            }),
        $("#rfs").length <= 0
            ? ($("[href='#rfs']").attr("href", "/contact/Pages/request-for-services.aspx"), $("#like-what-you-see a").removeClass("scrollto-target"))
            : ($("#rfs iframe.iframe-height-about").length > 0 || $("#rfs iframe.iframe-height-investors").length > 0) &&
              ($("[href='#rfs']").attr("href", "/contact/Pages/request-for-services.aspx"), $("#like-what-you-see a").removeClass("scrollto-target")),
        $(".scrollto-target").click(function (e) {
            e.preventDefault(), $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 20 }, 700);
        }),
        $(".scrollto-target-pentagon").click(function (e) {
            e.preventDefault(), $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 70 }, 700);
        }),
        $(document).on("mouseenter", ".offering-hover", function () {
            $(".offering-hover").each(function () {
                $(this).children(".offerings-row").toggleClass("offerings-hover");
            }),
                $(this).children(".offerings-row").removeClass("offerings-hover");
        }),
        $(document).on("mouseleave", ".offering-hover", function () {
            $(".offering-hover").each(function () {
                $(this).children(".offerings-row").toggleClass("offerings-hover");
            }),
                $(this).children(".offerings-row").removeClass("offerings-hover");
        }),
        $(document).on("click", ".close-nav", function () {
            $(".cookie-outer").hide();
        });
    var l = window.location.pathname.toLowerCase(),
        r = "others";
    ("/" !== l && "/pages/index.aspx" !== l) || (r = "home");
    var d = window.location.search.substring(1);
    ("/newsroom/events/pages/index.aspx" !== l && "/newsroom/events/" !== l && "/newsroom/events" !== l) || ("" !== d && ($("#pevent").addClass("active"), $("#uevent").removeClass("active"))),
        ("/investors/news-events/events/pages/index.aspx" !== l && "/investors/news-events/events/" !== l && "/investors/news-events/events" !== l) ||
            ($(".title-box-yellow").hide(), $("<style>").prop("type", "text/css").html(" .title-box-yellow {display:none !important;}").appendTo("head")),
        ("/newsroom/press-releases/pages/index.aspx" !== l && "/newsroom/press-releases/" !== l && "/newsroom/press-releases" !== l) || $(".sticky-icons li.hidden-sm").hide();
    var c = 0 !== $(this).scrollTop();
    if (
        ($(window).bind("scroll", function () {
            "home" !== r &&
                ($(window).scrollTop() > c
                    ? ($(".hero-list").addClass("hero-list1"),
                      $(".listmenu").css("z-index", "9999"),
                      $(".scrollbg-show").addClass("show-strip"),
                      $("#logo").attr("fill", "#007cc3"),
                      $("#logo1").attr("fill", "#6d6e70"),
                      $("#logo2").attr("fill", "#6d6e70"),
                      $("#logo3").attr("fill", "#6d6e70"),
                      $("#portland-logo").attr("fill", "#007cc3"),
                      $("#portland-logo1").attr("fill", "#6d6e70"),
                      $("#portland-logo2").attr("fill", "#6d6e70"),
                      $("#portland-logo3").attr("fill", "#6d6e70"),
                      $("#portland-logo4").attr("fill", "#6d6e70"),
                      $("#portland-logo5").attr("fill", "#6d6e70"),
                      $("#portland-logo6").attr("fill", "#6d6e70"),
                      $("#portland-logo7").attr("fill", "#6d6e70"),
                      $("#portland-logo8").attr("fill", "#6d6e70"),
                      $("#portland-logo9").attr("fill", "#007cc3"),
                      $("#portland-logo10").attr("fill", "#007cc3"),
                      $("#mccamish-logo").attr("fill", "#007cc3"),
                      $("#mccamish-logo1").attr("fill", "#6d6e70"),
                      $("#mccamish-logo2").attr("fill", "#6d6e70"),
                      $("#mccamish-logo3").attr("fill", "#6d6e70"),
                      $("#mccamish-logo4").attr("fill", "#6d6e70"),
                      $("#mccamish-logo5").attr("fill", "#6d6e70"),
                      $("#mccamish-logo6").attr("fill", "#6d6e70"),
                      $("#mccamish-logo7").attr("fill", "#6d6e70"),
                      $("#mccamish-logo8").attr("fill", "#6d6e70"),
                      $("#mccamish-logo9").attr("fill", "#007cc3"),
                      $("#mccamish-logo10").attr("fill", "#007cc3"),
                      $(".menu-bg").addClass("reverseMenu"),
                      $(".burger > .icon-bar1").addClass("icon-bar11"),
                      $(".burger > .icon-bar2").addClass("icon-bar21"),
                      $(".burger > .icon-bar3").addClass("icon-bar31"),
                      $(".hidden-list").addClass("visible-list"),
                      // $(".menu-bg, .burger").css("margin-top","12px"),
                      $(".hamburger-menu > .search__color").find(".search-icon").css("top", "40px"),
                      $(".hamburger-menu > .search__color").find(".btn1").css("color", "#000"))
                    : ((c = 0 !== $(this).scrollTop()),
                      $(".hero-list").removeClass("hero-list1"),
                      $(".listmenu").css("z-index", "2"),
                      $(".scrollbg-show").removeClass("show-strip"),
                      $("#logo").attr("fill", "#fff"),
                      $("#logo1").attr("fill", "#fff"),
                      $("#logo2").attr("fill", "#fff"),
                      $("#logo3").attr("fill", "#fff"),
                      $("#portland-logo").attr("fill", "#fff"),
                      $("#portland-logo1").attr("fill", "#fff"),
                      $("#portland-logo2").attr("fill", "#fff"),
                      $("#portland-logo3").attr("fill", "#fff"),
                      $("#portland-logo4").attr("fill", "#fff"),
                      $("#portland-logo5").attr("fill", "#fff"),
                      $("#portland-logo6").attr("fill", "#fff"),
                      $("#portland-logo7").attr("fill", "#fff"),
                      $("#portland-logo8").attr("fill", "#fff"),
                      $("#portland-logo9").attr("fill", "#fff"),
                      $("#portland-logo10").attr("fill", "#fff"),
                      $("#mccamish-logo").attr("fill", "#fff"),
                      $("#mccamish-logo1").attr("fill", "#fff"),
                      $("#mccamish-logo2").attr("fill", "#fff"),
                      $("#mccamish-logo3").attr("fill", "#fff"),
                      $("#mccamish-logo4").attr("fill", "#fff"),
                      $("#mccamish-logo5").attr("fill", "#fff"),
                      $("#mccamish-logo6").attr("fill", "#fff"),
                      $("#mccamish-logo7").attr("fill", "#fff"),
                      $("#mccamish-logo8").attr("fill", "#fff"),
                      $("#mccamish-logo9").attr("fill", "#fff"),
                      $("#mccamish-logo10").attr("fill", "#fff"),
                      $(".menu-bg").removeClass("reverseMenu"),
                      $(".burger > .icon-bar1").removeClass("icon-bar11"),
                      $(".burger > .icon-bar2").removeClass("icon-bar21"),
                      $(".burger > .icon-bar3").removeClass("icon-bar31"),
                      $(".hidden-list").removeClass("visible-list"),
                      // $(".menu-bg, .burger").css("margin-top","45px"),
                      $(".hamburger-menu > .search__color").find(".search-icon").css("top", "47px"),
                      $(".hamburger-menu > .search__color").find(".btn1").css("color", "#fff")));
        }),
        $(".nav-tabs").length &&
            $(".nav-tabs")
                .scrollingTabs({ enableSwiping: !0, scrollToTabEdge: !0, disableScrollArrowsOnFullyScrolled: !0 })
                .on("ready.scrtabs", function () {
                    $(".tab-content").show();
                }),
        $(window).scroll(function () {
            if ((0 !== $(this).scrollTop() ? ($(".scroll-up").fadeIn(700), $(".header-menu").fadeOut(700)) : ($(".scroll-up").fadeOut(700), $(".header-menu").fadeIn(700)), "home" !== r)) {
                var e,
                    s = $(document).height(),
                    o = $(window).height();
                (e = (100 * $(window).scrollTop()) / (s - o)),
                    $(".progressbar")
                        .find("> div")
                        .width(e + "%");
            }
        }),
        $(".scroll-up").click(function () {
            $("body,html").animate({ scrollTop: 0 }, 700);
        }),
        $(document).on("click", ".burger", function () {
            $(this).hasClass("open")
                ? ($("html, body").removeClass("hidden-scroll"),
                  $(".listmenu").css("z-index", "9999"),
                  $(".progressbar,.hero-list1").css("display", "block"),
                  $("ul.social-share >li.social-share-icon").addClass("slideout"),
                  $(".search-icon").css("z-index", "1"),
                  $(".fix-menu").removeClass("opacity-zero"),
                  $(".circle").removeClass("bg-trans"),
                  $(".burger").removeClass("open"),
                  $(".icon-bar1").removeClass("rotate45").addClass("rotate30"),
                  $(".icon-bar3").removeClass("rotate135").addClass("rotate150"),
                  $(".circle").removeClass("expand"),
                  $(".menu").fadeOut(),
                  setTimeout(function () {
                      $(".icon-bar1").removeClass("rotate30"), $(".icon-bar3").removeClass("rotate150");
                  }, 50),
                  setTimeout(function () {
                      $(".icon-bar2").show(), $(".icon-bar1, .icon-bar2, .icon-bar3").removeClass("collapse");
                  }, 70))
                : ($("html, body").addClass("hidden-scroll"),
                  $(".listmenu").css("z-index", "9"),
                  $(".progressbar,.hero-list1").css("display", "none"),
                  $("li.slideout").removeClass("slideout"),
                  $(".search-icon").css("z-index", "0"),
                  $(".circle").addClass("expand"),
                  $(".burger").addClass("open"),
                  $(".icon-bar1, .icon-bar2, .icon-bar3").addClass("collapse"),
                  $(".menu").fadeIn(),
                  setTimeout(function () {
                      $(".icon-bar2").hide(), $(".icon-bar1").addClass("rotate30"), $(".icon-bar3").addClass("rotate150");
                  }, 70),
                  setTimeout(function () {
                      $(".icon-bar1").addClass("rotate45"), $(".icon-bar3").addClass("rotate135");
                  }, 120));
        }),
        $(document).on("click", ".menu ul li a", function () {}),
        $(document).on("click", ".trigger-share", function () {
            $("ul.social-share > li").toggleClass("slideout social-share-icon");
        }),
        $(document).on("click", ".trigger-share-pr", function () {
            $(this).closest(".social-tag").find(".social-share-pr > li").toggleClass("slideout social-share-icon");
        }),
        $(document).on("mouseover", ".burger", function () {
            $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".expertise-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
        }),
        $(document).on("mouseover", ".hover-menu-hide", function () {
            $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".expertise-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                $(".fix-menu").addClass("opacity-zero"),
                $(".circle").addClass("bg-trans");
        }),
        $(document).on("mouseleave", ".hover-menu-hide", function () {
            $(".fix-menu").removeClass("opacity-zero"), $(".circle").removeClass("bg-trans");
        }),
        $(window).width() < 1025
            ? ($(document).on("click", ".visible1024-cross", function () {
                  $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".expertise-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
              }),
              $(document).on("click", ".industries", function () {
                  $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".industries-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css("display", "block"),
                      $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".expertise-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
              }),
              $(document).on("click", ".services", function () {
                  $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".services-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css("display", "block"),
                      $(".expertise-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
              }),
              $(document).on("click", ".platforms", function () {
                  $(".platforms-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css("display", "block"),
                      $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".expertise-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
              }),
              $(document).on("click", ".about-txt", function () {
                  $(".aboutus-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css("display", "block"),
                      $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
              }))
            : ($(document).on("mouseover", ".industries", function () {
                  $(".industries-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css("display", "block"),
                      $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".expertise-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
              }),
              $(document).on("mouseleave", ".industries", function () {
                  $(".fix-menu").removeClass("opacity-zero"), $(".circle").removeClass("bg-trans");
              }),
              $(document).on("mouseover", ".services", function () {
                  $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".services-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css("display", "block"),
                      $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".aboutus-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css("display", "none"),
                      $(".expertise-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
              }),
              $(document).on("mouseleave", ".services", function () {
                  $(".fix-menu").removeClass("opacity-zero"), $(".circle").removeClass("bg-trans");
              }),
              $(document).on("mouseover", ".platforms", function () {
                  $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".aboutus-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".platforms-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css("display", "block"),
                      $(".expertise-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none");
              }),
              $(document).on("mouseleave", ".platforms", function () {
                  $(".fix-menu").removeClass("opacity-zero"), $(".circle").removeClass("bg-trans");
              }),
              $(document).on("mouseover", ".about-txt", function () {
                  $(".industries-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".services-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".platforms-menu").addClass("fadeOutRightBig").removeClass("fadeInLeftBig").css("display", "none"),
                      $(".aboutus-menu").addClass("fadeInLeftBig").removeClass("fadeOutRightBig").css("display", "block");
              }),
              $(document).on("mouseleave", ".about-txt", function () {
                  $(".fix-menu").removeClass("opacity-zero"), $(".circle").removeClass("bg-trans");
              })),
        $(document).on("mouseenter", ".dropdown", function () {
            $(".dropdown-menu", this).not(".in .dropdown-menu").stop(!0, !0).fadeIn("800"), $(this).toggleClass("open"), $("ul.hidden-list").css("opacity", "0");
        }),
        $(document).on("mouseleave", ".dropdown", function () {
            $(".dropdown-menu", this).not(".in .dropdown-menu").stop(!0, !0).hide(), $(this).toggleClass("open"), $("ul.hidden-list").css("opacity", "1");
        }),
        $(document).on("click", ".tag-icon", function () {
            $(this).closest(".relative").find(".tag-postion").fadeIn();
        }),
        $(document).on("click", ".tag-close", function () {
            $(this).closest(".relative").find(".tag-postion").fadeOut();
        }),
        $(document).on("click", ".select-country, .option-country > ul > li", function () {
            $(".option-country").toggleClass("open-country"), $(".option-country").hasClass("open-country") ? $(".down-arrow").addClass("up-arrow").removeClass("down-arrow") : $(".up-arrow").addClass("down-arrow").removeClass("up-arrow");
        }),
        $(document).on("click", "body", function (e) {
            $(e.target).is(".select-country > a") || ($(".option-country.open-country").removeClass("open-country"), $(".up-arrow").addClass("down-arrow").removeClass("up-arrow"));
        }),

        $(window).scroll(function () {
            var e = $(window).scrollTop();
            e >= 100
                ? $("section.scroll-section").each(function (s) {
                      $(this).position().top <= e - 0 && ($(".sticky-left-nav li.nav-active").removeClass("nav-active mb50"), $(".sticky-left-nav li").eq(s).addClass("nav-active mb50"));
                  })
                : $(".stick-left-nav-ul li.nav-active-menu").removeClass("nav-active-menu"),
                (function () {
                    $(".sticky-left-nav").offset().top + $(".sticky-left-nav").height() >= $("footer").offset().top - 10 && $(".sticky-left-nav").addClass("bottom-menu").removeClass("top-menu");
                    $(document).scrollTop() + window.innerHeight < $("footer").offset().top && $(".sticky-left-nav").addClass("top-menu").removeClass("bottom-menu");
                })();
        }),

        $(window).scrollTop() > 100)
        
    ) {
        var f = $(window).scrollTop() + 1;
        window.scrollTo(0, f);
    }
    function u() {
        $(".counter").each(function () {
            var e = parseFloat($(this).attr("data-endVal")),
                s = new CountUp(this, 0, e, 0, 2);
            e % 1 != 0 && (s = new CountUp(this, 0, e, 2, 2)), s.start();
        });
    }
    function m() {
        $(".equal-bg, .item-list").each(function () {
            $(this).find(".tag-postion").css("top", $(this).find(".get-image-height").height());
        });
    }
    $(document).on("click", ".show-on-image", function () {
        $(this).hide(),
            $(".show-on-video")
                .find("iframe")
                .attr("src", $(".show-on-video").find("iframe").attr("src") + "&autoplay=1"),
            $(".show-on-video").show();
    }),
        $(document).on("click", ".video-close-icon", function () {
            $(".show-on-video").hide(), $(".show-on-image").show(), $(".show-on-video").find("iframe").attr("src", $(".show-on-video").find("iframe").attr("src").replace("&autoplay=1", ""));
        }),
        $(document).on("click", "#careers .video-play-icon", function () {
            $("#career_video iframe").attr("src", $("#career_video iframe").attr("src").replace("&autoplay=0", "&autoplay=1"));
        }),
        $(document).on("click", "#career_video .close", function () {
            $("#career_video iframe").attr("src", $("#career_video iframe").attr("src").replace("&autoplay=1", "&autoplay=0"));
        }),
        $("nav.sticky-left-nav a").click(function (e) {
            e.preventDefault(), $(this).parent().addClass("nav-active"), $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top + 10 }, 500);
        }),
        $(document).on("mouseenter", ".sticky-left-nav li", function () {
            $(this).hasClass("mb50") || $(this).addClass("nav-active");
        }),
        $(document).on("mouseleave", ".sticky-left-nav li", function () {
            $(this).hasClass("mb50") || $(this).removeClass("nav-active");
        }),
        $(document).on("click", ".expandHead", function () {
            var e = $(this).data("id");
            $(e).fadeIn(), $(e).addClass("expandWrpr").removeClass("contractWrpr"), $(".closeWrpr").addClass("closeWrprAnim");
        }),
        $(document).on("click", ".closeWrpr", function () {
            $(".expandableDiv").removeClass("expandWrpr").addClass("contractWrpr"), $(".expandableDiv").fadeOut(), $(".closeWrpr").removeClass("closeWrprAnim");
        }),
        $(document).on("click", ".expand", function () {
            var e = $(this).data("id");
            $(e).fadeIn();
        }),
        $(document).on("click", ".closeWrpr1", function () {
            $(this).parent().fadeOut();
        }),
        $(".atp-grid-num").length &&
            new Waypoint({
                element: document.getElementsByClassName("atp-grid-num"),
                handler: function () {
                    $(".add-counter").hasClass("counter") ||
                        ($(".add-counter").addClass("counter"),
                        setTimeout(function () {
                            u();
                        }, 2e3));
                },
                offset: "bottom-in-view",
            }),
        $(".initiate-counter").length &&
            new Waypoint({
                element: document.getElementsByClassName("initiate-counter"),
                handler: function () {
                    $(".add-counter").hasClass("counter") ||
                        ($(".add-counter").addClass("counter"),
                        setTimeout(function () {
                            u();
                        }, 2e3));
                },
                offset: "bottom-in-view",
            }),
        $(document).on("change", "#select-region", function () {
            if ("" !== this.value) {
                var e = document.getElementById(this.value).offsetTop;
                $("html, body").animate({ scrollTop: e - 68 }, 500);
            }
        }),
        $(document).on("click", ".select-case", function () {
            $(".option-case").toggleClass("open-case");
        }),
        $(document).on("click", "body", function (e) {
            $(e.target).is(".select-case > a") || $(".option-case.open-case").removeClass("open-case");
        }),
        m(),
        $(window).resize(function () {
            m();
        }),
        $(document).on("click", ".clk-fliter-overlay", function () {
            $("#overlay_fliter_topic").fadeIn(600), $("body").css("overflow-y", "hidden");
        }),
        $(document).on("click", ".close-icon", function () {
            $("#overlay_fliter_topic").fadeOut(600), $("body").css("overflow-y", "scroll");
        }),
        $(document).on("click", "#grid", function (e) {
            e.preventDefault(),
                $("#items-group .item-list").removeClass("list-group-item col-md-12 col-sm-12 col-xs-12").addClass("grid-group-item col-md-4 col-sm-4 col-xs-12"),
                $(".thumbnail").addClass("col-md-12 col-sm-12 col-xs-12 p0").removeClass("col-md-3 col-sm-3 col-xs-12 col-md-push-9 col-sm-push-9 col-xs-12"),
                $(".caption-txt").addClass("col-md-12 col-sm-12 col-xs-12 relative-off").removeClass("col-md-9 col-md-pull-3 col-sm-9 col-sm-pull-3 col-xs-12"),
                $(".title-box-yellow").addClass("minus-top-grd").removeClass("minus-top-lst"),
                $(".lng-txt").find(".title-box-yellow").removeClass("minus-top-grd"),
                $("#items-group").find(".lng-txt").addClass("pt10"),
                m(),
                $("#grid").addClass("active"),
                $("#list").removeClass("active");
        }),
        $(document).on("click", "#list", function (e) {
            e.preventDefault(),
                $("#items-group .item-list").addClass("list-group-item col-md-12 col-sm-12 col-xs-12").removeClass("grid-group-item col-md-4 col-sm-4 col-xs-12"),
                $(".thumbnail").addClass("col-md-3 col-sm-3 col-xs-12 col-md-push-9 col-sm-push-9 col-xs-push-0").removeClass("col-md-12 col-sm-12 col-xs-12 p0"),
                $(".caption-txt").addClass("col-md-9 col-sm-9 col-md-pull-3 col-sm-pull-3 col-xs-12 col-xs-pull-0").removeClass("col-md-12 col-sm-12 col-xs-12 relative-off"),
                $(".bg-white .mb-xs-20").addClass("p0"),
                $(".title-box-yellow").addClass("minus-top-lst").removeClass("minus-top-grd"),
                $("#items-group").find(".lng-txt").removeClass("pt10"),
                $(".pos-abs").css("top", "0px", "position", "absolute"),
                $("#grid").removeClass("active"),
                $("#list").addClass("active");
        });
    $(document).on("click", ".txt-toggle", function () {
        $(this).hasClass("less")
            ? ($(this).removeClass("less"),
              $(this).html("<i class='fa fa-plus' aria-hidden='true'></i> Show more"),
              $(this).closest(".lst-search").find(".show-more").fadeOut(),
              $("html, body").animate({ scrollTop: $(".reach_top").offset().top - 120 }, 600))
            : ($(this).addClass("less"), $(this).html("<i class='fa fa-minus' aria-hidden='true'></i> Show less"), $(this).closest(".lst-search").find(".show-more").fadeIn());
    }),
        $("ul.list-item").each(function () {
            $(this).children().length > 5 && $(this).append('<a href="javascript:void();" class="txt-toggle"><i class="fa fa-plus" aria-hidden="true"></i> Show more</a>');
        }),
        $("ul.refine-list").each(function () {
            $(this).children().length > 5 && $(this).append('<div class="clearfix"></div><a href="javascript:void(0);" title="More" class="tag-item clk-fliter-overlay"><i class="fa fa-plus" aria-hidden="true"></i> More</a>');
        }),
        $(document).on("click", ".clk-fliter-overlay", function () {
            var e = $(".refine-topics-list").html();
            $(".show_refine_topics").append(e), $(".clk-fliter-overlay").fadeOut(), $(".none").fadeIn(), $(".refine-topics-list").empty();
        }),
        $(document).on("click", ".close-icon", function () {
            var e = $(".show_refine_topics").html();
            $(".refine-topics-list").append(e), $(".none").fadeOut(), $(".clk-fliter-overlay").fadeIn(), $(".show_refine_topics").find("ul.refine-list").remove();
        }),
        $(document).on("click", "ul.refine-list > li > input", function () {
            $(this).attr("checked", function (e, s) {
                return "checked" === s ? null : "checked";
            });
        }),
        $(document).on("click", "ul.refine-list > .none > li > input", function () {
            $(this).attr("checked", function (e, s) {
                return "checked" === s ? null : "checked";
            });
        }),
        $(document).on("click", "ul.sort-by > li > a", function () {
            $(".active").not($(this)).removeClass("active"), $(this).toggleClass("active");
        });
    if (
        ($(document).on("click", ".seemore", function () {
            $(this).hasClass("less") ? ($(this).removeClass("less"), $(this).html("READ MORE"), $("html, body").animate({ scrollTop: $("#accordion-expand").offset().top - 100 }, 600)) : ($(this).addClass("less"), $(this).html("READ LESS"));
        }),
        $(document).on("click", ".go_to", function () {
            $("html, body").animate({ scrollTop: $(".tab-content").offset().top - 100 }, 600);
        }),
        $("#do_more").length)
    )
        new Waypoint({
            element: document.getElementById("do_more"),
            handler: function () {
                $(".menu-bg").toggleClass("reverseMenu"),
                    $(".btn--search").toggleClass("search-toggle-bg"),
                    $(".stick-left-nav-ul > li").toggleClass("darkText"),
                    $("#logo").attr("fill", function (e, s) {
                        return "#007cc3" === s ? "#fff" : "#007cc3";
                    }),
                    $(".burger > .icon-bar1").toggleClass("icon-bar11"),
                    $(".burger > .icon-bar2").toggleClass("icon-bar21"),
                    $(".burger > .icon-bar3").toggleClass("icon-bar31");
            },
        });
    if ($("#ai_powered_core").length)
        new Waypoint({
            element: document.getElementById("ai_powered_core"),
            handler: function () {
                $("header .container > .navbar-header,.container > .header-menu").toggleClass("hidden-xs hidden-sm hidden-md hidden-lg"), $("header .container").toggleClass("mt45");
            },
        });
    $("#verticalTab").length && $("#verticalTab").easyResponsiveTabs({ type: "vertical", width: "auto", fit: !0 }),
        $(window).scroll(function () {
            $("#success_stories").length &&
                $(window).scrollTop() > $("#success_stories").offset().top &&
                ($("#success_stories .equal-heights > .relative").addClass("wow fadeInLeft animated"),
                $("#success_stories .equal-heights > .relative:nth-child(1)").attr("data-wow-delay", "0.3s"),
                $("#success_stories .equal-heights > .relative:nth-child(2)").attr("data-wow-delay", "0.6s"),
                $("#success_stories .equal-heights > .relative:nth-child(3)").attr("data-wow-delay", "0.9s"),
                $("#success_stories .equal-heights > .relative:nth-child(4)").attr("data-wow-delay", "1.2s"));
        });
    var g = window.location.pathname,
        p = (g = g.toLowerCase()).split("/");
    "about" === p[1] && $(".industries-gradient").length && $("#sml_ht_home_banner").removeClass("industries-gradient").addClass("l3-gradient"),
        "newsroom" === p[1] && $(".industries-gradient").length && $("#sml_ht_home_banner").removeClass("industries-gradient").addClass("newsroom-gradient"),
        "investors" === p[1] && $(".industries-gradient").length && $("#sml_ht_home_banner").removeClass("industries-gradient").addClass("investors-gradient"),
        "products-and-platforms" === p[1] && $(".industries-gradient").length && $("#sml_ht_home_banner").removeClass("industries-gradient").addClass("product-gradient"),
        "contact" === p[1] && $(".industries-gradient").length && $("#sml_ht_home_banner").removeClass("industries-gradient").addClass("contactus-gradient"),
        "jp" === p[1] && "japan" === p[2] && $(".industries-gradient").length && $("#sml_ht_home_banner").removeClass("industries-gradient").addClass("l3-gradient"),
        $("#petagon_modal").on("show.bs.modal", function (e) {
            $(window).width() > 767 && $("html, body").animate({ scrollTop: $($("#overview")).offset().top }, 700),
                (function (e) {
                    $("#petagon_modal_carousel").trigger("to.owl.carousel", e);
                })($(e.relatedTarget).data("petagon")),
                $("#petagon_modal").removeClass("open-anim close-anim").addClass("open-anim");
        }),
        $("#petagon_modal").on("shown.bs.modal", function (e) {
            $("body .modal-backdrop").css("opacity", "0");
        }),
        $("#petagon_modal").on("hidden.bs.modal", function (e) {
            $("#petagon_modal").css("display", "block"), $("#petagon_modal").removeClass("open-anim close-anim").addClass("close-anim");
        });
    var h = $("#petagon_modal_carousel").find(".item").length;
    if (
        ($("#petagon_modal_carousel").owlCarousel({
            touchDrag: h > 1,
            mouseDrag: h > 1,
            loop: !1,
            autoplay: !1,
            autoplayHoverPause: !0,
            responsive: {
                0: { items: 1, dots: !1, dotsData: !1, nav: h > 1 },
                600: { items: 1, dots: !1, dotsData: !1, nav: h > 1 },
                768: { items: 1, dots: !1, dotsData: !1, nav: h > 1 },
                1000: { items: 1, dots: h > 1, dotsData: h > 1, nav: !1 },
            },
        }),
        $("#pentagon").length)
    ) {
        var v = anime.timeline({});
        v.add({
            targets: "#digital-journey-pentagone",
            complete: function (e) {
                $("#digital-journey-pentagone").removeClass("wow zoomIn animated"), $("#digital-journey-pentagone").addClass("wow zoomIn animated"), document.querySelector("#digital-journey-pentagone").setAttribute("fill", "#061838");
            },
        }).add({
            targets: "#outer-line-pentagone path, #pentagon path",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutSine",
            duration: 1500,
            autoplay: !1,
            delay: 1e3,
            direction: "normal",
            complete: function (e) {
                $("text").fadeIn(),
                    $("#pentagone-firstidbg").removeClass("wow fadeInDown animated").addClass("wow fadeInDown animated"),
                    $("#pentagone-secondidbg").removeClass("wow fadeInLeft animated").addClass("wow animated fadeInLeft"),
                    $("#pentagone-thirdidbg, #pentagone-fourthidbg").removeClass("wow fadeInUp animated"),
                    $("#pentagone-fifthidbg").removeClass("wow fadeInRight animated"),
                    document.querySelector("#pentagone-firstidbg").setAttribute("fill", "#1E88E5"),
                    document.querySelector("#pentagone-secondidbg").setAttribute("fill", "#90CAF9"),
                    document.querySelector("#pentagone-thirdidbg").setAttribute("fill", "#64B5F6"),
                    document.querySelector("#pentagone-fourthidbg").setAttribute("fill", "#42A5F5"),
                    document.querySelector("#pentagone-fifthidbg").setAttribute("fill", "#2196F3"),
                    $("#pentagone-thirdidbg, #pentagone-fourthidbg").addClass("wow fadeInUp animated"),
                    $("#pentagone-fifthidbg").addClass("wow fadeInRight animated"),
                    $("#outer-line-pentagone").fadeOut(2e3),
                    $("#pentagone-firstid, #pentagone-secondid, #pentagone-thirdid, #pentagone-fourthid, #pentagone-fifthid").fadeOut(2500);
            },
        });
    }
    if ($("#overview").length)
        new Waypoint({
            element: document.getElementById("overview"),
            handler: function () {
                $("text").fadeOut(),
                    $("#outer-line-pentagone").fadeIn(),
                    $("#pentagone-firstid, #pentagone-secondid, #pentagone-thirdid, #pentagone-fourthid, #pentagone-fifthid").fadeIn(),
                    $("#digital-journey-pentagone, #pentagone-firstidbg, #pentagone-secondidbg, #pentagone-thirdidbg, #pentagone-fourthidbg, #pentagone-fifthidbg").attr("fill", "none"),
                    $("#digital-journey-pentagone, #pentagone-firstidbg, #pentagone-secondidbg, #pentagone-thirdidbg, #pentagone-fourthidbg, #pentagone-fifthidbg").removeClass(
                        "wow zoomIn fadeInLeft animated fadeInDown fadeInUp fadeInRight"
                    ),
                    v.restart();
            },
            offset: 50,
        });
    $("[class*='addthis_button_']").length &&
        $("[class*='addthis_button_']").each(function () {
            var e = $(this).attr("addthis:url");
            e.indexOf("infosysbpm.com") < 0 && $(this).attr("addthis:url", "https://www.infosysbpm.com" + e);
        }),
        $(document).on("click", ".slick-list .slick-slide", function () {
            $("html, body").animate({ scrollTop: $("#our-story").offset().top }, 700);
        });
}),
    (window.rfsscrollonthankyou = function () {
        $("html, body").animate({ scrollTop: $($("#rfs")).offset().top }, 700);
    });
var screenWidth_all = $(window).width();
if (screenWidth_all > 1024);
else {
    function modify_breadcrumb_mob() {
        $("li.mega-dropdown > a").attr("href", "javascript:void();");
    }
    $(document).on("click", ".dropdown", function () {});
}
