function switchLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerHTML = translations[lang][key] || key;
    });
    localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("language") || "de";
    switchLanguage(lang);

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const prev = document.querySelector(".carousel-prev");
    const next = document.querySelector(".carousel-next");
    let index = 0;

    prev.addEventListener("click", () => {
        index = Math.max(index - 1, 0);
        track.style.transform = `translateX(-${index * 220}px)`;
    });

    next.addEventListener("click", () => {
        const maxIndex = track.children.length - 1;
        index = Math.min(index + 1, maxIndex);
        track.style.transform = `translateX(-${index * 220}px)`;
    });
});
