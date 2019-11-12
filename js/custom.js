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
  var elems = document.getElementsByClassName("gif_play");
  for (i = 0; i < elems.length; i++) {
    let src = elems[i].getAttribute('src');
    elems[i].setAttribute('src', src.replace('_still.gif', '.gif'))
  }
}

var gifStop = function(){
  var elems = document.getElementsByClassName("gif_play");
  for (i = 0; i < elems.length; i++) {
    let src = elems[i].getAttribute('src');
    if (src.indexOf('_still.gif') == -1){
      elems[i].setAttribute('src', src.replace('.gif', '_still.gif'))
    }
  }
}

var questions = document.getElementsByClassName("q_hide");
for (i = 0; i < questions.length; i++) {
  var ans_button = document.createElement('button');
  ans_button.id = "ans_button" + i.toString(10);
  ans_button.className = 'q_visiblize'
  ans_button.innerHTML = "Look Answer."
  document.body.insertBefore(ans_button, questions[i]);
  questions[i].id = "question" + i.toString(10);
}
var ans_buttons = document.getElementsByClassName('q_visiblize');
for (i=0; i<ans_buttons.length; i++){
  ans_buttons[i].onclick = function(){
    let id = "question" + this.id.substr(10);
    let ans_content = document.getElementById(id);
    ans_content.style.visibility = "visible";
    this.style.display = "None";
  }
}

