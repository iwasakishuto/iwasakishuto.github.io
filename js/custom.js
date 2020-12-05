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
function add_copy_pre_btn(to_JSON=false){
  var copyid = 0;
  $('pre').each(function(){
    copyid++;
    $(this).attr('data-copyid', copyid).wrap('<div class="btn-wrapper"/>');
    $(this).parent().css('margin', $(this).css('margin') );
    $('<button class="js-btn copy-snippet">Copy</button>').insertAfter( $(this) ).data('copytarget',copyid );
  });
  $('body').on('click', '.copy-snippet', function(ev){
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
      if (to_JSON){
        textArea.value = JSON.stringify(textArea.value);
      }
      document.body.appendChild(textArea);
      textArea.select();

      try {
        document.execCommand('copy');
        $copyButton.text('Copied').prop('disabled', true);;
      } catch (err) {
        $copyButton.text('FAILED: Could not copy').prop('disabled', true);;
      }
      setTimeout(function(){
        $copyButton.text('Copy').prop('disabled', false);;
      }, 3000);
    }
  });
}

function add_svg_download_btn(){
  var idx = 0;
  $('svg').each(function(){
    idx++;
    $(this).attr('data-id', idx).wrap('<div class="btn-wrapper"/>');
    $(this).parent().css('margin', $(this).css('margin') );
    $('<button class="js-btn download-svg">Copy</button>').insertAfter( $(this) ).data('datatarget', idx );
  });
  $('body').on('click', '.download-svg', function(ev){
    ev.preventDefault();
    var downloadButton = $(this);
    var svg = $(document).find('svg[data-id=' + downloadButton.data('datatarget') + ']')[0];

    var svgData = new XMLSerializer().serializeToString(svg);
    var canvas = document.createElement("canvas");
    canvas.width = svg.width.baseVal.value;
    canvas.height = svg.height.baseVal.value;
    
    var ctx = canvas.getContext("2d");
    var image = new Image;
    image.onload = function(){
        ctx.drawImage( image, 0, 0 );
        var a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.setAttribute("download", "svg.png");
        a.dispatchEvent(new MouseEvent("click"));
    }
    image.src = "data:image/svg+xml;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(svgData)));
  });
}

// Need 'd3.js'
// <script src="http://d3js.org/d3.v5.min.js" charset="utf-8"></script>
function plot_tree(tree_path, 
                   id='tree-wrapper',
                   rect_size={"height": 30, "width": 80}, 
                   node_space={"padding": 30, "height": 50, "width": 120},
                   main_text_func=function(d){ return d.data.name; },
                   main_text_color_func="#000",
                   sub_text_func=function(d){ return d.data.info; },
                   sub_text_color_func="#00f",
                   head_text_func=function(d){ return d.data.head; },
                   head_text_color_func="#000",
                   node_fillcolor_func="#fff",
                   node_arialabel_func=function(d){ return d.data.note; },
                   node_id_assign_func=function(d) { return d.data.name; },
                   ){
  $.getJSON(tree_path, (data) => {
    const root = d3.hierarchy(data)
    const tree = d3.tree();
    tree(root); root.count();
    const svg_height =  root.value       * rect_size.height + (root.value - 1) * (node_space.height - rect_size.height) + node_space.padding * 2;
    const svg_width  = (root.height + 1) * rect_size.width  +  root.height     * (node_space.width - rect_size.width)   + node_space.padding * 2;
    const svg = d3.select("#" + id)
                  .append("svg")
                  .attr("width",  svg_width)
                  .attr("height", svg_height);

    const seekParent = (currentData, name) => {
      const crntHrcy = currentData.parent.children;
      const target = crntHrcy.find((contents) => contents.data.name == name);
      return target ? { name: name, hierarchy: crntHrcy } : seekParent(currentData.parent, name);
    };

    const calcLeaves = (names, currentData) => {
      const eachHierarchies = names.map((name) => seekParent(currentData, name));
      const eachIdxes = eachHierarchies.map((item) =>
        item.hierarchy.findIndex((contents) => contents.data.name == item.name)
      );
      const filteredHierarchies = eachHierarchies.map((item, idx) =>
        item.hierarchy.slice(0, eachIdxes[idx])
      );
      const values = filteredHierarchies.map((hierarchy) => hierarchy.map((item) => item.value));
      return values.flat();
    };

    const defineY = (data, spaceInfo) => {
      const ancestorValues = data.ancestors().map((item) => item.data.name);
      const leaves = calcLeaves(ancestorValues.slice(0, ancestorValues.length - 1), data);
      const sumLeaves = leaves.reduce((previous, current) => previous + current, 0);
      return sumLeaves * spaceInfo.height + spaceInfo.padding;
    };

    const definePos = (treeData, spaceInfo) => {
      treeData.each((d) => {
        // x座標は 深さ * ノード間の幅 + 左側の余白
        d.x = d.depth * spaceInfo.width + spaceInfo.padding;
        d.y = defineY(d, spaceInfo);
      });
    };

    definePos(root, node_space);

    const g = svg.append('g');
    g.selectAll('.link')
        .data(root.descendants().slice(1))
        .enter()
        .append('path')
        .attr('class', 'link')
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .attr('d', (d) =>
          `M${d.x},${d.y}
          L${d.parent.x + rect_size.width + (node_space.width - rect_size.width) / 2},${d.y}
          ${d.parent.x + rect_size.width + (node_space.width - rect_size.width) / 2},${d.parent.y}
          ${d.parent.x + rect_size.width},${d.parent.y}`
            .replace(/\r?\n/g, '')
            .replace(/\s+/g, ' ')
        )
        .attr('transform', (d) => `translate(0, ${rect_size.height / 2})`);

    const node = g
        .selectAll('.node')
        .data(root.descendants())
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', (d) => `translate(${d.x}, ${d.y})`);
    node
        .append('rect')
        .attr('class', 'node-rect')
        .attr('id', node_id_assign_func)
        .attr('aria-label', node_arialabel_func)
        .attr('width', rect_size.width)
        .attr('height', rect_size.height)
        .attr('rx', 3)
        .attr('fill', node_fillcolor_func)
        .attr('stroke', 'black')
        .attr('stroke-width', 1)
    node
        .append('text')
        .text(head_text_func)
        .attr('class', 'node-head')
        .attr('fill', head_text_color_func)
        .attr('transform', `translate(2, -3)`)
        .attr('onclick', `grouping_node(clicked_text=this.innerHTML, classname="node-head")`)
        .attr('font-size', 10);
    node
        .append('a')
        .attr('class', 'node-link')
        .attr('xlink:href', function(d) { return d.data.url; })
        .append('text')
        .text(main_text_func)
        .attr('class', 'node-main-text')
        .attr('fill', main_text_color_func)
        .attr('transform', `translate(5, 15)`)
        .attr('font-size', 15);
    node
        .append('text')
        .text(sub_text_func)
        .attr('class', 'node-sub-text')
        .attr('fill', sub_text_color_func)
        .attr('transform', `translate(5, 25)`)
        .attr('font-size', 10);
  })
}

function grouping_node(clicked_text=this.innerHTML, classname="node-head") {
  const node_heads = document.getElementsByClassName(classname);
  for(var j=0; j<node_heads.length; j++ ) {
    var jth_node = node_heads[j];
    var jth_rect = jth_node.previousElementSibling;
    if (clicked_text == jth_node.innerHTML){
      jth_rect.style["stroke"] = "blue";
      jth_rect.style["stroke-width"] =  3;          
    }else{
      jth_rect.style["stroke"] = "black";
      jth_rect.style["stroke-width"] =  1;
    }
  }
}