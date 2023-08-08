window.onload = function() {
    let img = document.getElementsByClassName("banner1")[0].children;
    let i = 0;
    
    let timer = setInterval(()=> {
        resetBannerActive();
        i++;
        if (i >= 4) {
            i = 0;
        }
        img[i].classList.add("banner-active");
    }, 2000);
    
    function resetBannerActive() {
        for (let i = 0; i < img.length; i++) {
            img[i].classList.remove("banner-active");
        }
    }
};