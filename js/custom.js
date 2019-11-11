$(".qbox").each(function(i, o){
  let wrapper = $('<span class="qbox-wrapper"></span>');
  let space   = $('<span class="qbox-default"></span>');
  space.html('　　　');
  let wrapped = $(o).wrap(wrapper);
  wrapped.ready(function() {
    wrapped.after(space);
  });
});

function SimultaneousStart() {
  $(".gif_play").each(function(i, o){
      $(o).setAttribute('src', $(o).getAttribute('src').replace('_play.gif', '.gif'))
}

function SimultaneousEnd() {
  $(".gif_play").each(function(i, o){
      $(o).setAttribute('src', $(o).getAttribute('src').replace('.gif', '_play.gif'))
}
