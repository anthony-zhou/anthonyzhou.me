---
layout: default
pagination:
  enabled: true
---



<!-- The main content area -->
<div class="posts">
  <div class="intro" id="markdown">
    <h1>Stories</h1>
    <p>I like to code, but I also do other stuff, and I like to write about it. Below you can check out some articles I've written. Check out my <a href="/projects">projects</a> too!</p>
  </div>
  <div class="grid-xlarge">
    <div class="posts__container" itemscope itemtype="http://schema.org/Blog" data-columns>

      {% for post in paginator.posts %}

        <!-- The tag below includes the markup for each post - partials/post-card.html -->
        {% include post-card.html %}

      {% endfor %}
    </div>
  </div>

  {% include pagination.html %}
</div>
