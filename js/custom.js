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
    $('<button class="js-btn download-svg">Download</button>').insertAfter( $(this) ).data('datatarget', idx );
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
    if (svg.hasAttribute("fillStyle")){
      ctx.fillStyle = svg.getAttribute("fillStyle");
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
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
                   svg_fillStyle="",
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
                  .attr("height", svg_height)
                  .attr("fillStyle", svg_fillStyle);

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
  add_svg_download_btn();
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

function addScript( src ){
  var script = document.createElement( 'script' );
  script.type = 'text/javascript';
  script.src  = src;
  script.onload = function() {
    console.log('[Add Script] ' + src);
  }
  document.querySelector( 'body' ).appendChild( script );
}

function addStylesheet( href ){
  var link = document.createElement( 'link' );
  link.rel = 'stylesheet';
  link.href = href;
  link.onload = function(){
    console.log("[Add StyleSheet] " + href);
  }
  document.querySelector( 'head' ).appendChild( link );
}

function addStyle(text){
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = text
  document.querySelector( 'head' ).appendChild( style )
}

function getCurtPath(){
  var path;
  if (document.currentScript) {
    path = document.currentScript.src;
  } else {
    var scripts = document.getElementsByTagName('script');
    script = scripts[scripts.length-1];
    if (script.src) {
      path = script.src;
    }
  }
  console.log("[getCurtPath] " + path)
  return path;
};


/** 
 * Checkbox Handler for Tablefilter. You can get to know "Which row is selected" by referring to "TFselectedRows".
 * @param {TableFilter} tf TableFilter Instance.
 * @param {number} c Column index where checkbox column exists.
 * @param {number} id Column index where ID column exists.
 * @param {string} selectedClassName The class name attached to selected "<tr>""
*/
var TFselectedRows = [];
function initSelectionListeners(tf, c=0, id=-1, selectedClassName='selected'){

  var headerCheckbox = tf.getHeaderElement(c).querySelector('input');
  var checkboxes = getBodyCheckboxes(tf.dom(), get_all=true);
  headerCheckbox.addEventListener('click', toggleAll.bind(tf));
  [].forEach.call(checkboxes, function(checkbox){
    checkbox.addEventListener('change', changeHandler);
  });

  function getRowIdx(row){
    if (id>=0){
      return rowIndex = row.querySelectorAll("td")[id].textContent
    }else{
      return rowIndex = row.rowIndex;
    }
  }

  function toggleAll(evt){
    var tf = this;
    var headerCheckbox = evt.target;
    var isChecked = headerCheckbox.checked;
    var checkboxes = getBodyCheckboxes(tf.dom());
    var filteredRows = tf.getValidRows();
    [].forEach.call(checkboxes, function(checkbox){
      var row = getRowElement(checkbox);
      var rowIndex = getRowIdx(row)
      if(isChecked){
        if(filteredRows.indexOf(rowIndex) === -1){
          checkbox.checked = true;
          selectRow(TFselectedRows, row, selectedClassName);
        }
      } else {
        checkbox.checked = false;
        deselectRow(TFselectedRows, row, selectedClassName)
      }
    });
  }
  function changeHandler(evt){
    var checkbox = evt.target;
    var row = getRowElement(checkbox);
    var isChecked = checkbox.checked;
    if(isChecked){
      selectRow(TFselectedRows, row, selectedClassName);
    } else {
      deselectRow(TFselectedRows, row, selectedClassName);
    }
  }
  function selectRow(TFselectedRows, row, cssClass){
    row.classList.add(cssClass);
    storeRowIndex(TFselectedRows, getRowIdx(row));
  }
  function deselectRow(TFselectedRows, row, cssClass){
    row.classList.remove(cssClass);
    removeRowIndex(TFselectedRows, getRowIdx(row));
  }
  function storeRowIndex(TFselectedRows, rowIndex){
    if(TFselectedRows.indexOf(rowIndex) === -1){
      TFselectedRows.push(rowIndex);
    }
  }
  function removeRowIndex(TFselectedRows, rowIndex){
    TFselectedRows.splice(TFselectedRows.indexOf(rowIndex), 1);
  }
  function getBodyCheckboxes(table, get_all=false){
    var checkboxes = [];
    var trs = table.tBodies[0].getElementsByTagName("tr")
    for (let i=0; i<trs.length; i++){
      let e = trs[i]
      if (get_all || e.style.display != "none"){
        checkboxes.push(e.querySelector("input"))
      }
    }
    return checkboxes;
  }
  function getRowElement(element){
    while(element !== null){
      if(element.nodeName === 'TR'){
        return element;
      }
      element = element.parentNode;
    }
    return null;
  }
};

function sound_play(base64, fmt="mp3"){
  var sound = new Audio(`data:audio/${fmt};base64,${base64}`)
  sound.play();
}
function sound_correct_answer(){
  sound_play(base64="SUQzAwCAAAAQAFRQRTEAAAAKAAAAT3RvTG9naWMAVElUMgAAABkAAABRdWl6LUNvcnJlY3RfQW5zd2VyMDItMQBUQUxCAAAADQAAAE90b0xvZ2ljLVNFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5AESgPwLgPGqAAQGANgCNAAAAEArBEcoABAQAyAJAAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV1cOf/+sO3//////////6lUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5AESQ/wBwDIAAAACAGACNAAAAEAVAEcAAAAACkCIwAACAhVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX//1cN6kxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5AEQ4/wFQBGgAAAAAGACOAAAAEAAAH+AAAAIAOAZAAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVXUTX+j7WfG6kxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5AERQ/QAAB/gAAACADgGNAAAAEAAAH+AAAAIByAY4QAAARVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xAE3Y/wAAB/gAAACAAAD/AAAAEAAAH+AAAAIAAAP8AAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVV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", fmt="mp3")
}
function sound_wrong_buzzer(){
  sound_play(base64="SUQzAwCAAAAQAFRQRTEAAAAKAAAAT3RvTG9naWMAVElUMgAAABcAAABRdWl6LVdyb25nX0J1enplcjAyLTEAVEFMQgAAAA0AAABPdG9Mb2dpYy1TRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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IckTSOnsGyBCZikdPMKGBoRTI6ewxwDsCWQRh6Sg/6IcjlZLIFT+hpOIOouQAAAWRInoUbcRA0zZAKLgpBxcO4lADk08EAGrrqKOfZmvJwEv4XNEmhmFhan//0OFsJJG5CBw6Qy8kcVSeS7NR2X8kh+oElSKYnALKk7glqurZ57GSZgOAiIzweOINf/+rq//////////XRI04okoAAABG6YXKu1Kt0kbRGYqUMK8midxIYsCGQAywaaWIxcEwyY/////////////193cieUKAJDIjUoKIMts0QU5hlFIwLh/HtIbRlZoUGF1gz4C////////+z////nFs2BwUSpocbUaSqCGKNJEhDexCyEmkkgnIqJ5AVC4uba1ZYJnTVwiEqA8LU/////////////6d6BEi2ymwH3hlLLXbHjKWlrw5iEHSCtASdWjz45GYYUdvIwkP////////////1/6NipMQU1FMy45OS41qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQBIIBEacKyGg4eBAywVjYLewIBkQjH4DhgGC9h6OxhgygqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqhxIQACY75htggmKQuvMvLwPbux8c9P//+7/7f//q////Lja7Gi2MY1lKCKkIDZBjQBeAZAjiB1aTSpPIqsaDpDf///////////////9tBoRAeyBH1dKA7d0qLoxiQLM/RlWC//////////u//1/+M5YQCMlwgC44gShxiivbViMIrDv///////////////V6e9MQU1FMy45OS41qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uQBImFMWYKRkAvYBAhYRj0AewBBHgfGyeNhEB8g+QRBqRQqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqikpAACgDTkLIr+0RNBc////////////X///92nqLQkAAKGQWEROmxCEwl////////////////0aFsQAYwt1kM////////////////bmls1lADAPthPH1Hv//////////9f//0q6eiKV3C9MQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//uQBHYDcOgIR0ApGEAb4Hj4BSEDAtANHKAMYABqAaNgBKQAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVSAEAAAMO/jf///////////////f+SQFiAAAxjiv//////////////9/TNxJTWKOSq12sz////////////6f/+93Lai4BWP0f////////////////rVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//uQBGuHcLoCx0ACAAAZAGjVACIAAsADGgAAAAA5ACPAAAAEVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQBN2P8AAAf4AAAAgAAA/wAAABAAAB/gAAACAAAD/AAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xAE3Y/wAAB/gAAACAAAD/AAAAEAAAH+AAAAIAAAP8AAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EATdj/AAAH+AAAAIAAAP8AAAAQAAAf4AAAAgAAA/wAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQBN2P8AAAf4AAAAgAAA/wAAABAAAB/gAAACAAAD/AAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xAE3Y/wAAB/gAAACAAAD/AAAAEAAAH+AAAAIAAAP8AAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EATdj/AAAH+AAAAIAAAP8AAAAQAAAf4AAAAgAAA/wAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xAE3Y/wAAB/gAAACAAAD/AAAAEAAAH+AAAAIAAAP8AAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqjH//7+/f/+7///3d1f/9FpTSimnrY7VQ//7EATdj/AAAH+AAAAIAAAP8AAAAQAAAf4AAAAgAAA/wAAABIAgEJCgtUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQBN2P8AAAf4AAAAgAAA/wAAABAAAB/gAAACAAAD/AAAAEVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5AEUA/wAAB/gAAACAAAD/AAAAEDtAEWAAAAAAAAP8AAAARVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xAE3Y/wAAB/gAAACAAAD/AAAAEAAAH+AAAAIAAAP8AAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EATdj/AAAH+AAAAIAAAP8AAAAQAAAf4AAAAgAAA/wAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQBN2P8AAAf4AAAAgAAA/wAAABAAAB/gAAACAAAD/AAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xAE3Y/wAAB/gAAACAAAD/AAAAEAAAH+AAAAIAAAP8AAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EATdj/AAAH+AAAAIAAAP8AAAAQAAAf4AAAAgAAA/wAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQBN2P8AAAf4AAAAgAAA/wAAABAAAB/gAAACAAAD/AAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xAE3Y/wAAB/gAAACAAAD/AAAAEAAAH+AAAAIAAAP8AAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EATdj/AAAH+AAAAIAAAP8AAAAQAAAf4AAAAgAAA/wAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQpiEf/+vP7Hez9///9X97eyuv2+q2iU1LSRuQRYJ//sQBN2P8AAAf4AAAAgAAA/wAAABAAAB/gAAACAAAD/AAAAE3tFixIqMTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xAE3Y/wAAB/gAAACAAAD/AAAAEAAAH+AAAAIAAAP8AAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7kARTD/EgAEUAAAAAAAAP8AAAAQAAAf4AAAAgAAA/wAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/3vL//l/+uay//5c//+n63//+v+m9P/6f+jF5vS1Nm96PKVVW2V3dUPBL7TEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7kARXD/AAAH+AAAAILA3YoAQC8EAAAf4AAAAgAAA/wAAABFVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EATdj/AAAH+AAAAIAAAP8AAAAQAAAf4AAAAgAAA/wAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQBN2P8AAAf4AAAAgAAA/wAAABAAAB/gAAACAAAD/AAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xAE3Y/wAAB/gAAACAAAD/AAAAEAAAH+AAAAIAAAP8AAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EATdj/AAAH+AAAAIAAAP8AAAAQAAAf4AAAAgAAA/wAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQBN2P8AAAf4AAAAgAAA/wAAABAAAB/gAAACAAAD/AAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xAE3Y/wAAB/gAAACAAAD/AAAAEAAAH+AAAAIAAAP8AAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EATdj/AAAH+AAAAIAAAP8AAAAQAAAf4AAAAgAAA/wAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQBN2P8AAAf4AAAAgAAA/wAAABAAAB/gAAACAAAD/AAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xAE3Y/wAAB/gAAACAAAD/AAAAEAAAH+AAAAIAAAP8AAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==", fmt="mp3")
}