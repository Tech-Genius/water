// const $dropdown = $(".dropdown");
// const $dropdownToggle = $(".dropdown-toggle");
// const $dropdownMenu = $(".dropdown-menu");
// const showClass = "show";
 
// $(window).on("load resize", function() {
//   if (this.matchMedia("(min-width: 768px)").matches) {
//     $dropdown.hover(
//       function() {
//         const $this = $(this);
//         $this.addClass(showClass);
//         $this.find($dropdownToggle).attr("aria-expanded", "true");
//         $this.find($dropdownMenu).addClass(showClass);
//       },
//       function() {
//         const $this = $(this);
//         $this.removeClass(showClass);
//         $this.find($dropdownToggle).attr("aria-expanded", "false");
//         $this.find($dropdownMenu).removeClass(showClass);
//       }
//     
//   } else {
//     $dropdown.off("mouseenter mouseleave");
//   }
// });


// $(function() {
//     var body = $(‘.body’);
//     var backgrounds = new Array(
//     ‘url(image1.jpg)’,
//     ‘url(image2.jpg)’
//     );
//     var current = 0;
    
//     function nextBackground() {
//     body.css(
//     ‘background’,
//     backgrounds[current = ++current % backgrounds.length]
//     );
    
//     setTimeout(nextBackground, 10000);
//     }
//     setTimeout(nextBackground, 10000);
//     body.css(‘background’, backgrounds[0]);
//     });


$(document).ready(function(){
    $(".blog .light").click(function(){
        
        $(".ok").slideToggle();
    })
})



var btn = document.querySelector('.blog .light')
btn.addEventListener('click',function(e){
 btn = e.target.textContent = 'View Less'
})

// var btn = document.querySelector('.blog .light')
// btn.addEventListener('click',function(e){
//  btn = e.target.textContent = 'Read MORE'.then
//        var ok = document.querySelector('.blog .light')
//        ok.addEventListener('click',function(f){
//           ok = f.target.textContent = 'ok'
//    })
// })
