---
layout: default
title: Projects
permalink: /projects
---

I am currently working on a very cool projects page with lots of pictures and detailed descriptions. For now, though, here are a few programming tutorials:

<!-- Featured
================================================== -->


<section class="">
    <div class="section-title">
        <h2><span>Tutorials</span></h2>
    </div>
    <div class="row">

    {% for post in site.projects %}
        {% if post.categories contains "tutorials" %}
            {% include featuredbox.html %}
        {% endif %}
    {% endfor %}

    </div>
</section>