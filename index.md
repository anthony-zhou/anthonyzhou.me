---
layout: default
pagination:
  enabled: true
---



<!-- The main content area -->
<div class="posts">
  <div class="intro" id="markdown">
    <h1>Stories</h1>
    <p>In this blog, I will post about psychology, economics, programming, and just about anything I think is interesting. Check out my <a href="/projects">projects</a> too!</p>
    <p id="featured-tags">Sort by tag: <a href="/tag/programming">programming</a> <a href="/tag/science">science</a> <a href="/tag/tutorials">tutorials</a></p>
  </div>
  <div class="content-area">
    <div class="grid-xlarge">
      <div class="posts__container" itemscope itemtype="http://schema.org/Blog" data-columns="2">

        {% for post in paginator.posts %}

          <!-- The tag below includes the markup for each post - partials/post-card.html -->
          {% include post-card.html %}

        {% endfor %}
      </div>
    </div>
  </div>
  {% include pagination.html %}
</div>
