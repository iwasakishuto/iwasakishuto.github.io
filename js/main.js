var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
var isMobile = false;
var opened = false;
function init() {

  canvas = document.getElementById("canvas");
  anim_container = document.getElementById("animation_container");
  //dom_overlay_container = document.getElementById("dom_overlay_container");
  images = images || {};
  ss = ss || {};
  var loader = new createjs.LoadQueue(false);
  loader.addEventListener("fileload", handleFileLoad);
  loader.addEventListener("complete", handleComplete);
  loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {
  if (evt.item.type == "image") {
    images[evt.item.id] = evt.result;
  }
}
function handleComplete(evt) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var queue = evt.target;
  var ssMetadata = lib.ssMetadata;
  for (i = 0; i < ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet({"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames})
  }
  exportRoot = new lib.index();
  stage = new createjs.Stage(canvas);
  stage.addChild(exportRoot);
  //Registers the "tick" event listener.
  fnStartAnimation = function () {
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
  }
  //Code to support hidpi screens and responsive scaling.
  function makeResponsive(isResp, respDim, isScale, scaleType) {
    var lastW, lastH, lastS = 1;
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width, h = lib.properties.height;
      var iw = window.getComputedStyle(document.getElementById("irm-infographic")).width || document.getElementById("irm-infographic").style.width;
      iw = Number(iw.slice(0, -2));
      iw -= iw % 2;
      var ih = window.getComputedStyle(document.getElementById("irm-infographic")).height || document.getElementById("irm-infographic").style.height;
      ih = Number(ih.slice(0, -2));
      ih -= ih % 2;
      var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
      if (isResp) {
        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
          sRatio = lastS;
        }
        else if (!isScale) {
          if (iw < w || ih < h)
            sRatio = Math.min(xRatio, yRatio);
        }
        else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        }
        else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      canvas.width = w * pRatio * sRatio;
      canvas.height = h * pRatio * sRatio;
      canvas.style.width = anim_container.style.width = w * sRatio + 'px';
      canvas.style.height = anim_container.style.height = h * sRatio + 'px';
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
    }
  }
  isMobile = mobileAndTabletcheck();
  if (isMobile) {
    createjs.Touch.enable(stage, false, true);
    stage.preventSelection = false;
    //$('#videoHTML').remove();
  } else {
    stage.enableMouseOver();
  }
  createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
  fnStartAnimation();
  //makeResponsive(false,'both',false,1);
  onResizeListener();
  window.addEventListener('resize', onResizeListener);
  stage.update();
}

var width, height;
var ratio = 1;
var sc = 1;
function onResizeListener() {
  width = window.getComputedStyle(document.getElementById("irm-infographic")).width || document.getElementById("irm-infographic").style.width;
  height = window.getComputedStyle(document.getElementById("irm-infographic")).height || document.getElementById("irm-infographic").style.height;
  width = Number(width.slice(0, -2));
  height = Number(height.slice(0, -2));
  width -= width % 2;
  height -= height % 2;
  ratio = window.devicePixelRatio || 1;
  sc = 1;
  if (isMobile)
    ratio = 2;
  if (ratio > 1)
    sc = 1.5;
  if (stage)
    stage.scaleX = stage.scaleY = ratio;
  if (canvas) {
    canvas.width = ratio * width;
    canvas.height = ratio * height;
    canvas.style.width = anim_container.style.width = width + 'px';
    canvas.style.height = anim_container.style.height = height + 'px';
  }
  console.log(width);
  if (width > 1150) {
    exportRoot.mainCenter.dna.wireless.rotation = 0;
    exportRoot.mainCenter.dna.itusers.rotation = 0;
    createjs.Tween.get(exportRoot.mainCenter.dna.wireless, {override: true}).wait(100).to({x: -245}, 800, createjs.Ease.quintOut);
    createjs.Tween.get(exportRoot.mainCenter.dna.itusers, {override: true}).wait(100).to({x: -245}, 800, createjs.Ease.quintOut);
    if (exportRoot.mainCenter.dna.wireless.checkRotationAll)
      exportRoot.mainCenter.dna.wireless.checkRotationAll();
    if (exportRoot.mainCenter.dna.itusers.checkRotationAll)
      exportRoot.mainCenter.dna.itusers.checkRotationAll();
  } else {
    exportRoot.mainCenter.dna.wireless.rotation = 180;
    exportRoot.mainCenter.dna.itusers.rotation = 180;
    createjs.Tween.get(exportRoot.mainCenter.dna.wireless, {override: true}).wait(100).to({x: 100}, 800, createjs.Ease.quintOut);
    createjs.Tween.get(exportRoot.mainCenter.dna.itusers, {override: true}).wait(100).to({x: 100}, 800, createjs.Ease.quintOut);
    if (exportRoot.mainCenter.dna.wireless.checkRotationAll)
      exportRoot.mainCenter.dna.wireless.checkRotationAll();
    if (exportRoot.mainCenter.dna.itusers.checkRotationAll)
      exportRoot.mainCenter.dna.itusers.checkRotationAll();
  }
  if (exportRoot) {
    exportRoot.mainCenter.scaleX = exportRoot.mainCenter.scaleY = 1;
    //exportRoot.mainCenter.scaleX = exportRoot.mainCenter.scaleY = Math.max(1, width/1500);
    exportRoot.mainCenter.x = width * .28;
    exportRoot.mainCenter.y = height * .33;
    if (width < 1050 && width > 850) {
      exportRoot.mainCenter.x = width * .3;
    }
    if (width < 850 && width > 700) {
      exportRoot.mainCenter.scaleX = exportRoot.mainCenter.scaleY = width / 900;
      exportRoot.mainCenter.x = width * .35;
    }
    if (width < 700 && width > 650) {
      exportRoot.mainCenter.scaleX = exportRoot.mainCenter.scaleY = width / 800;
      exportRoot.mainCenter.x = width * .4;
    }
    if (width < 650 && width > 550) {
      exportRoot.mainCenter.scaleX = exportRoot.mainCenter.scaleY = width / 750;
      exportRoot.mainCenter.x = width * .4;
    }
    if (width < 550 && width > 500) {
      exportRoot.mainCenter.scaleX = exportRoot.mainCenter.scaleY = width / 700;
      exportRoot.mainCenter.x = width * .4;
    }
    if (width <= 500) {
      exportRoot.mainCenter.scaleX = exportRoot.mainCenter.scaleY = width / 650;
      exportRoot.mainCenter.x = width * .4;
    }

  }
}

function mobileAndTabletcheck() {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

var popupAnimTime = 1;
var mySplitText;
var chars;
function returnPointerEvent() {
  document.getElementById('page_wrap').style.pointerEvents = "auto";
}

var farrow = false;
$(document).ready(function () {
  /*
   document.getElementById('videoHTML').play();
   */
  function hide_modal() {
    $('.modalbox, .modalbox2').hide();
    $('#dna').show();
  }
  $('.close-btn, .close-btn-bottom, #all_close, #all_close_but').click(function () {
    $('.dna_mob').removeClass('openc');
    $('#irm-infographic').removeClass('open_s_window');
    exportRoot.resetButtons();
    opened = false;
    if (isMobile) {
      $('.modalbox, .modalbox2').hide();
      onResizeListener();
    }
    else {
      TweenMax.to('.modalbox', 0.5, {ease: Expo.easeInOut, opacity: 0, scaleX: .1, scaleY: .1, onComplete: hide_modal});
      TweenMax.to('.modalbox2', 0.5, {ease: Expo.easeInOut, opacity: 0, scaleX: .1, scaleY: .1, onComplete: hide_modal});
    }
    $('#irm-infographic').removeClass('open_infographic');
    // createjs.Tween.get(exportRoot.mainCenter).to({x:width * .5}, 1200, createjs.Ease.quintInOut);


  });

  $('.modalbox .sections .options .button').click(function () {
    if ($(this).parents('.options').hasClass('open')) {
      $(this).parents('.options').removeClass('open');
      if (isMobile) {
        $(this).parents('.options').find('.description-large').hide();
        $('#irm-infographic').removeClass('open_infographic');
      }
      else {
        $(this).parents('.options').find('.description-large').animate({'height': 'hide'}, function () {
          $('#irm-infographic').removeClass('open_infographic');
        });
      }
    } else {
      if (isMobile) {
        $('.modalbox .sections .options.open').removeClass('open').find('.description-large').hide();
        $('#irm-infographic').addClass('open_infographic');
        $(this).parents('.options').addClass('open');
        $(this).parents('.options').find('.description-large').show();
      }
      else {
        $('.modalbox .sections .options.open').removeClass('open').find('.description-large').animate({'height': 'hide'});
        $('#irm-infographic').addClass('open_infographic');
        $(this).parents('.options').addClass('open');
        $(this).parents('.options').find('.description-large').animate({'height': 'show'});
      }
    }
  });

  $(window).load(function () {
    setTimeout(function () {
      onResizeListener();
    }, 500);
  });
});

function modalAnimation(num) {
  $('#irm-infographic').addClass('open_s_window');
  $('.modalbox, .modalbox2, #dna').hide();

  $('#all_close').show();

  $('.dna_mob').addClass('openc');

  opened = true;
  /*if (isMobile) {
   $('#view'+num).show();
   createjs.Tween.get(exportRoot.mainCenter).to({x:width * .3}, 1200, createjs.Ease.quintInOut);
   }
   else {*/
  //createjs.Tween.get(exportRoot.mainCenter).to({x:width * .3}, 1200, createjs.Ease.quintInOut);
  // animate of window
  TweenMax.to('#view' + num, 0.5, {ease: Expo.easeInOut, opacity: 1, display: "block", scaleX: 1, scaleY: 1});
  /*
   TweenMax.to('#view'+num+' .blur.icon1', 0.5, {ease:Expo.easeInOut, opacity:0, display:"block", scaleX:1, scaleY:1});
   TweenMax.to('#view'+num+' .blur.icon2', 0.5, {ease:Expo.easeInOut, opacity:0, display:"block", scaleX:1, scaleY:1});
   TweenMax.to('#view'+num+' .blur.icon3', 0.5, {ease:Expo.easeInOut, opacity:0, display:"block", scaleX:1, scaleY:1});
   */
  //animate of "Insight & Experience" words
  TweenMax.from('#view' + num + ' .dna', popupAnimTime, {ease: Expo.easeInOut, opacity: 0, delay: 0.2, x: "+500"});

  TweenMax.from('#view' + num + ' h1', popupAnimTime, {ease: Expo.easeInOut, opacity: 0, delay: 0.2, x: "+500"});

  //animate of white line
  TweenMax.from('#view' + num + ' .hr', 1, {ease: Back.easeInOut.config(1, 0.3), opacity: 0, delay: 0.4, scaleX: .1, scaleY: .1, transformOrigin: "0% 0%"});

  //animate of close button
  TweenMax.staggerFrom('#view' + num + ' .close-btn', 0.9, {ease: Back.easeInOut.config(1), delay: 1.6, opacity: 0, scaleX: .1, scaleY: .1}, 0.5);

  //animate of 56% text
  TweenMax.staggerFrom('#view' + num + ' .header-block .number', 0.9, {ease: Elastic.easeOut.config(1, 0.5), delay: .7, opacity: 0, scaleX: .1, scaleY: .1}, 0.5);

  //animate of 56% text
  TweenMax.staggerFrom('#view' + num + ' .header-block .number .proc', 0.9, {ease: Elastic.easeOut.config(1, 0.5), delay: .9, opacity: 0, scaleX: .1, scaleY: .1}, 0.5);

  //animate of text nearly 56% text
  /*TweenMax.from('#view'+num+' .header-block .text-h', popupAnimTime, {ease:Expo.easeInOut, opacity:0, delay:0.6, x:"+300"});*/

  //animate of text paragraph
  var txt = $('#view' + num + ' .header-block .text-h').text();
  TweenMax.to('#view' + num + ' .header-block .text-h', 1, {scrambleText: {text: txt, chars: "lowerCase", revealDelay: 0.5, tweenLength: true, ease: Linear.easeNone}});

  //animate of text paragraph
  TweenMax.from('#view' + num + ' .text p', popupAnimTime, {ease: Expo.easeInOut, opacity: 0, delay: 0.6, x: "+300"});

  //animate of list
  TweenMax.staggerFrom('#view' + num + ' .text ul li', 0.5, {delay: 1.4, scaleX: 0, scaleY: 0, ease: Back.easeOut}, .05);

  //animate of buttons
  TweenMax.staggerFrom('#view' + num + ' .sections .options ', 0.5, {delay: 1.7, scaleX: 0, scaleY: 0, ease: Back.easeOut}, .05);
  //}
}


function modalAnimation2(num) {
  $('#irm-infographic').addClass('open_s_window');
  $('.modalbox, .modalbox2, #dna').hide();
  $('.dna_mob').addClass('openc');

  opened = true;
  TweenMax.to('#dna_' + num, 0.5, {ease: Expo.easeInOut, opacity: 1, display: "block", scaleX: 1, scaleY: 1});

  TweenMax.from('#dna_' + num + ' .dna', popupAnimTime, {ease: Expo.easeInOut, opacity: 0, delay: 0.2, x: "+500"});
  //animate of "Insight & Experience" words
  TweenMax.from('#dna_' + num + ' h1', popupAnimTime, {ease: Expo.easeInOut, opacity: 0, delay: 0.2, x: "+500"});
  //animate of white line
  TweenMax.from('#dna_' + num + ' .hr', 1, {ease: Back.easeInOut.config(1, 0.3), opacity: 0, delay: 0.4, scaleX: .1, scaleY: .1, transformOrigin: "0% 0%"});
  //animate of close button
  TweenMax.staggerFrom('#dna_' + num + ' .close-btn', 0.9, {ease: Back.easeInOut.config(1), delay: 1.6, opacity: 0, scaleX: .1, scaleY: .1}, 0.5);
  //animate of text paragraph
  TweenMax.from('#dna_' + num + ' .text', popupAnimTime, {ease: Expo.easeInOut, opacity: 0, delay: 0.2, x: "+500"});
}
