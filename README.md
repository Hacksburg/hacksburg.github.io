# The Website for Hacksburg, a Blacksburg, VA Makerspace

Hacksburg's primary web presence. Hosted by [Github pages](https://pages.github.com/). Availible on the web at https://hacksburg.org

![build and upload](https://github.com/Hacksburg/hacksburg.github.io/actions/workflows/build-and-upload.yaml/badge.svg)

## How to Update the site

1. Modify ```posts.json``` (add a new post element or update an existing one)
2. (Optional, suggested) Run ```build.py``` to build index.html and host the site locally to check that everything looks how you expect 
    * Use ```python -m http.server```, VSCode Live Server, or similar
3. Commit and push ```posts.json``` to Github to automatically build and update the live site

## Contents

* ```.github/workflows```: Defines build and deployment process
* ```360tour```: A virtual workshop tour powered by [Marzipano](https://github.com/google/marzipano)
* ```about```/```contact```/```donate```/```join```: Static pages for additional content
* ```resources```: Site resources including fonts, scripts, CSS, and images
* ```build.py```: Adds contents from posts.json to static html site
* ```index.html```: Homepage of website, framework that contains no posts by default
* ```posts.json```: Defines homepage content (primarily classes and events)
