// // hiro slider 
// $('.responsive').slick({
//     dots: false,
//     infinite: true,
//     speed: 800,
//     autoplay: true,
//     slidesToShow: 5,
//     slidesToScroll: 4,
//     responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 dots: false
//             }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
// });

// // main home earn_more_slider 

// $('.earn_more_slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 800,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 dots: true
//             }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
// });






// window.console = window.console || function () {
//     var o = {};
//     return o.log = o.warn = o.debug = o.info = o.error = o.time = o.dir = o.profile = o.clear = o.exception = o.trace = o.assert = function () {}, o
// }(), jQuery(document).ready(function (o) {
//     o("ul.pattern .color1").click(function () {
//         return o("#select_color_style").attr("href", "assets/css/color/light.css"), !1
//     }), o("ul.pattern .color2").click(function () {
//         return o("#select_color_style").attr("href", "assets/css/color/dark.css"), !1
//     }), o("ul.pattern .color3").click(function () {
//         return o("#select_color_style").attr("href", "assets/css/color/theme.css"), !1
//     }), o("#select_color_switcher_option .bottom a.settings").click(function (t) {
//         t.preventDefault(), "-189px" === o("#select_color_switcher_option").css("left") ? o("#select_color_switcher_option").animate({
//             left: "0px"
//         }) : o("#select_color_switcher_option").animate({
//             left: "-189px"
//         })
//     }), o("ul.pattern li a").click(function (t) {
//         t.preventDefault(), o(this).parent().parent().find("a").removeClass("active"), o(this).addClass("active")
//     }), o("#select_color_switcher_option").animate({
//         left: "-189px"
//     })
// });



// // imgInp.onchange = evt => {
// //     const [file] = imgInp.files
// //     if (file) {
// //         blah.src = URL.createObjectURL(file);
// //         document.getElementById("close_btn").style.display = "block";
// //         document.getElementById("tag_btn").style.display = "block";

// //     }
// // }