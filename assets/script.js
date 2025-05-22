let currentLang = 'de';
let translations = {};

async function loadTranslations(lang) {
    const res = await fetch(`../_translations/${lang}.json`);
    translations = await res.json();
}

function updateTexts() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
            el.textContent = translations[key];
        }
    });
}

function switchLang(lang) {
    currentLang = lang;
    loadTranslations(lang).then(updateTexts);
    localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLang(btn.dataset.lang));
});

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'de';
    switchLang(savedLang);
});
