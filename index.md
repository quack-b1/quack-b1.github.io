---
layout: default
lang: de
permalink: /
---
<nav class="site-nav">
    <button class="lang-btn" data-lang="de"><img src="/_includes/flags/de.svg" alt="Deutsch"></button>
    <button class="lang-btn" data-lang="en"><img src="/_includes/flags/gb.svg" alt="English"></button>
    <li><button class="nav-btn" data-section="about" data-i18n="about"></button></li>
    <li><button class="nav-btn" data-section="experience" data-i18n="experience"></button></li>
    <li><button class="nav-btn" data-section="education" data-i18n="education"></button></li>
    <li><button class="nav-btn" data-section="certifications" data-i18n="certifications"></button></li>
    <li><button class="nav-btn" data-section="honors" data-i18n="honors"></button></li>
    <li><button class="nav-btn" data-section="projects" data-i18n="projects"></button></li>
    <li><a href="assets/cv/cv.pdf" target="_blank" data-i18n="download_cv" class="cv-btn"></a></li>
</nav>

{% for section in site.sections_de %}
  <section id="{{ section.slug }}">
    <h2 data-i18n="{{ section.slug }}"></h2>
    <div class="section-content">
      {{ section.content | markdownify }}
    </div>
  </section>
{% endfor %}