let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Rolando para baixo e passou de 100px: esconde o header
        console.log("Scroll Detected: ", window.pageYOffset);
        header.style.top = "-120px";
    } else {
        // Rolando para cima: mostra o header
        console.log("Scroll Detected: ", window.pageYOffset);
        header.style.top = "0";
    }

    // Atualiza a última posição de rolagem
    lastScrollTop = scrollTop;
});