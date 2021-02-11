/*****************************************************************
** Author: iwasakishuto <https://github.com/iwasakishuto>
**
** A plugin for reveal.js adding a mouse pointer.
**
** License: MIT license
**
******************************************************************/

window.RevealMousePointer = window.RevealMousePointer || {
	id: 'RevealMousePointer',
	init: function(deck) {
    initMousePointer(deck);
	},
  configure: function(config) { configure(config); },
  toggleMousePointer: function() { toggleMousePointer(); },
}

const initMousePointer = function(Reveal){
  /*********************
	** Default Settings.
  **********************/
  var toggleBind = false;
  var toggleMousePointerButton = true;
  var pointerSize = 30;
  var pointerZindex = 1;
  var pointerColor = "rgba(255, 0, 0, 0.4)";
  
  /*********************
	** Configuration.
  **********************/
  var config = configure( Reveal.getConfig().mousepointer || {} );
  if ( config.keyBindings ) {
		for (var key in config.keyBindings) {
			keyBindings[key] = config.keyBindings[key];
		};
  }
  var keyBindings = { 
		toggleMousePointer: { keyCode: 80,  key: 'P', description: '<i class="fas fa-circle" style="color: ' + pointerColor + ';"></i> Toggle Mouse Pointer' },
  };

	function configure( config ) {
		if (config.toggleMousePointerButton != undefined) toggleMousePointerButton = config.toggleMousePointerButton;
    if (config.pointerSize ) pointerSize = config.pointerSize;
    if (config.pointerColor ) pointerColor = config.pointerColor;
    if (config.pointerZindex ) pointerZindex = config.pointerZindex;
		return config;
  }

  if ( toggleMousePointerButton ) {
		var button = document.createElement( 'div' );
		button.className = "mousepointer-button";
		button.id = "toggle-mousepointer";
		button.style.visibility = "visible";
		button.style.position = "absolute";
		button.style.zIndex = 30;
		button.style.fontSize = "24px";

		button.style.left   = toggleMousePointerButton.left   || "30px";
		button.style.bottom = toggleMousePointerButton.bottom || "30px";
		button.style.top    = toggleMousePointerButton.top    || "auto";
		button.style.right  = toggleMousePointerButton.right  || "auto";
    button.innerHTML = '<a href="#" onclick="RevealMousePointer.toggleMousePointer(); return false;"><i class="fas fa-circle" style="color: ' + pointerColor + '"></i></a>'
		document.querySelector(".reveal").appendChild( button );
  }

  const reveal = document.querySelector(".reveal")
  var tail = document.createElement('div')
  Object.assign(tail.style, {
    position: 'absolute',
    float: 'left',
    borderRadius: '50%',
    width: pointerSize + "px",
    height: pointerSize + "px",
    backgroundColor: pointerColor,
    zIndex: pointerZindex,
    display: 'none'
  })
  reveal.appendChild(tail)

  function mouse_pointing(e) {
    tail.style.display = 'block'
    tail.style.left = e.pageX - pointerSize/2 + 'px'
    tail.style.top  = e.pageY - pointerSize/2 + 'px'
  }

  function toggleMousePointer(){
    toggleBind = !toggleBind;
    if (!toggleBind) {
			document.removeEventListener('mousemove', mouse_pointing)
			tail.style.display = 'none'
      reveal.style.cursor = 'auto'
      document.querySelector("#toggle-mousepointer > a").innerHTML = '<i class="fas fa-circle" style="color: ' + pointerColor + '"></i>'
		} else {
			tail.style.display = 'block'
			reveal.style.cursor = 'none'
      document.addEventListener('mousemove', mouse_pointing);
      document.querySelector("#toggle-mousepointer > a").innerHTML = '<i class="fas fa-mouse-pointer"></i>'
    }
  }

  this.toggleMousePointer = toggleMousePointer;
  this.configure = configure;
	for (var key in keyBindings) {
		if ( keyBindings[key] ) {
			Reveal.addKeyBinding( keyBindings[key], RevealMousePointer[key] );
		}
	};
	return this;
};
