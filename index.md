---
layout: default
title: Portfolio
---

<nav>
    <ul>
        <li><a href="#about" class="nav-link">🇩🇪 Über mich</a></li>
        <li><a href="#experience" class="nav-link">🇩🇪 Erfahrung</a></li>
        <li><a href="#education" class="nav-link">🇩🇪 Bildung</a></li>
        <li><a href="#certifications" class="nav-link">🇩🇪 Zertifikate</a></li>
        <li><a href="#honors" class="nav-link">🇩🇪 Auszeichnungen</a></li>
        <li><a href="#projects" class="nav-link">🇩🇪 Projekte</a></li>
        <li>
            <button id="lang-de" onclick="setLanguage('de')">🇩🇪</button>
            <button id="lang-en" onclick="setLanguage('en')">🇬🇧</button>
        </li>
    </ul>
</nav>

<div id="about">
    {% include_relative about.md %}
</div>

<div id="experience">
    {% include_relative experience.md %}
</div>

<div id="education">
    {% include_relative education.md %}
</div>

<div id="certifications">
    {% include_relative certifications.md %}
</div>

<div id="honors">
    {% include_relative honors.md %}
</div>

<div id="projects">
    {% include_relative projects.md %}
</div>

<script>
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });
</script>