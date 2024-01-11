function myFunction() {
    var dots = document.querySelectorAll("dots");
    var moreText = document.querySelectorAll("moreText");
    var moreBtn = document.querySelectorAll("moreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreBtn.innerHTML = "Read more";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        moreBtn.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}