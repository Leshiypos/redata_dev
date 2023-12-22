// let isMobile = navigator.userAgentData.mobile;
let isMobile = false;
let isPortrait = false;
if (window.navigator.maxTouchPoints > 1) { 
    isMobile = true;
}

if (isMobile) {
    document.getElementById('mobile-media-queries').removeAttribute("disabled");
    document.getElementById('desktop-media-queries').setAttribute("disabled", "disabled");
}
else {
    document.getElementById('desktop-media-queries').removeAttribute("disabled");
    document.getElementById('mobile-media-queries').setAttribute("disabled", "disabled");
}
    
// tracking in realtime
screen.orientation.addEventListener("change", function(e) {
    if(window.matchMedia("(orientation: portrait)").matches) {
        isPortrait = true;
    } else {
        isPortrait = false;
    }
    
    if (isMobile) {
        const logoImage = document.getElementById('logo');        
        if(isPortrait) {
            logoImage.src = '../images/logo_small.svg';
        } else { // return back to original
            logoImage.src = '/images/logo.svg'; 
        }
    }
});
