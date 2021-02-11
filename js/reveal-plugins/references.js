/*****************************************************************
** Author: iwasakishuto <https://github.com/iwasakishuto>
**
** A plugin for reveal.js adding a Reference slides.
**
** License: MIT license
******************************************************************/

window.RevealReferences = window.RevealReferences || {
	id: 'RevealReferences',
	init: function(deck) {
    initReferences(deck);
	},
  configure: function(config) { configure(config); },
}

const initReferences = function(Reveal){
  /*********************
	** Default Settings.
  **********************/
  var start_idx = 1;
  var reference_id = "references";
  var slide_before_html = '<h2 class="menu-title">References</h2>';
  var slide_after_html = '';
  var slide_background = '';

  /*********************
	** Configuration.
  **********************/
  var config = configure( Reveal.getConfig().references || {} );
	function configure( config ) {
		if ( config.start_idx ) start_idx = config.start_idx;
    if ( config.reference_id ) reference_id = config.reference_id;
    if ( config.slide_before_html ) slide_before_html = config.slide_before_html;
    if ( config.slide_after_html ) slide_after_html = config.slide_after_html;
    if ( config.slide_background ) slide_background = config.slide_background;
    return config;
  }

  /*********************
	** Main Functions
  **********************/
  const pat = new RegExp(/\[\[\^(.*?)\]\]/gu);
  $slide = $("div.slides")
  // Extract matched objects ([^Replacement Information]) and remove duplications.
  var repl = [];
  var references = $slide.html().match(pat);
  if (references != null){
    references.forEach(function(e) {
      repl.push(e);
    });
    repl = Array.from(new Set(repl))
  
    // Replacement the mark ([^Replacement Information]) to simple marker.
    $slide.html($slide.html().replace(pat, function(e) {
      return '<sup><a class="link-reference" href="#/' + reference_id + '">[' + (start_idx+repl.indexOf(e)) + ']</a></sup>';
    }))
  
    // Add Referencement Slide.
    $section = $('<section id="' + reference_id + '" data-background="' + slide_background + '">' + slide_before_html + '</section>');
    $ul = $("<ul></ul>");
    repl.forEach(function(e,i) {
      $ul.append('<li>' + (start_idx+i) + '. ' + e.slice(3, -2) + '</li>')
    });
    $section.append($ul);
    $section.append($(slide_after_html))
    $slide.append($section);
  }

  this.configure = configure;
	return this;
};
