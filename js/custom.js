// $(".qbox").each(function(i, o){
//   let wrapper = $('<span class="qbox-wrapper"></span>');
//   let space   = $('<span class="qbox-default"></span>');
//   space.html('　　　');
//   let wrapped = $(o).wrap(wrapper);
//   wrapped.ready(function() {
//     wrapped.after(space);
//   });
// });

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

// var questions = document.getElementsByClassName("q_hide");
// for (i = 0; i < questions.length; i++) {
//   var ans_button = document.createElement('button');
//   ans_button.id = "ans_button" + i.toString(10);
//   ans_button.className = 'q_visiblize'
//   ans_button.innerHTML = "Look Answer."
//   document.body.insertBefore(ans_button, questions[i]);
//   questions[i].id = "question" + i.toString(10);
// }
// var ans_buttons = document.getElementsByClassName('q_visiblize');
// for (i=0; i<ans_buttons.length; i++){
//   ans_buttons[i].onclick = function(){
//     let id = "question" + this.id.substr(10);
//     let ans_content = document.getElementById(id);
//     ans_content.style.visibility = "visible";
//     this.style.display = "None";
//   }
// }
/* ページ遷移 */
var transitPage = function(direction){
  let url = location.href;
  if (direction>0) {
    // next
    to_url = url.replace(/(\d+)\./, function(j,a){return a- - 1 +".";});
  }else{
    // back
    to_url = url.replace(/(\d+)\./, function(j,a){return a  - 1 +".";});
  }
  location.href=to_url;
}

function switchVisibility(target_id){
  var target = document.getElementById(target_id);
  var button = event.target;
  if (button.innerHTML === "hidden"){
    target.style.visibility = "hidden";
    button.innerHTML = "visible";
    button.style.backgroundColor = "#bbded6";
    button.style.borderColor = "#8ac6d1";
  }else{
    target.style.visibility = "visible";
    button.innerHTML = "hidden";
    button.style.backgroundColor = "#e89da2";
    button.style.borderColor = "#c9485b";
  }
}

function dateToStr24HPad0(date, format) {
  // Ref: https://www.sejuku.net/blog/22867
  if (!format) {
    // デフォルト値
    format = 'YYYY/MM/DD hh:mm:ss'
  }

  // フォーマット文字列内のキーワードを日付に置換する
  format = format.replace(/YYYY/g, date.getFullYear());
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
  format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));

  return format;
}

// For Encrypt Content
function decrypt_script(){
  $(".decryptionable").each(function(i, e){
    $(e).click();
  });
}
$(window).load(function(){
  decrypt_script();
});

// Ref: https://gist.github.com/stephenharris/25d7592f951642637e7a
function add_copy_pre_btn(){
  var copyid = 0;
	$('pre').each(function(){
		copyid++;
		$(this).attr('data-copyid', copyid).wrap('<div class="pre-wrapper"/>');
		$(this).parent().css( 'margin', $(this).css( 'margin') );
		$('<button class="copy-snippet">Copy</button>').insertAfter( $(this) ).data( 'copytarget',copyid );
	});
	$('body').on( 'click', '.copy-snippet', function(ev){
		ev.preventDefault();
		var $copyButton = $(this);
		$pre = $(document).find('pre[data-copyid=' + $copyButton.data('copytarget' ) + ']');
		if ( $pre.length ) {
			var textArea = document.createElement("textarea");
			// Place in top-left corner of screen regardless of scroll position.
			textArea.style.position = 'fixed';
			textArea.style.top = 0;
			textArea.style.left = 0;
			// Ensure it has a small width and height. Setting to 1px / 1em
			// doesn't work as this gives a negative w/h on some browsers.
			textArea.style.width = '2em';
			textArea.style.height = '2em';
			// We don't need padding, reducing the size if it does flash render.
			textArea.style.padding = 0;
			// Clean up any borders.
			textArea.style.border = 'none';
			textArea.style.outline = 'none';
			textArea.style.boxShadow = 'none';
			// Avoid flash of white box if rendered for any reason.
			textArea.style.background = 'transparent';
			//Set value to text to be copied
			textArea.value = $pre.html();
			document.body.appendChild(textArea);
      textArea.select();
      
			try {
				document.execCommand('copy');
				$copyButton.text( 'Copied').prop('disabled', true);;
			} catch (err) {
				$copyButton.text( 'FAILED: Could not copy').prop('disabled', true);;
			}
			setTimeout(function(){
				$copyButton.text('Copy').prop('disabled', false);;
			}, 3000);
		}
	});
}