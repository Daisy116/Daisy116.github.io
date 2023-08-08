$(".responsive").slick({
    dots: true,
    infinite: true,  // 是否開啟循環(最後一張圖片的下一張，回到第一張)
    autoplay: true,
    speed: 600,
    slidesToShow: 1,  // (數量值)一次主要顯現幾個slides
    slidesToScroll: 1, // (數量值)每次滑動幾張slides
    // responsive: [
    //     {
    //     breakpoint: 1024,
    //     settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //     }
    //     },
    //     {
    //     breakpoint: 600,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2
    //     }
    //     },
    //     {
    //     breakpoint: 480,
    //     settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //     }
    //     }
    // ]
    });
