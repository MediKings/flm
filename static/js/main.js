$(document).ready(()=>{

    $('.ceo-images').slick({
        autoplay: true,
        centerMode: true,
        speed: 150,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
           {
              breakpoint: 993,
              settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1,
              }
           },
           {
              breakpoint: 768,
              settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
              }
           },
        ]
     })

})
