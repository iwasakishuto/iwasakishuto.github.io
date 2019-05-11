#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR   = "Shuto"
SITENAME = "Shuto's blog"
SITEURL  = 'https://iwasakishuto.github.io/pelican/blog'

PATH = 'content'
THEME = './Flex'
TIMEZONE = 'Asia/Tokyo'
DEFAULT_LANG = 'en'
DATE_FORMATS = {
    'en': ('en_US','%a, %d %b %Y'),
}


# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# tell pelican where your custom.css file is in your content folder
STATIC_PATHS = ['extras/custom.css']
# tell pelican where it should copy that file to in your output folder
EXTRA_PATH_METADATA = {
'extras/custom.css': {'path': 'theme/css/custom.css'}
}
# tell the pelican-bootstrap-3 theme where to find the custom.css file in your output folder
CUSTOM_CSS = 'theme/css/custom.css'


# Blogroll
LINKS = (('Home',     'https://iwasakishuto.github.io'),
         ('Blog',     'file:///Users/iwasakishuto/Desktop/iwasakishuto.github.io/pelican/blog/index.html'),
         ('Colledge', 'https://iwasakishuto.github.io/templates/lecture.html'),
         ('Wine',     'https://iwasakishuto.github.io/templates/wine.html'),
         ('PRML',     'https://iwasakishuto.github.io/templates/prml.html'),)

# Social widget
SOCIAL = (('twitter',  'https://twitter.com/cabernet_rock'),
          ('github',   'https://github.com/iwasakishuto'),
          ('facebook', 'https://www.facebook.com/iwasakishuto'))

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
