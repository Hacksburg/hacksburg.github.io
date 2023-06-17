# how to update the site
1. modify ```posts.json``` (add a new post element or update an existing one)
2. run ```build.py``` to build index.html (based off of posts.json's contents)
3. host the site locally (```python -m http.server``` or similar) to check that everything looks how you expect it to (you can leave this running while making edits)
4. create a commit and push to github to automatically update the live site
