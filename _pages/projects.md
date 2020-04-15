---
layout: default
title: Projects
permalink: /projects
---

<!-- Featured
================================================== -->
<section class="featured-posts">
    <div class="section-title">
        <h2><span>Featured</span></h2>
    </div>
    <div class="row">

    {% for post in site.projects %}
        {% if post.categories contains "hackathon" %}
            <!-- Do nothing -->
        {% else %}
            {% include featuredbox.html %}
        {% endif %}
    {% endfor %}

    </div>
</section>

<section class="">
    <div class="section-title">
        <h2><span>Hackathon Projects</span></h2>
    </div>
    <div class="row">

    {% for post in site.projects %}
        {% if post.categories contains "hackathon" %}
            {% include featuredbox.html %}
        {% endif %}
    {% endfor %}

    </div>
</section>