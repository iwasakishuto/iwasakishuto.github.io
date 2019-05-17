# iwasakishuto.github.io
<a href="https://iwasakishuto.github.io">This</a> is my portfolio. Please look around!!

## Acknowledgement
I am deeply grateful to [CISCO](https://www.cisco.com/c/m/en_us/solutions/enterprise-networks/digital-network-architecture/dna-mobility-infographic.html).
I swear not to use this site for commercial use.

## Memorandum
### Pelican
I use [Pelican](http://docs.getpelican.com/en/3.6.3/index.html) to make this blog easily. Thanks a lot.

#### How to write?
1. go to respective directories.
2. Write a blog with markdown and save it at `./markdown/`
3. Run a command `make html`
4. Check the blog using `make serve` command.
5. git add, commit, and push.

Very easy :)

#### Markdown format
Note: You have to write this at the header.

```md

Title: <title>
Date: YYYY-MM-DD HH:MM
Modified: YYYY-MM-DD HH:MM
Tags: <tag>, <tag>
Category: <category>
Slug: <slug>
Authors: <author>, <author>
Summary: <summary>
```

#### jupyter notebook
You can also write a blog based on jupyter notebook.
1. put `sample.ipynb` at `./markdown/jupyter/`
2. make `sample.ipynb-meta` and write metadata above
3. Run a command `make html`
