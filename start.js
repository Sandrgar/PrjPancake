let slideIndex = 1;
showSlides(slideIndex);     
 
// setInterval(function() { 
//     slideIndex++;
//     showSlides(slideIndex);
// }, 5000);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("carousel-buttons");

    if (n > slides.length) {
        slideIndex = 1;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); 
    }

    slides[slideIndex - 1].style.display = "flex"; 
    dots[slideIndex - 1].className += " active"; 
    
}