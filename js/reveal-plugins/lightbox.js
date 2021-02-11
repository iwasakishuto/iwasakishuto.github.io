/*****************************************************************
** Author: iwasakishuto <https://github.com/iwasakishuto>
**
** A plugin for reveal.js allowing to integrate lightbox.js <https://github.com/lokesh/lightbox2>
**
** License: MIT license
******************************************************************/

window.RevealLightBox = window.RevealLightBox || {
  id: 'RevealLightBox',
  init: function(deck) {
    initLightBox(deck);
  }
};

const initLightBox = function(Reveal){
  // var parent = target.parentNode;
  $('img').each(function(i, o){
    var tagname = $(o).parent().get(0).tagName;
    if (tagname=="P"){
      $(o).unwrap();
    }
    let data_lightbox = $(o).attr("data-lightbox");
    if (data_lightbox) {
      let src           = o.getAttribute("src");
      let alt           = o.getAttribute("alt");
      let style         = o.getAttribute("style");
      let data_title    = o.getAttribute("data-title");
      let data_caption  = o.getAttribute("data-caption");
      if (data_title==null) data_title = alt;
      if (data_caption==null) data_caption = alt;
      if (style==null) style = "";
      let a = $('<a href="' +  src + '" data-title="' + data_title + '" data-lightbox="' + data_lightbox + '"></a>');
      let figure = $('<figure class="photowall" style="' + style + '"><figcaption class="photowall">' + data_caption + '</figcaption></figure>');
      let wrapped = $(o).wrap(figure);
      wrapped.wrap(a);  
    }
  });

  addScript("https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.7.1/js/lightbox.min.js");
  addStylesheet("https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.7.1/css/lightbox.css");
  addStyle(`
  figure.photowall {
    display: inline-block;
    max-width: 40%;
    margin: 1px;
    text-align: center;
  }
  figure.photowall img {
    width: 100%;
  }
  figure.photowall figcaption {
    background-color: black!important;
    color: white;
    display: inline-grid;
  }`);
  return this;
};