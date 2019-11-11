$(".qbox").each(function(i, o){
  let wrapper = $('<span class="qbox-wrapper"></span>');
  let space   = $('<span class="qbox-default"></span>');
  space.html('　　　');
  let wrapped = $(o).wrap(wrapper);
  wrapped.ready(function() {
    wrapped.after(space);
  });
});

var gifStart = function(){
  var elems = document.getElementsByClassName("gif_fps");
  for (i = 0; i < elems.length; i++) {
    let src = elems[i].getAttribute('src');
    elems[i].setAttribute('src', src.replace('_still.gif', '.gif'))
  }
}

var gifStop = function(){
  var elems = document.getElementsByClassName("gif_fps");
  for (i = 0; i < elems.length; i++) {
    let src = elems[i].getAttribute('src');
    if (src.indexOf('_still.gif') == -1){
      elems[i].setAttribute('src', src.replace('.gif', '_still.gif'))
    }
  }
}
