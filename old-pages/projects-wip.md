<section class="featured-posts">
    <div class="section-title">
        <h2><span>Featured</span></h2>
    </div>
    <div class="row">

    {% for post in site.projects %}
        {% if post.categories contains "hackathon" or post.categories contains "tutorials" %}
            
        {% else %}
            {% include projectbox.html %}
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


# Projects list:
General Projects
Big and mini (April 2020) - ongoing
- Nonprofit organization to connect the elderly with younger volunteers virtually
- Role: Full stack development with AWS

Dallas Info (March 2020) - ongoing
- Alexa skill for the City of Dallas
- In association with Code for Dallas

Anthonyzhou.me (August 2019 or so, ongoing)
- Personal blog and portfolio site

Audio Identification App (March 2020)
- iOS app that identifies sounds in the environment using machine learning

Verdant Leaf (Aug 2018)
- An article-publishing platform for high school students

Verdant Life (Aug 2018)
- A nutrition calculator for meals and recipes

Hackathon Projects
Thriftr (April 2020) - TitanHacks
- An app that helps people buy and sell used clothing 

Coding Together (April 2020) - RowdyHacks
- Interactive programming software for the classroom

Quetzal (February 2020) - Hacklahoma
- Automatic scheduling software based on biological clock

Smart Route (February 2020) - HackSMU, Winner (3rd place overall, 3rd place State Farm challenge)
- Determine the safest route to a place based on past traffic data and current conditions

Senti-Index (January 2020) - TAMUHack 
- Visualize happiness on a map using sentiment analysis of Tweets and news

Cosmetic Safety Scanner (November 2019) - HackTAMS, Winner (1st overall)
- Scan the ingredients list of a cosmetic product to see if it has dangerous ingredients

You are not a loan (November 2019) - HackUTD
- A game that helps teach financial literacy through a simulation

Break-in Game (April 2019)
- A  break-in game for the web with several puzzle-style challenges