let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rolando para baixo, esconde o header
        header.style.top = "-100px";
    } else {
        // Rolando para cima, mostra o header
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
});
