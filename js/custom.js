$(".qbox").each(function(i, o){
  let wrapper = $('<span class="qbox-wrapper"></span>');
  let space   = $('<span class="qbox-default"></span>');
  space.html('　　　');
  let wrapped = $(o).wrap(wrapper);
  wrapped.ready(function() {
    wrapped.after(space);
  });
});
