var wrapper = $('<span class="qbox-wrapper"></span>');
var space = $('<span class="qbox-default"></span>');
space.html('　　　');
$(".qbox").each(function(i, o){
  let wrapped = $(o).wrap(wrapper);
  wrapped.ready(function() {
    wrapped.after(space);
  });
});
