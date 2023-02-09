# Anthony Zhou
My personal site. Includes my blog and featured projects. [https://anthonyzhou.me](https://anthonyzhou.me)

## Run locally with Docker

First, pull the Docker image for Jekyll:
```
docker pull jekyll/jekyll
```

Then, run the Docker image:
```
docker run --rm -v "$PWD":/srv/jekyll -p 4000:4000 jekyll/jekyll jekyll serve
```