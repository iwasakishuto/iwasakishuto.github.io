// Animation CC を利用しているため、文字列がエンコードされている。

(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[0,470,399,468],[401,0,399,468],[80,2001,32,29],[802,0,161,118],[0,2001,78,40],[401,470,401,446],[401,1365,399,445],[0,1387,282,612],[401,918,399,445],[0,0,399,468],[0,940,399,440],[284,1812,560,230]]}
];



// symbols:


(lib.Bitmap1 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();


(lib.Bitmap10 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wirelessBTB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	/*=====================
	以下の .p() を削除した結果、
	- Wireless Users
	- IT Users
	のリンクを押せなくなった。
	=====================*/
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9B30BE").s()//.p("AuIGQIAAsfIcRAAIAAMfg");
	this.shape.setTransform(90.5,40);
	this.shape._off = true;


	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(0,0,181,80)];

/*=== Wireless Users ===*/
(lib.wireless2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	/*
	//=== Wireless Users にカーソルを乗せると文字の色が変わる。 ===
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9B30BE").s().p("AgwBKQgTgPgDgXIAgAAQACAPALAGQAKAHAQAAQATAAAKgIQAJgHAAgLQAAgHgDgGQgDgEgHgDQgGgDgJgDIgTgFQgdgGgNgLQgNgLAAgTQAAgWARgNQAQgMAfAAQAcAAASAMQASAOAEAWIgfAAQgDgLgJgHQgJgGgQAAQgQAAgJAGQgIAFAAAKQAAAEACAEQACADAEADQAEADAHADIATAFQAPADAMAEQAMAEAIAGQAIAFAFAJQAFAJAAANQAAALgFAKQgFAJgJAHQgJAHgMAEQgNAEgRAAQgeAAgTgOg");
	this.shape.setTransform(13.3,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B30BE").s().p("AgsBVIAAilIAZAAIAFAZQAOgeAaAAIAMABIAHACIAAAeIgKgCIgKAAQgHAAgIACQgHAEgFAGQgFAIgDAKQgEALABAPIAABTg");
	this.shape_1.setTransform(0.8,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B30BE").s().p("AgeBTQgOgGgLgLQgLgLgGgQQgGgRAAgWQAAgVAGgRQAGgQAKgLQALgLAPgGQAPgFAQAAQARAAAOAFQAPAFAKAMQAKALAGATQAGARAAAYIh+AAQACAdAOANQAPAOATAAQAQAAAKgHQALgJAEgLIAhAAQgDAMgHAJQgGAJgKAIQgJAHgNAEQgMAEgPAAQgRAAgPgFgAgdgzQgNALgDAXIBcAAQgBgXgNgLQgNgLgSAAQgSgBgNAMg");
	this.shape_2.setTransform(-15.1,21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B30BE").s().p("AgwBKQgTgPgDgXIAgAAQACAPALAGQAKAHAQAAQATAAAKgIQAJgHAAgLQAAgHgDgGQgDgEgHgDQgGgDgJgDIgTgFQgdgGgNgLQgNgLAAgTQAAgWARgNQAQgMAfAAQAcAAASAMQASAOAEAWIgfAAQgDgLgJgHQgJgGgQAAQgQAAgJAGQgIAFAAAKQAAAEACAEQACADAEADQAEADAHADIATAFQAPADAMAEQAMAEAIAGQAIAFAFAJQAFAJAAANQAAALgFAKQgFAJgJAHQgJAHgMAEQgNAEgRAAQgeAAgTgOg");
	this.shape_3.setTransform(-32.4,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9B30BE").s().p("AglBwQgQgGgMgLQgMgKgGgQQgHgPAAgSIAAiZIAhAAIAACcQAAAXAPAOQAPAOAbAAQAdAAAPgOQAPgOAAgXIAAicIAgAAIAACZQAAATgHAPQgGAPgMALQgMAKgRAGQgQAGgVAAQgUAAgRgGg");
	this.shape_4.setTransform(-51.5,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9B30BE").s().p("AgwBKQgTgPgDgXIAgAAQACAPALAGQAKAHAQAAQATAAAKgIQAJgHAAgLQAAgHgDgGQgDgEgHgDQgGgDgJgDIgTgFQgdgGgNgLQgNgLAAgTQAAgWARgNQAQgMAfAAQAcAAASAMQASAOAEAWIgfAAQgDgLgJgHQgJgGgQAAQgQAAgJAGQgIAFAAAKQAAAEACAEQACADAEADQAEADAHADIATAFQAPADAMAEQAMAEAIAGQAIAFAFAJQAFAJAAANQAAALgFAKQgFAJgJAHQgJAHgMAEQgNAEgRAAQgeAAgTgOg");
	this.shape_5.setTransform(54.5,-17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9B30BE").s().p("AgwBKQgTgPgDgXIAgAAQACAPALAGQAKAHAQAAQATAAAKgIQAJgHAAgLQAAgHgDgGQgDgEgHgDQgGgDgJgDIgTgFQgdgGgNgLQgNgLAAgTQAAgWARgNQAQgMAfAAQAcAAASAMQASAOAEAWIgfAAQgDgLgJgHQgJgGgQAAQgQAAgJAGQgIAFAAAKQAAAEACAEQACADAEADQAEADAHADIATAFQAPADAMAEQAMAEAIAGQAIAFAFAJQAFAJAAANQAAALgFAKQgFAJgJAHQgJAHgMAEQgNAEgRAAQgeAAgTgOg");
	this.shape_6.setTransform(38.4,-17.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9B30BE").s().p("AgdBTQgPgGgLgLQgLgLgGgQQgGgRAAgWQAAgVAGgRQAGgQALgLQAKgLAPgGQAOgFARAAQARAAAPAFQAOAFAKAMQAKALAGATQAGARAAAYIh+AAQACAdAPANQAOAOATAAQAQAAAKgHQALgJAEgLIAhAAQgDAMgGAJQgHAJgJAIQgKAHgNAEQgMAEgPAAQgQAAgPgFgAgdgzQgNALgDAXIBcAAQgBgXgMgLQgNgLgUAAQgRgBgNAMg");
	this.shape_7.setTransform(21.2,-17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9B30BE").s().p("AgOBzIAAjlIAdAAIAADlg");
	this.shape_8.setTransform(8.4,-21.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9B30BE").s().p("AgeBTQgOgGgLgLQgLgLgGgQQgGgRAAgWQAAgVAGgRQAGgQAKgLQALgLAPgGQAPgFAQAAQARAAAOAFQAPAFAKAMQALALAFATQAGARAAAYIh+AAQACAdAOANQAOAOAVAAQAPAAALgHQAKgJADgLIAiAAQgDAMgGAJQgHAJgKAIQgJAHgMAEQgMAEgPAAQgSAAgPgFgAgdgzQgNALgEAXIBeAAQgCgXgNgLQgNgLgSAAQgSgBgNAMg");
	this.shape_9.setTransform(-4.5,-17.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9B30BE").s().p("AgsBVIAAilIAZAAIAEAZQAPgeAbAAIAKABIAIACIAAAeIgJgCIgKAAQgJAAgHACQgHAEgEAGQgGAIgDAKQgDALgBAPIAABTg");
	this.shape_10.setTransform(-18.1,-18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9B30BE").s().p("AgOBzIAAilIAdAAIAAClgAgQhOIAAgkIAhAAIAAAkg");
	this.shape_11.setTransform(-28.5,-21.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9B30BE").s().p("AA2BzIg0jCIg1DCIgoAAIg9jlIAiAAIAxC/IA0i/IApAAIAxC+IAyi+IAdAAIg8Dlg");
	this.shape_12.setTransform(-47.4,-21.1);
	*/
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wireless2_mc, rect = new cjs.Rectangle(-64.8,-43.6,129.7,87.2), [rect]);

(lib.wireless1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	/*
	//=== 普段の文字が消える ===
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4D6ED").s().p("AgwBKQgTgPgDgXIAgAAQACAPALAGQAKAHAQAAQATAAAKgIQAJgHAAgLQAAgHgDgGQgDgEgHgDQgGgDgJgDIgTgFQgdgGgNgLQgNgLAAgTQAAgWARgNQAQgMAfAAQAcAAASAMQASAOAEAWIgfAAQgDgLgJgHQgJgGgQAAQgQAAgJAGQgIAFAAAKQAAAEACAEQACADAEADQAEADAHADIATAFQAPADAMAEQAMAEAIAGQAIAFAFAJQAFAJAAANQAAALgFAKQgFAJgJAHQgJAHgMAEQgNAEgRAAQgeAAgTgOg");
	this.shape.setTransform(13.3,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4D6ED").s().p("AgsBVIAAilIAZAAIAFAZQAOgeAaAAIAMABIAHACIAAAeIgKgCIgKAAQgHAAgIACQgHAEgFAGQgFAIgDAKQgEALABAPIAABTg");
	this.shape_1.setTransform(0.8,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4D6ED").s().p("AgeBTQgOgGgLgLQgLgLgGgQQgGgRAAgWQAAgVAGgRQAGgQAKgLQALgLAPgGQAPgFAQAAQARAAAOAFQAPAFAKAMQAKALAGATQAGARAAAYIh+AAQACAdAOANQAPAOATAAQAQAAAKgHQALgJAEgLIAhAAQgDAMgHAJQgGAJgKAIQgJAHgNAEQgMAEgPAAQgRAAgPgFgAgdgzQgNALgDAXIBcAAQgBgXgNgLQgNgLgSAAQgSgBgNAMg");
	this.shape_2.setTransform(-15.1,21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4D6ED").s().p("AgwBKQgTgPgDgXIAgAAQACAPALAGQAKAHAQAAQATAAAKgIQAJgHAAgLQAAgHgDgGQgDgEgHgDQgGgDgJgDIgTgFQgdgGgNgLQgNgLAAgTQAAgWARgNQAQgMAfAAQAcAAASAMQASAOAEAWIgfAAQgDgLgJgHQgJgGgQAAQgQAAgJAGQgIAFAAAKQAAAEACAEQACADAEADQAEADAHADIATAFQAPADAMAEQAMAEAIAGQAIAFAFAJQAFAJAAANQAAALgFAKQgFAJgJAHQgJAHgMAEQgNAEgRAAQgeAAgTgOg");
	this.shape_3.setTransform(-32.4,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4D6ED").s().p("AglBwQgQgGgMgLQgMgKgGgQQgHgPAAgSIAAiZIAhAAIAACcQAAAXAPAOQAPAOAbAAQAdAAAPgOQAPgOAAgXIAAicIAgAAIAACZQAAATgHAPQgGAPgMALQgMAKgRAGQgQAGgVAAQgUAAgRgGg");
	this.shape_4.setTransform(-51.5,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C4D6ED").s().p("AgwBKQgTgPgDgXIAgAAQACAPALAGQAKAHAQAAQATAAAKgIQAJgHAAgLQAAgHgDgGQgDgEgHgDQgGgDgJgDIgTgFQgdgGgNgLQgNgLAAgTQAAgWARgNQAQgMAfAAQAcAAASAMQASAOAEAWIgfAAQgDgLgJgHQgJgGgQAAQgQAAgJAGQgIAFAAAKQAAAEACAEQACADAEADQAEADAHADIATAFQAPADAMAEQAMAEAIAGQAIAFAFAJQAFAJAAANQAAALgFAKQgFAJgJAHQgJAHgMAEQgNAEgRAAQgeAAgTgOg");
	this.shape_5.setTransform(54.5,-17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C4D6ED").s().p("AgwBKQgTgPgDgXIAgAAQACAPALAGQAKAHAQAAQATAAAKgIQAJgHAAgLQAAgHgDgGQgDgEgHgDQgGgDgJgDIgTgFQgdgGgNgLQgNgLAAgTQAAgWARgNQAQgMAfAAQAcAAASAMQASAOAEAWIgfAAQgDgLgJgHQgJgGgQAAQgQAAgJAGQgIAFAAAKQAAAEACAEQACADAEADQAEADAHADIATAFQAPADAMAEQAMAEAIAGQAIAFAFAJQAFAJAAANQAAALgFAKQgFAJgJAHQgJAHgMAEQgNAEgRAAQgeAAgTgOg");
	this.shape_6.setTransform(38.4,-17.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C4D6ED").s().p("AgdBTQgPgGgLgLQgLgLgGgQQgGgRAAgWQAAgVAGgRQAGgQALgLQAKgLAPgGQAOgFARAAQARAAAPAFQAOAFAKAMQAKALAGATQAGARAAAYIh+AAQACAdAPANQAOAOATAAQAQAAAKgHQALgJAEgLIAhAAQgDAMgGAJQgHAJgJAIQgKAHgNAEQgMAEgPAAQgQAAgPgFgAgdgzQgNALgDAXIBcAAQgBgXgMgLQgNgLgUAAQgRgBgNAMg");
	this.shape_7.setTransform(21.2,-17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C4D6ED").s().p("AgOBzIAAjlIAdAAIAADlg");
	this.shape_8.setTransform(8.4,-21.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C4D6ED").s().p("AgeBTQgOgGgLgLQgLgLgGgQQgGgRAAgWQAAgVAGgRQAGgQAKgLQALgLAPgGQAPgFAQAAQARAAAOAFQAPAFAKAMQALALAFATQAGARAAAYIh+AAQACAdAOANQAOAOAVAAQAPAAALgHQAKgJADgLIAiAAQgDAMgGAJQgHAJgKAIQgJAHgMAEQgMAEgPAAQgSAAgPgFgAgdgzQgNALgEAXIBeAAQgCgXgNgLQgNgLgSAAQgSgBgNAMg");
	this.shape_9.setTransform(-4.5,-17.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C4D6ED").s().p("AgsBVIAAilIAZAAIAEAZQAPgeAbAAIAKABIAIACIAAAeIgJgCIgKAAQgJAAgHACQgHAEgEAGQgGAIgDAKQgDALgBAPIAABTg");
	this.shape_10.setTransform(-18.1,-18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C4D6ED").s().p("AgOBzIAAilIAdAAIAAClgAgQhOIAAgkIAhAAIAAAkg");
	this.shape_11.setTransform(-28.5,-21.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C4D6ED").s().p("AA2BzIg0jCIg1DCIgoAAIg9jlIAiAAIAxC/IA0i/IApAAIAxC+IAyi+IAdAAIg8Dlg");
	this.shape_12.setTransform(-47.4,-21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	*/

}).prototype = getMCSymbolPrototype(lib.wireless1_mc, rect = new cjs.Rectangle(-64.8,-43.6,129.7,87.2), [rect]);

(lib.whiteRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	/*
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-200,-224);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	*/

}).prototype = getMCSymbolPrototype(lib.whiteRight, rect = new cjs.Rectangle(-200,-224,399,445), [rect]);


(lib.testblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	/*=== Layer 1 ===*/
	// DNAの塩基対。
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDEDED").s().p("EgmzADlQhvABhOhDQhPhEAAhfQAAhfBPhDQBOhDBvAAMBNnAAAQBvAABPBDQBOBDAABfQAABfhOBEQhPBDhvgBg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDEDED").s().p("Egm8ADnQhvAAhPhEQhPhEAAhfQAAhfBPhDQBPhEBvAAMBN5AAAQBvAABQBEQBOBDAABfQAABfhOBEQhQBEhvAAg");
	this.shape_1.setTransform(0,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDEDED").s().p("EgnEADoQhxAAhOhDQhPhFAAhgQAAhgBPhEQBOhDBxAAMBOJAAAQBxAABPBDQBOBEAABgQAABghOBFQhPBDhxAAg");
	this.shape_2.setTransform(0,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDEDED").s().p("EgnNADqQhxAAhPhFQhQhFAAhgQAAhhBQhEQBPhEBxAAMBObAAAQBxAABQBEQBPBEAABhQAABghPBFQhQBFhxAAg");
	this.shape_3.setTransform(0,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDEDED").s().p("EgnWADrQhxAAhPhEQhRhGAAhhQAAhhBRhEQBPhFBxgBMBOtAAAQBxABBQBFQBQBEAABhQAABhhQBGQhQBEhxAAg");
	this.shape_4.setTransform(0,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDEDED").s().p("EgnfADtQhyAAhPhFQhQhGAAhiQAAhiBQhFQBPhFByAAMBO/AAAQByAABQBFQBPBFAABiQAABihPBGQhQBFhyAAg");
	this.shape_5.setTransform(0,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDEDED").s().p("EgnoADuQhxAAhQhFQhRhHAAhiQAAhiBRhGQBQhFBxAAMBPRAAAQBxAABRBFQBQBGAABiQAABihQBHQhRBFhxAAg");
	this.shape_6.setTransform(0,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDEDED").s().p("EgnxADwQhyAAhQhGQhRhHAAhjQAAhjBRhGQBQhGByAAMBPjAAAQByAABRBGQBQBGAABjQAABjhQBHQhRBGhyAAg");
	this.shape_7.setTransform(0,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EDEDED").s().p("Egn6ADxQhyAAhRhGQhRhIAAhjQAAhjBRhHQBRhGByAAMBP1AAAQByAABRBGQBQBHAABjQAABjhQBIQhRBGhyAAg");
	this.shape_8.setTransform(0,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EDEDED").s().p("EgoCADzQhzAAhRhHQhShIABhkQgBhkBShHQBRhHBzAAMBQFAAAQBzAABSBHQBRBHgBBkQABBkhRBIQhSBHhzAAg");
	this.shape_9.setTransform(0,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EDEDED").s().p("EgoLAD0Qh0AAhQhHQhShJAAhkQAAhlBShHQBQhHB0AAMBQXAAAQB0AABRBHQBRBHAABlQAABkhRBJQhRBHh0AAg");
	this.shape_10.setTransform(0,0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EDEDED").s().p("EgoUAD2Qh0gBhRhHQhShIAAhmQAAhlBShIQBRhIB0AAMBQpAAAQB0AABSBIQBRBIAABlQAABmhRBIQhSBHh0ABg");
	this.shape_11.setTransform(0,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EDEDED").s().p("EgodAD3Qh0AAhRhIQhThJAAhmQAAhmBThIQBRhIB0AAMBQ7AAAQB0AABSBIQBSBIAABmQAABmhSBJQhSBIh0AAg");
	this.shape_12.setTransform(0,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EDEDED").s().p("EgomAD5Qh0gBhShIQhShJAAhnQAAhnBShIQBShIB0gBMBRNAAAQB0ABBTBIQBRBIAABnQAABnhRBJQhTBIh0ABg");
	this.shape_13.setTransform(0,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EDEDED").s().p("EgovAD6Qh0AAhShJQhThKgBhnQABhnBThJQBShJB0AAMBRfAAAQB0AABTBJQBTBJAABnQAABnhTBKQhTBJh0AAg");
	this.shape_14.setTransform(0,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EDEDED").s().p("EgomAD5Qh1gBhRhIQhThJgBhnQABhnBThIQBRhIB1gBMBRNAAAQB1ABBSBIQBTBIAABnQAABnhTBJQhSBIh1ABg");
	this.shape_15.setTransform(0,0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EDEDED").s().p("EgoeAD3Qh0AAhRhIQhThJAAhmQAAhmBThIQBRhIB0AAMBQ9AAAQB0AABSBIQBSBIAABmQAABmhSBJQhSBIh0AAg");
	this.shape_16.setTransform(0,0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EDEDED").s().p("EgoWAD2Qh0AAhRhIQhShJAAhlQAAhlBShIQBRhIB0AAMBQtAAAQB0AABSBIQBRBIAABlQAABlhRBJQhSBIh0AAg");
	this.shape_17.setTransform(0,0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EDEDED").s().p("EgoOAD1QhzAAhRhIQhShIAAhlQAAhlBShHQBRhHBzAAMBQdAAAQBzAABSBHQBRBHAABlQAABlhRBIQhSBIhzAAg");
	this.shape_18.setTransform(0,0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EDEDED").s().p("EgoGADzQhyAAhRhHQhRhIAAhkQAAhkBRhHQBRhHByAAMBQNAAAQByAABSBHQBQBHAABkQAABkhQBIQhSBHhyAAg");
	this.shape_19.setTransform(0,0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EDEDED").s().p("Egn+ADyQhxAAhRhHQhRhHAAhkQAAhjBRhHQBRhHBxAAMBP9AAAQBxAABSBHQBQBHAABjQAABkhQBHQhSBHhxAAg");
	this.shape_20.setTransform(0,0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EDEDED").s().p("Egn1ADwQhyAAhQhGQhRhHAAhjQAAhjBRhGQBQhGByAAMBPrAAAQByAABRBGQBQBGAABjQAABjhQBHQhRBGhyAAg");
	this.shape_21.setTransform(0,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EDEDED").s().p("EgntADvQhyAAhPhGQhRhHAAhiQAAhjBRhFQBPhGByAAMBPbAAAQByAABRBGQBPBFAABjQAABihPBHQhRBGhyAAg");
	this.shape_22.setTransform(0,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EDEDED").s().p("EgnlADuQhxAAhPhGQhRhGAAhiQAAhiBRhFQBPhGBxAAMBPLAAAQBxAABRBGQBPBFAABiQAABihPBGQhRBGhxAAg");
	this.shape_23.setTransform(0,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EDEDED").s().p("EgncADsQhxABhPhGQhRhGAAhhQAAhhBRhGQBPhEBxAAMBO5AAAQBxAABRBEQBPBGAABhQAABhhPBGQhRBGhxgBg");
	this.shape_24.setTransform(0,0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EDEDED").s().p("EgnUADrQhxAAhOhEQhQhHAAhgQAAhhBQhEQBOhFBxAAMBOpAAAQBxAABQBFQBOBEAABhQAABghOBHQhQBEhxAAg");
	this.shape_25.setTransform(0,0.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EDEDED").s().p("EgnMADqQhwAAhOhFQhQhFAAhgQAAhgBQhEQBOhFBwAAMBOZAAAQBwAABQBFQBOBEAABgQAABghOBFQhQBFhwAAg");
	this.shape_26.setTransform(0,0.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EDEDED").s().p("EgnDADoQhxAAhOhEQhPhEAAhgQAAhgBPhDQBOhEBxAAMBOHAAAQBxAABPBEQBOBDAABgQAABghOBEQhPBEhxAAg");
	this.shape_27.setTransform(0,0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EDEDED").s().p("Egm7ADnQhwAAhOhEQhPhEAAhfQAAhfBPhDQBOhEBwAAMBN3AAAQBwAABPBEQBOBDAABfQAABfhOBEQhPBEhwAAg");
	this.shape_28.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-275.2,-22.9,550.4,45.9);
p.frameBounds = [rect, new cjs.Rectangle(-276.2,-23,552.4,46.2), new cjs.Rectangle(-277.1,-23.1,554.3,46.5), new cjs.Rectangle(-278.1,-23.2,556.3,46.8), new cjs.Rectangle(-279.1,-23.3,558.3,47.1), new cjs.Rectangle(-280.1,-23.3,560.2,47.4), new cjs.Rectangle(-281.1,-23.4,562.2,47.7), new cjs.Rectangle(-282,-23.5,564.2,48), new cjs.Rectangle(-283,-23.6,566.1,48.3), new cjs.Rectangle(-284,-23.7,568.1,48.6), new cjs.Rectangle(-285,-23.7,570,48.8), new cjs.Rectangle(-286,-23.8,572,49.1), new cjs.Rectangle(-287,-23.9,574,49.5), new cjs.Rectangle(-287.9,-24,575.9,49.7), new cjs.Rectangle(-288.9,-24.1,577.9,50), new cjs.Rectangle(-288,-24,576.1,49.7), new cjs.Rectangle(-287.1,-23.9,574.2,49.5), new cjs.Rectangle(-286.2,-23.8,572.4,49.2), new cjs.Rectangle(-285.3,-23.8,570.6,48.9), new cjs.Rectangle(-284.3,-23.7,568.7,48.6), new cjs.Rectangle(-283.4,-23.6,566.9,48.3), new cjs.Rectangle(-282.5,-23.5,565.1,48.1), new cjs.Rectangle(-281.6,-23.5,563.2,47.9), new cjs.Rectangle(-280.7,-23.4,561.4,47.6), new cjs.Rectangle(-279.8,-23.3,559.6,47.3), new cjs.Rectangle(-278.8,-23.2,557.7,47), new cjs.Rectangle(-277.9,-23.2,555.9,46.8), new cjs.Rectangle(-277,-23.1,554.1,46.5), new cjs.Rectangle(-276.1,-23,552.2,46.2), new cjs.Rectangle(-275.2,-22.9,550.4,45.9)];

/*==== Over ====*/
/*=== 最上段 (Career) over  ===*/
(lib.subtext32x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("");
	this.shape.setTransform(138.8,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("");
	this.shape_1.setTransform(116.1,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("");
	this.shape_2.setTransform(93.3,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("");
	this.shape_3.setTransform(70.5,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("");
	this.shape_4.setTransform(53.9,-2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("");
	this.shape_5.setTransform(42.4,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("");
	this.shape_6.setTransform(22.5,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("");
	this.shape_7.setTransform(-0.8,4.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("");
	this.shape_8.setTransform(-24.2,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("");
	this.shape_9.setTransform(-45.7,-2.1);

	// "r"
	this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AhBBnIAAjHIAyAAIAHAeQAPgkAkAAIANABIAKACIAAA4IgMgDIgOgBQgJAAgIAEQgIAFgHAIQgGAJgDAMQgEAMAAARIAABTg");
	this.shape_10.setTransform(-79.5,4.7);

	// "e"
	this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AgoBiQgTgHgOgNQgOgOgHgUQgIgTAAgZQAAgYAIgUQAGgUAOgNQAOgOATgHQATgHAWAAQAYAAATAIQAUAHANAPQANAPAHAXQAHAWAAAdIiQAAQADAbAMALQANAMASAAQAOAAAJgGQAJgGADgKIA9AAQgEAOgHALQgHAMgNAIQgMAJgQAFQgRAFgXAAQgWAAgUgIgAgcg4QgKALgDAaIBTAAQgCgagKgLQgMgLgSAAQgSAAgKALg");
	this.shape_11.setTransform(-100,4.5);

	// "e"
	this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgoBiQgTgHgOgNQgOgOgHgUQgIgTAAgZQAAgYAIgUQAGgUAOgNQAOgOATgHQATgHAWAAQAYAAATAIQAUAHANAPQANAPAHAXQAHAWAAAdIiQAAQADAbAMALQANAMASAAQAOAAAJgGQAJgGADgKIA9AAQgEAOgHALQgHAMgNAIQgMAJgQAFQgRAFgXAAQgWAAgUgIgAgcg4QgKALgDAaIBTAAQgCgagKgLQgMgLgSAAQgSAAgKALg");
	this.shape_12.setTransform(-120.3,4.5);

	// "r"
	this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#FFFFFF").s().p("AhBBnIAAjHIAyAAIAHAeQAPgkAkAAIANABIAKACIAAA4IgMgDIgOgBQgJAAgIAEQgIAFgHAIQgGAJgDAMQgEAMAAARIAABTg");
	this.shape_13.setTransform(-138.1,4.2);

	// "a"
	this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("Ag0BlQgNgEgKgIQgJgIgFgMQgFgLAAgQQAAgLAEgKQAEgKAKgIQAJgHAQgGQAPgGAXgDIAwgIIAAgJQAAgPgIgHQgJgIgPAAQgNAAgJAHQgHAHgDALIg+AAQAIgeAZgRQAYgRAnAAQAqAAAYAUQAYATAAAjIAACDIgvAAIgHgVQgKALgRAIQgPAIgXAAQgPAAgNgFgAABALQgUAEgIAHQgHAHAAAKQAAAaAbAAQAUAAALgMQALgLAAgQIAAgWg");
	this.shape_14.setTransform(-158.7,5);

	// "C"
	this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#FFFFFF").s().p("AgxCHQgYgJgRgSQgRgTgKgaQgKgcAAgjQAAgjAJgbQAJgaASgTQARgSAYgJQAZgJAdAAQAYAAAVAGQAUAHAQALQAQAMALATQAKARAEAYIhBAAQgFgbgPgMQgPgMgWAAQgOAAgMAFQgLAGgJALQgJAMgEAUQgFASAAAaQAAAbAFASQAFAUAJALQAIAMAMAFQALAGAMAAQAbAAAPgQQAQgOACghIBCAAQgHA2ggAbQggAbg4AAQgbAAgXgJg");
	this.shape_15.setTransform(-184.4,1.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("");
	this.shape_16.setTransform(-206.1,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("");
	this.shape_17.setTransform(-223.1,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.subtext32x, rect = new cjs.Rectangle(-231,-29,383.7,57.1), [rect]);

/*=== 最下段 (Contact) over ===*/
(lib.subtext12xcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("");
	this.shape.setTransform(182.1,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("");
	this.shape_1.setTransform(159.3,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("");
	this.shape_2.setTransform(136.6,1.5);

	// "t"
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBvQgRgQAAgeIAAhlIgfAAIAAgqIAfAAIADgwIA3AAIAAAwIApAAIAAAqIgpAAIAABnQAAAIAGAFQAFAEAJAAIAKgBIAMgDIAAApIgSAEIgTACQgdAAgRgQg");
	this.shape_3.setTransform(116.,0);

	// "c"
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhKBPQgagbAAgyQAAgYAHgUQAHgUAOgOQANgOATgHQATgIAXAAQAUAAAQAFQARAFANAJQANAJAIAMQAIANADAPIg/AAQgDgNgKgHQgJgHgLAAQgTAAgLAQQgMAPAAAkQAAAgAMAPQAMAPAPAAQAOAAAJgIQAJgHAFgRIA/AAQgEAQgIANQgIANgMAKQgMAJgRAGQgRAGgXAAQgwAAgagbg");
	this.shape_4.setTransform(97,1);

	// "a"
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BlQgNgEgKgIQgJgIgFgMQgFgLAAgQQAAgLAEgKQAEgKAKgIQAJgHAQgGQAPgGAXgDIAwgIIAAgJQAAgPgIgHQgJgIgPAAQgNAAgJAHQgHAHgDALIg+AAQAIgeAZgRQAYgRAnAAQAqAAAYAUQAYATAAAjIAACDIgvAAIgHgVQgKALgRAIQgPAIgXAAQgPAAgNgFgAABALQgUAEgIAHQgHAHAAAKQAAAaAbAAQAUAAALgMQALgLAAgQIAAgWg");
	this.shape_5.setTransform(75, 1);

	// "t"
	this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgRBvQgRgQAAgeIAAhlIgfAAIAAgqIAfAAIADgwIA3AAIAAAwIApAAIAAAqIgpAAIAABnQAAAIAGAFQAFAEAJAAIAKgBIAMgDIAAApIgSAEIgTACQgdAAgRgQg");
	this.shape_6.setTransform(55.3,0);

	// "n"
	this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAjBnIAAh+QAAgUgIgIQgIgIgOAAQgRAAgLAMQgLAMAAAUIAAB2Ig8AAIAAjHIAxAAIAGAWQAKgMAPgIQAOgIAVAAQAjAAAUAUQATAUAAAlIAACAg");
	this.shape_7.setTransform(35.3,1.5);

	// "o"
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhNBOQgbgbAAgzQgBg0AcgaQAbgbAyAAQAzAAAbAbQAbAaAAA0QAAAzgbAbQgbAcgzAAQgwAAgdgcgAgggyQgLAOAAAkQAAAjAMAPQALAPAVAAQAVAAALgPQALgOAAgkQAAgSgDgMQgDgNgFgHQgGgIgIgDQgIgDgLAAQgWAAgKAOg");
	this.shape_8.setTransform(11.8,1.8);

	// "C"
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgxCHQgYgJgRgSQgRgTgKgaQgKgcAAgjQAAgjAJgbQAJgaASgTQARgSAYgJQAZgJAdAAQAYAAAVAGQAUAHAQALQAQAMALATQAKARAEAYIhBAAQgFgbgPgMQgPgMgWAAQgOAAgMAFQgLAGgJALQgJAMgEAUQgFASAAAaQAAAbAFASQAFAUAJALQAIAMAMAFQALAGAMAAQAbAAAPgQQAQgOACghIBCAAQgHA2ggAbQggAbg4AAQgbAAgXgJg");
	this.shape_9.setTransform(-14.1,-2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("");
	this.shape_10.setTransform(-50.5,-1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("");
	this.shape_11.setTransform(-84.8,5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("");
	this.shape_12.setTransform(-102.8,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("");
	this.shape_13.setTransform(-114.7,-2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("");
	this.shape_14.setTransform(-126.1,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("");
	this.shape_15.setTransform(-146.2,2.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("");
	this.shape_16.setTransform(-168.6,1.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("");
	this.shape_17.setTransform(-191.2,1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("");
	this.shape_18.setTransform(-215.6,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.subtext12xcopy, rect = new cjs.Rectangle(-231,-29,427,57.1), [rect]);

/*=== 中段 (Contents) over ===*/
(lib.subtext12x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("");
	this.shape.setTransform(217.7,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("");
	this.shape_1.setTransform(195,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("");
	this.shape_2.setTransform(172.2,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("");
	this.shape_3.setTransform(149.4,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("");
	this.shape_4.setTransform(132.2,1.5);

	// "s"
	this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AhABYQgZgRgFgcIA9AAQACAKAJAGQAJAGAOAAQASAAAHgFQAIgFAAgJQAAgFgCgDQgDgEgFgCIgPgFIgWgGQgOgDgNgFQgNgFgKgHQgKgGgGgLQgGgLAAgPQAAgcAWgSQAWgRArAAQAnAAAYAQQAXARAGAcIg8AAQgCgJgJgFQgIgGgOAAQgOAAgGAEQgGAFAAAHQAAAFABADQACADAFACIAMAFIAUAGIAcAHQAOAFAMAGQALAGAHALQAIAKAAARQAAAPgGAMQgGAMgLAJQgMAJgSAFQgRAGgYAAQgoAAgZgSg");
	this.shape_5.setTransform(82.1,2);

  // "t"
	this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#FFFFFF").s().p("AgRBvQgRgQAAgeIAAhlIgfAAIAAgqIAfAAIADgwIA3AAIAAAwIApAAIAAAqIgpAAIAABnQAAAIAGAFQAFAEAJAAIAKgBIAMgDIAAApIgSAEIgTACQgdAAgRgQg");
	this.shape_6.setTransform(65.1,1);

  // "n"
	this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AAjBnIAAh+QAAgUgIgIQgIgIgOAAQgRAAgLAMQgLAMAAAUIAAB2Ig8AAIAAjHIAxAAIAGAWQAKgMAPgIQAOgIAVAAQAjAAAUAUQATAUAAAlIAACAg");
	this.shape_7.setTransform(46.1,2);

  // "e"
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBiQgTgHgOgNQgOgOgHgUQgIgTAAgZQAAgYAIgUQAGgUAOgNQAOgOATgHQATgHAWAAQAYAAATAIQAUAHANAPQANAPAHAXQAHAWAAAdIiQAAQADAbAMALQANAMASAAQAOAAAJgGQAJgGADgKIA9AAQgEAOgHALQgHAMgNAIQgMAJgQAFQgRAFgXAAQgWAAgUgIgAgcg4QgKALgDAaIBTAAQgCgagKgLQgMgLgSAAQgSAAgKALg");
	this.shape_8.setTransform(23.4,2);

  // "t"
	this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgRBvQgRgQAAgeIAAhlIgfAAIAAgqIAfAAIADgwIA3AAIAAAwIApAAIAAAqIgpAAIAABnQAAAIAGAFQAFAEAJAAIAKgBIAMgDIAAApIgSAEIgTACQgdAAgRgQg");
	this.shape_9.setTransform(3,0);

  // "n"
	this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#FFFFFF").s().p("AAjBnIAAh+QAAgUgIgIQgIgIgOAAQgRAAgLAMQgLAMAAAUIAAB2Ig8AAIAAjHIAxAAIAGAWQAKgMAPgIQAOgIAVAAQAjAAAUAUQATAUAAAlIAACAg");
	this.shape_10.setTransform(-16,2);

  // "o"
	this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#FFFFFF").s().p("AhNBOQgbgbAAgzQgBg0AcgaQAbgbAyAAQAzAAAbAbQAbAaAAA0QAAAzgbAbQgbAcgzAAQgwAAgdgcgAgggyQgLAOAAAkQAAAjAMAPQALAPAVAAQAVAAALgPQALgOAAgkQAAgSgDgMQgDgNgFgHQgGgIgIgDQgIgDgLAAQgWAAgKAOg");
	this.shape_11.setTransform(-38.4,2);

  // "C"
	this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#FFFFFF").s().p("AgxCHQgYgJgRgSQgRgTgKgaQgKgcAAgjQAAgjAJgbQAJgaASgTQARgSAYgJQAZgJAdAAQAYAAAVAGQAUAHAQALQAQAMALATQAKARAEAYIhBAAQgFgbgPgMQgPgMgWAAQgOAAgMAFQgLAGgJALQgJAMgEAUQgFASAAAaQAAAbAFASQAFAUAJALQAIAMAMAFQALAGAMAAQAbAAAPgQQAQgOACghIBCAAQgHA2ggAbQggAbg4AAQgbAAgXgJg");
	this.shape_12.setTransform(-65.2,-2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("");
	this.shape_13.setTransform(-77.3,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("");
	this.shape_14.setTransform(-95.5,1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("");
	this.shape_15.setTransform(-123.8,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("");
	this.shape_16.setTransform(-153.3,1.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("");
	this.shape_17.setTransform(-172.2,-0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("");
	this.shape_18.setTransform(-190.5,2.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("");
	this.shape_19.setTransform(-215.1,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.subtext12x, rect = new cjs.Rectangle(-231,-29,462.6,57.1), [rect]);

/*==== Normal ====*/
/*=== 最上段 (Career) normal  ===*/
(lib.subtext3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("");
	this.shape.setTransform(239.8,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("");
	this.shape_1.setTransform(218.5,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("");
	this.shape_2.setTransform(197.2,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("");
	this.shape_3.setTransform(175.7,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("");
	this.shape_4.setTransform(160.1,-3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("");
	this.shape_5.setTransform(149.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("");
	this.shape_6.setTransform(130.6,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("");
	this.shape_7.setTransform(108.8,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("");
	this.shape_8.setTransform(86.9,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("");
	this.shape_9.setTransform(80.7,3.7);
	// "r"
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag8BgIAAi6IAuAAIAGAdQAPgiAhAAIAMAAIAJACIAAA0IgLgCIgMgBQgJAAgHAEQgIAEgHAIQgFAIgDAMQgEALABAQIAABNg");
	this.shape_10.setTransform(40,3.5);
	// "e"
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglBcQgSgGgNgNQgNgNgHgTQgIgRAAgYQAAgXAHgTQAHgSANgMQANgNARgGQASgHAVAAQAXAAASAHQARAGANAPQAMAOAHAVQAHAVAAAbIiIAAQADAZAMALQAMALARgBQANABAIgGQAJgGACgJIA5AAQgDANgHALQgGALgMAIQgLAIgQAEQgQAFgVAAQgVAAgSgHgAgag0QgKAJgDAZIBOAAQgBgYgKgKQgLgLgRAAQgQAAgKALg");
	this.shape_11.setTransform(20,3.5);
	// "e"
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglBcQgSgGgNgNQgNgNgHgTQgIgRAAgYQAAgXAHgTQAHgSANgMQANgNARgGQASgHAVAAQAXAAASAHQARAGANAPQAMAOAHAVQAHAVAAAbIiIAAQADAZAMALQAMALARgBQANABAIgGQAJgGACgJIA5AAQgDANgHALQgGALgMAIQgLAIgQAEQgQAFgVAAQgVAAgSgHgAgag0QgKAJgDAZIBOAAQgBgYgKgKQgLgLgRAAQgQAAgKALg");
	this.shape_12.setTransform(0,3.5);
	// "r"
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag8BgIAAi6IAuAAIAGAdQAPgiAhAAIAMAAIAJACIAAA0IgLgCIgMgBQgJAAgHAEQgIAEgHAIQgFAIgDAMQgEALABAQIAABNg");
	this.shape_13.setTransform(-18.1,3.2);
	// "a"
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgxBfQgMgEgJgIQgIgHgFgLQgFgLAAgPQAAgLAEgJQADgJAKgHQAJgGAOgGQAPgGAUgDIAugHIAAgJQAAgOgHgGQgJgIgOAAQgNAAgHAHQgHAGgCAKIg7AAQAIgcAXgPQAWgQAlAAQAnAAAWASQAXASAAAgIAAB7IgsAAIgHgTQgJAKgPAIQgOAHgXAAQgOAAgMgEgAABALQgSADgIAGQgHAHAAAKQAAAYAaAAQASAAAKgMQALgKAAgOIAAgVg");
	this.shape_14.setTransform(-38.8,4);
	// "C"
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguB/QgWgJgQgRQgRgRgJgaQgJgZAAghQAAggAJgaQAIgZAQgRQARgRAWgIQAXgJAcAAQAWAAAUAGQATAFAPAMQAPALAKASQAJAQAEAWIg8AAQgFgYgOgMQgPgMgUAAQgNAAgLAFQgLAFgIAMQgIALgFARQgEARAAAZQAAAYAFATQAFARAHAMQAIAKALAGQALAEALAAQAZABAPgOQAOgPACgeIA+AAQgGAygeAaQgfAZg0AAQgZAAgWgIg");
	this.shape_15.setTransform(-63.5,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("");
	this.shape_16.setTransform(-83.9,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("");
	this.shape_17.setTransform(-99.8,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.subtext3a, rect = new cjs.Rectangle(-107,-28,359.6,53.1), [rect]);

/*=== 最下段 (Contact) normal ===*/
(lib.subtext1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("");
	this.shape.setTransform(184.5,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("");
	this.shape_1.setTransform(163.3,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("");
	this.shape_2.setTransform(149,1.4);
	// "t"
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQBoQgQgPAAgcIAAhfIgdAAIAAgnIAdAAIADgtIA0AAIAAAtIAmAAIAAAnIgmAAIAABhQAAAIAFAEQAFAEAIAAIAJgBIAMgDIAAAnIgRADIgRACQgcAAgQgPg");
	this.shape_3.setTransform(130,0);
	// "c"
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhFBKQgYgZAAgwQgBgWAIgTQAGgTANgMQAMgOARgGQASgHAWAAQASAAAQAEQAPAFANAJQAMAIAIALQAHAMAEAOIg8AAQgDgMgJgGQgIgHgLAAQgSAAgKAPQgLAOAAAiQAAAeALAOQALAOAPAAQAMAAAJgHQAIgHAEgQIA8AAQgDAOgIANQgHANgMAJQgMAIgPAFQgRAGgVAAQgtAAgYgZg");
	this.shape_4.setTransform(110,1);
	// "a"
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBfQgMgEgJgIQgIgHgFgLQgFgLAAgPQAAgLAEgJQADgJAKgHQAJgGAOgGQAPgGAUgDIAugHIAAgJQAAgOgHgGQgJgIgOAAQgNAAgHAHQgHAGgCAKIg7AAQAIgcAXgPQAWgQAlAAQAnAAAWASQAXASAAAgIAAB7IgsAAIgHgTQgJAKgPAIQgOAHgXAAQgOAAgMgEgAABALQgSADgIAGQgHAHAAAKQAAAYAaAAQASAAAKgMQALgKAAgOIAAgVg");
	this.shape_5.setTransform(88,1);
	// "t"
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQBoQgQgPAAgcIAAhfIgdAAIAAgnIAdAAIADgtIA0AAIAAAtIAmAAIAAAnIgmAAIAABhQAAAIAFAEQAFAEAIAAIAJgBIAMgDIAAAnIgRADIgRACQgcAAgQgPg");
	this.shape_6.setTransform(68.8,0);
	// "n"
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhBgIAAh2QAAgSgIgIQgIgIgNAAQgPAAgLAMQgKALAAATIAABuIg4AAIAAi6IAuAAIAFAVQAJgMAOgHQAOgHAUAAQAgAAATASQASATAAAiIAAB4g");
	this.shape_7.setTransform(48.7,1.4);
	// "o"
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhIBKQgagaAAgwQAAgwAagZQAZgZAvAAQAvAAAaAZQAaAZAAAwQAAAwgZAaQgbAZgvAAQgtAAgbgZgAgegvQgKAOAAAhQAAAhALAOQAKAOATAAQAVAAAKgOQALgNgBgiQAAgRgCgLQgDgMgFgHQgGgHgHgDQgIgDgKgBQgUAAgKAOg");
	this.shape_8.setTransform(24.8,1.7);
	// "C"
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguB/QgWgJgQgRQgRgRgJgaQgJgZAAghQAAggAJgaQAIgZAQgRQARgRAWgIQAXgJAcAAQAWAAAUAGQATAFAPAMQAPALAKASQAJAQAEAWIg8AAQgFgYgOgMQgPgMgUAAQgNAAgLAFQgLAFgIAMQgIALgFARQgEARAAAZQAAAYAFATQAFARAHAMQAIAKALAGQALAEALAAQAZABAPgOQAOgPACgeIA+AAQgGAygeAaQgfAZg0AAQgZAAgWgIg");
	this.shape_9.setTransform(0.9,-1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("");
	this.shape_10.setTransform(-33.3,-1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("");
	this.shape_11.setTransform(-65.4,5.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("");
	this.shape_12.setTransform(-82.2,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("");
	this.shape_13.setTransform(-93.3,-2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("");
	this.shape_14.setTransform(-104,1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("");
	this.shape_15.setTransform(-122.8,1.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("");
	this.shape_16.setTransform(-143.8,1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("");
	this.shape_17.setTransform(-165,1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("");
	this.shape_18.setTransform(-187.8,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.subtext1copy, rect = new cjs.Rectangle(-202,-27,399.3,53.1), [rect]);

/*=== 中段 (Contents) normal ===*/
(lib.subtext1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("");
	this.shape.setTransform(196.7,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("");
	this.shape_1.setTransform(175.5,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("");
	this.shape_2.setTransform(154.2,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("");
	this.shape_3.setTransform(132.8,-1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("");
	this.shape_4.setTransform(116.7,-1.6);
	// "s"
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8BTQgXgRgFgaIA5AAQACAKAIAFQAJAGANAAQAQAAAIgFQAHgEAAgJQAAgEgCgEQgCgDgGgDQgFgCgIgCIgVgFQgNgDgNgFQgMgEgJgHQgKgGgFgKQgGgKAAgPQAAgaAVgQQAVgQAoAAQAkAAAXAPQAWAPAFAbIg5AAQgBgJgIgEQgIgGgNAAQgNAAgGAEQgGAEAAAIQAAAEACACQACADAEACIAMAGIASAEIAaAIQANADALAHQALAGAHAJQAHAKAAAQQAAAOgGALQgFAMgLAIQgLAIgQAFQgRAFgWAAQgmAAgXgQg");
	this.shape_5.setTransform(85,-1);
	// "t"
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQBoQgQgPAAgcIAAhfIgdAAIAAgnIAdAAIADgtIA0AAIAAAtIAmAAIAAAnIgmAAIAABhQAAAIAFAEQAFAEAIAAIAJgBIAMgDIAAAnIgRADIgRACQgcAAgQgPg");
	this.shape_6.setTransform(68.1,-2);
	// "n"
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhBgIAAh2QAAgSgIgIQgIgIgNAAQgPAAgLAMQgKALAAATIAABuIg4AAIAAi6IAuAAIAFAVQAJgMAOgHQAOgHAUAAQAgAAATASQASATAAAiIAAB4g");
	this.shape_7.setTransform(49.1,-1);
	// "e"
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglBcQgSgGgNgNQgNgNgHgTQgIgRAAgYQAAgXAHgTQAHgSANgMQANgNARgGQASgHAVAAQAXAAASAHQARAGANAPQAMAOAHAVQAHAVAAAbIiIAAQADAZAMALQAMALARgBQANABAIgGQAJgGACgJIA5AAQgDANgHALQgGALgMAIQgLAIgQAEQgQAFgVAAQgVAAgSgHgAgag0QgKAJgDAZIBOAAQgBgYgKgKQgLgLgRAAQgQAAgKALg");
	this.shape_8.setTransform(26.4,-1);
	// "t"
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQBoQgQgPAAgcIAAhfIgdAAIAAgnIAdAAIADgtIA0AAIAAAtIAmAAIAAAnIgmAAIAABhQAAAIAFAEQAFAEAIAAIAJgBIAMgDIAAAnIgRADIgRACQgcAAgQgPg");
	this.shape_9.setTransform(6,-3);
	// "n"
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAhBgIAAh2QAAgSgIgIQgIgIgNAAQgPAAgLAMQgKALAAATIAABuIg4AAIAAi6IAuAAIAFAVQAJgMAOgHQAOgHAUAAQAgAAATASQASATAAAiIAAB4g");
	this.shape_10.setTransform(-13,-1);
	// "o"
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhIBKQgagaAAgwQAAgwAagZQAZgZAvAAQAvAAAaAZQAaAZAAAwQAAAwgZAaQgbAZgvAAQgtAAgbgZgAgegvQgKAOAAAhQAAAhALAOQAKAOATAAQAVAAAKgOQALgNgBgiQAAgRgCgLQgDgMgFgHQgGgHgHgDQgIgDgKgBQgUAAgKAOg");
	this.shape_11.setTransform(-34.3,-1);
	// "C"
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AguB/QgWgJgQgRQgRgRgJgaQgJgZAAghQAAggAJgaQAIgZAQgRQARgRAWgIQAXgJAcAAQAWAAAUAGQATAFAPAMQAPALAKASQAJAQAEAWIg8AAQgFgYgOgMQgPgMgUAAQgNAAgLAFQgLAFgIAMQgIALgFARQgEARAAAZQAAAYAFATQAFARAHAMQAIAKALAGQALAEALAAQAZABAPgOQAOgPACgeIA+AAQgGAygeAaQgfAZg0AAQgZAAgWgIg");
	this.shape_12.setTransform(-60.1,-5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("");
	this.shape_13.setTransform(-79.4,-3.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("");
	this.shape_14.setTransform(-96.5,-1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("");
	this.shape_15.setTransform(-122.9,-1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("");
	this.shape_16.setTransform(-150.5,-1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("");
	this.shape_17.setTransform(-168.2,-3.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("");
	this.shape_18.setTransform(-185.3,-1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("");
	this.shape_19.setTransform(-208.4,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.subtext1, rect = new cjs.Rectangle(-223,-30,432.5,53.1), [rect]);


(lib.strip1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-200,-234);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.strip1, rect = new cjs.Rectangle(-200,-234,399,468), [rect]);


(lib.realGlow2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;
	this.instance.setTransform(-39,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.realGlow2_mc, rect = new cjs.Rectangle(-39,-20,78,40), [rect]);


(lib.realGlow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance.setTransform(-40.2,-29.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.realGlow_mc, rect = new cjs.Rectangle(-40.2,-29.5,80.5,59), [rect]);


(lib.lineRightMasked = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/KOuQA3jKC2jNQCli6EljUQDviuGPj0IMOnUQI5lUDziXQFXjYDCiTQDRifB6iRQB3iOBLiwIAAUEQhjCRiXCDQiQB9jkCQQjAB5lSC9QjPByoDEbQohEslLDPQmXD8j9DVQkYDqiMDgQiVDsgKD5g");
	mask.setTransform(1,1.6);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAlQgPgPgBgWQABgUAPgPQAPgQAUAAQAWAAAOAQQAQAPAAAUQAAAWgQAPQgOAPgWAAQgUAAgPgPg");
	this.shape.setTransform(-21.4,-0.8,1.022,1.03);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAlQgPgPABgWQgBgUAPgPQAQgQAUAAQAVAAAQAQQAPAPgBAUQABAWgPAPQgQAPgVAAQgUAAgQgPg");
	this.shape_1.setTransform(-37.9,-33.7,1.022,1.03);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgPAVAAQAVAAAQAPQAPAPAAAVQAAAVgPAPQgQAQgVAAQgVAAgPgQg");
	this.shape_2.setTransform(-105,-2.3,1.022,1.03);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAlQgOgPAAgWQAAgUAOgPQAPgQAVAAQAVAAAPAQQAPAPAAAUQAAAWgPAPQgPAPgVAAQgVAAgPgPg");
	this.shape_3.setTransform(-64.3,-9.2,1.022,1.03);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgPAVAAQAVAAAPAPQAPAPABAVQgBAVgPAPQgPAQgVAAQgVAAgPgQg");
	this.shape_4.setTransform(-84.8,11.8,1.022,1.03);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAlQgQgPAAgWQAAgUAQgQQAPgPAUAAQAWAAAPAPQAPAQAAAUQAAAWgPAPQgPAPgWAAQgUAAgPgPg");
	this.shape_5.setTransform(-99.7,32.3,1.022,1.03);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAkQgQgPAAgVQAAgVAQgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgUAAgPgQg");
	this.shape_6.setTransform(-132.5,95.4,1.022,1.03);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAlQgPgPAAgWQAAgUAPgPQAPgPAVgBQAVABAQAPQAPAPAAAUQAAAWgPAPQgQAPgVAAQgVAAgPgPg");
	this.shape_7.setTransform(-113.7,56.7,1.022,1.03);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgPAVAAQAVAAAPAPQAPAPABAVQgBAVgPAPQgPAQgVAAQgVAAgPgQg");
	this.shape_8.setTransform(-138.9,27,1.022,1.03);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAlQgQgPAAgWQAAgUAQgQQAPgPAUAAQAWAAAPAPQAPAQAAAUQAAAWgPAPQgPAPgWAAQgUAAgPgPg");
	this.shape_9.setTransform(-153.4,34.9,1.022,1.03);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAkQgPgPgBgVQABgVAPgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgUAAgPgQg");
	this.shape_10.setTransform(-183.4,66.7,1.022,1.03);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgPgPAAgVQAAgVAPgPQAQgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgUAAgQgQg");
	this.shape_11.setTransform(-154.7,49.2,1.022,1.03);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAlQgPgPAAgWQAAgUAPgQQAPgPAVAAQAWAAAPAPQAPAQAAAUQAAAWgPAPQgQAPgVAAQgVAAgPgPg");
	this.shape_12.setTransform(-164.8,65.8,1.022,1.03);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgPAVAAQAVAAAQAPQAPAPAAAVQAAAVgPAPQgQAQgVAAQgVAAgPgQg");
	this.shape_13.setTransform(-193.9,86.2,1.022,1.03);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAlQgQgPAAgWQAAgUAQgPQAPgQAUAAQAWAAAPAQQAPAPAAAUQAAAWgPAPQgPAPgWAAQgUAAgPgPg");
	this.shape_14.setTransform(-197.7,111.5,1.022,1.03);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAkQgQgPABgVQgBgVAQgPQAPgPAUAAQAWAAAPAPQAOAPAAAVQAAAVgOAPQgPAQgWAAQgUAAgPgQg");
	this.shape_15.setTransform(-176.2,95.4,1.022,1.03);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAkQgPgPgBgVQABgVAPgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgUAAgPgQg");
	this.shape_16.setTransform(-183.4,136.7,1.022,1.03);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAkQgQgPAAgVQAAgVAQgPQAPgOAUAAQAWAAAPAOQAPAPAAAVQAAAVgPAPQgPAPgWAAQgUAAgPgPg");
	this.shape_17.setTransform(-197.7,153.5,1.022,1.03);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgPgPABgVQgBgVAPgPQAQgOAUAAQAVAAAQAOQAPAPgBAVQABAVgPAPQgQAPgVAAQgUAAgQgPg");
	this.shape_18.setTransform(-192.4,189.7,1.022,1.03);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAkQgQgPAAgVQAAgVAQgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAPgWABQgUgBgPgPg");
	this.shape_19.setTransform(-174.3,159.9,1.022,1.03);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAlQgQgPAAgWQAAgUAQgQQAPgPAUAAQAWAAAPAPQAPAQAAAUQAAAWgPAPQgPAPgWAAQgUAAgPgPg");
	this.shape_20.setTransform(-124.3,115.7,1.022,1.03);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgPAVAAQAVAAAQAPQAPAPAAAVQAAAVgPAPQgQAPgVABQgVgBgPgPg");
	this.shape_21.setTransform(-96.8,96.9,1.022,1.03);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAlQgQgPAAgWQAAgUAQgQQAPgPAUAAQAWAAAPAPQAPAQAAAUQAAAWgPAPQgPAPgWAAQgUAAgPgPg");
	this.shape_22.setTransform(-47.1,65.8,1.022,1.03);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgOgPAAgVQAAgVAOgPQAPgPAVAAQAVAAAPAPQAPAPAAAVQAAAVgPAPQgPAPgVABQgVgBgPgPg");
	this.shape_23.setTransform(-73.5,59.8,1.022,1.03);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAlQgPgQABgVQgBgUAPgQQAQgPAUABQAVgBAQAPQAPAQgBAUQABAVgPAQQgQAPgVgBQgUABgQgPg");
	this.shape_24.setTransform(-37.9,41.1,1.022,1.03);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAlQgPgPAAgWQAAgUAPgPQAQgPAUgBQAWABAPAPQAPAPAAAUQAAAWgPAPQgPAOgWAAQgUAAgQgOg");
	this.shape_25.setTransform(-43.2,23.2,1.022,1.03);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAlQgQgPAAgWQAAgUAQgPQAPgQAUAAQAWAAAPAQQAPAPAAAUQAAAWgPAPQgPAPgWAAQgUAAgPgPg");
	this.shape_26.setTransform(13.5,17.1,1.022,1.03);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAkQgQgPAAgVQAAgVAQgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgUAAgPgQg");
	this.shape_27.setTransform(-11.9,12.6,1.022,1.03);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAkQgQgPAAgVQAAgVAQgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAPgWABQgUgBgPgPg");
	this.shape_28.setTransform(7.7,-11.6,1.022,1.03);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAlQgOgPAAgWQAAgUAOgPQAPgQAVAAQAVAAAPAQQAQAPgBAUQABAWgQAPQgPAPgVAAQgVAAgPgPg");
	this.shape_29.setTransform(-4,-21.3,1.022,1.03);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgOAVAAQAVAAAQAOQAPAPAAAVQAAAVgPAPQgQAQgVgBQgVABgPgQg");
	this.shape_30.setTransform(24.1,-31.3,1.022,1.03);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAlQgPgPAAgWQAAgUAPgQQAQgPAUAAQAWAAAPAPQAPAQAAAUQAAAWgPAPQgPAPgWAAQgUAAgQgPg");
	this.shape_31.setTransform(44.5,-56.8,1.022,1.03);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAlQgPgPAAgWQAAgUAPgPQAPgPAUgBQAWABAPAPQAOAPAAAUQAAAWgOAPQgPAPgWAAQgUAAgPgPg");
	this.shape_32.setTransform(15.7,-44.4,1.022,1.03);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAlQgPgQgBgVQABgVAPgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAQQgPAPgWAAQgUAAgPgPg");
	this.shape_33.setTransform(45.2,-78.1,1.022,1.03);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAlQgOgQAAgVQAAgUAOgQQAPgPAVABQAVgBAPAPQAPAQAAAUQAAAVgPAQQgPAPgVgBQgVABgPgPg");
	this.shape_34.setTransform(79.6,-114.2,1.022,1.03);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAlQgPgPAAgWQAAgUAPgPQAPgQAVAAQAVAAAQAQQAPAPAAAUQAAAWgPAPQgQAPgVAAQgVAAgPgPg");
	this.shape_35.setTransform(112,-134.9,1.022,1.03);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAkQgPgPgBgVQABgVAPgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgUAAgPgQg");
	this.shape_36.setTransform(73.7,-92.6,1.022,1.03);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAlQgQgPAAgWQAAgUAQgQQAPgPAUAAQAWAAAPAPQAPAQAAAUQAAAWgPAPQgPAPgWAAQgUAAgPgPg");
	this.shape_37.setTransform(84.3,-56.8,1.022,1.03);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgOAVAAQAVAAAPAOQAPAPABAVQgBAVgPAPQgPAQgVgBQgVABgPgQg");
	this.shape_38.setTransform(64.8,-31.3,1.022,1.03);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgPAVAAQAVAAAPAPQAQAPAAAVQAAAVgQAPQgPAQgVAAQgVAAgPgQg");
	this.shape_39.setTransform(42,-8.3,1.022,1.03);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgPAVAAQAVAAAPAPQAQAPAAAVQAAAVgQAPQgPAQgVAAQgVAAgPgQg");
	this.shape_40.setTransform(49.1,12.6,1.022,1.03);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgPgOAAgWQAAgUAPgPQAPgPAVgBQAVABAQAPQAPAPAAAUQAAAWgPAOQgQAQgVAAQgVAAgPgQg");
	this.shape_41.setTransform(86.5,-16,1.022,1.03);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAlQgPgPAAgWQAAgUAPgQQAPgPAVAAQAVAAAPAPQAQAQAAAUQAAAWgQAPQgPAPgVAAQgVAAgPgPg");
	this.shape_42.setTransform(136.7,-38.3,1.022,1.03);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAlQgPgPAAgWQAAgUAPgPQAPgQAVAAQAVAAAQAQQAPAPAAAUQAAAWgPAPQgQAPgVAAQgVAAgPgPg");
	this.shape_43.setTransform(110.1,-36.7,1.022,1.03);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAkQgQgPAAgVQAAgVAQgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgUAAgPgQg");
	this.shape_44.setTransform(139.9,-62.1,1.022,1.03);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAkQgQgPAAgVQAAgVAQgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgUAAgPgQg");
	this.shape_45.setTransform(170.6,-62.1,1.022,1.03);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAkQgQgPAAgVQAAgVAQgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgUAAgPgQg");
	this.shape_46.setTransform(189.7,-82.7,1.022,1.03);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAlQgPgQAAgVQAAgVAPgPQAPgPAVAAQAVAAAPAPQAQAPAAAVQAAAVgQAQQgPAPgVAAQgVAAgPgPg");
	this.shape_47.setTransform(149.2,-84.6,1.022,1.03);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAlQgQgQAAgVQAAgVAQgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAQQgPAPgWAAQgUAAgPgPg");
	this.shape_48.setTransform(197.7,-105.1,1.022,1.03);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAkQgQgPAAgVQAAgVAQgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgUAAgPgQg");
	this.shape_49.setTransform(99.5,-82.7,1.022,1.03);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgOAVAAQAVAAAQAOQAPAPAAAVQAAAVgPAPQgQAQgVgBQgVABgPgQg");
	this.shape_50.setTransform(119.8,-116.6,1.022,1.03);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgPgPABgVQgBgVAPgPQAQgPAUAAQAVAAAQAPQAPAPgBAVQABAVgPAPQgQAPgVABQgUgBgQgPg");
	this.shape_51.setTransform(158.5,-112.8,1.022,1.03);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAlQgQgPAAgWQAAgUAQgQQAPgPAUAAQAWAAAPAPQAPAQAAAUQAAAWgPAPQgPAPgWAAQgUAAgPgPg");
	this.shape_52.setTransform(197.7,-134.2,1.022,1.03);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAlQgQgQAAgVQAAgUAQgQQAPgPAUABQAWgBAPAPQAPAQAAAUQAAAVgPAQQgPAPgWgBQgUABgPgPg");
	this.shape_53.setTransform(153.2,-164.3,1.022,1.03);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgPAVAAQAVAAAPAPQAQAPAAAVQAAAVgQAPQgPAQgVAAQgVAAgPgQg");
	this.shape_54.setTransform(153.9,-163.6,1.022,1.03);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAkQgQgPAAgVQAAgVAQgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgUAAgPgQg");
	this.shape_55.setTransform(168,-144.3,1.022,1.03);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAkQgQgPAAgVQAAgVAQgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgUAAgPgQg");
	this.shape_56.setTransform(197.7,-166.7,1.022,1.03);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgjAkQgQgPAAgVQAAgVAQgPQAPgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgUAAgPgQg");
	this.shape_57.setTransform(197.7,-219.2,1.022,1.03);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.282,1],0,0,0,0,0,3.7).s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgOAVAAQAVAAAPAOQAQAPAAAVQAAAVgQAPQgPAPgVAAQgVAAgPgPg");
	this.shape_58.setTransform(179.9,-189.5,1.022,1.03);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").p("AZuuqQ3XKejoBvQlrCtmGD2QplGCjDEl");
	this.shape_59.setTransform(-30.2,57.7,1.022,1.03);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").p("A8RNXQCdiKEci2QI4lrJ7jcQJ6jcLek7QFwidDwhy");
	this.shape_60.setTransform(-13.2,24.2,1.022,1.03);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").p("Adgs6QlACIl4CXQrxEwkaBTQiqAyk3B8Qk7B+k/CUQsVFsiLCo");
	this.shape_61.setTransform(-2.5,2.5,1.022,1.03);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").p("AdOtGQmQCtnjDKQvHGVmgCUQoJC7oPEsQkICWigBx");
	this.shape_62.setTransform(6.6,-18.7,1.022,1.03);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").p("Aa8s4Ql3DJmzDaQtmG0ksBVQktCLlOCeQqcE7ikBh");
	this.shape_63.setTransform(21.5,-49.2,1.022,1.03);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").p("A3NMsQGZjQD9h4QCQhFF7jHQGDjMAugVQFQikF0jNQJklTAehh");
	this.shape_64.setTransform(46.1,-84.4,1.022,1.03);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").p("AlvOGQAhjZAnjrQBOnWAbhcQAtiZCNjeQCzkbDDiA");
	this.shape_65.setTransform(-154.8,99.4,1.022,1.03);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").p("AsaQvQgMAIAAgIQgCgSA2hTQAlg5CZjhQCJjKAhg1QANgUAwhvQA5iCAyhgQCxlSD+j+QEDkADGixQBjhYAvgl");
	this.shape_66.setTransform(-91.8,50.3,1.022,1.03);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").p("AQHx4QgzA5hOBSQibCkiBB5QlpGomCG8QsGN7iABp");
	this.shape_67.setTransform(-24.9,3.1,1.022,1.03);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").p("AQjx/Qg4BDhABIQiACSgqAdQgoAdigC/Qi6DhhGBSQgwA+hHBZQiNCvh0CBQhCBgidCuQk7FbnKGF");
	this.shape_68.setTransform(6.3,-17.9,1.022,1.03);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").p("AP4x4QhrCliFCtQhnCGg+BdQhCBlg6BwQhRCfgyBLQhkCYjZD6QhZBMiMCFQhmBhlLEJQlFEEhFAq");
	this.shape_69.setTransform(50.6,-47.5,1.022,1.03);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").p("AMIwlQgWBlgfB5Qg+DxgoBhQglBZgzDEQgxDAgIASQgYBJgaAzQgvBehYA4QgnAZh2BoQisCahIA8QlwE0ksCM");
	this.shape_70.setTransform(100.5,-81.2,1.022,1.03);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").p("EgePAhAIAAykQA1jECxjHQCgi1EcjOQDoioGEjtQApgZLOmtQIqlLDqiSQFOjRC7iPQDLiaB3iNQBziKBJirIAATeQhgCNiTCAQiMB5jdCMQi6B2lIC2QmwDtkNCUQoZEplBDGQmUD5j5DOQkVDniFDXQh8DIgIDNQgBAdABAe");
	this.shape_71.setTransform(-0.2,0.9,1.022,1.03);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lineRightMasked, rect = new cjs.Rectangle(-198.5,-221,399,445.3), [rect]);


(lib.lineAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AjbDcQhahaAAiCQAAiBBahaQBahaCBAAQCCAABaBaQBaBaAACBQAACChaBaQhaBaiCAAQiBAAhahag");
	this.shape.setTransform(61,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.149)").s().p("AjbDcQhahaAAiCQAAiBBahaQBahaCBAAQCCAABaBaQBaBaAACBQAACChaBaQhaBaiCAAQiBAAhahag");
	this.shape_1.setTransform(61,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("AivCwQhIhIAAhoQAAhnBIhIQBIhIBnAAQBoAABIBIQBIBIAABnQAABohIBIQhIBIhoAAQhnAAhIhIg");
	this.shape_2.setTransform(61,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.486)").s().p("Ah1B2QgxgwABhGQgBhFAxgwQAwgwBFAAQBGAAAwAwQAwAwABBFQgBBGgwAwQgwAwhGABQhFgBgwgwg");
	this.shape_3.setTransform(61,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.714)").s().p("AhJBJQgdgeAAgrQAAgqAdgeQAfgeAqAAQArAAAeAeQAfAeAAAqQAAArgfAeQgeAegrABQgqgBgfgeg");
	this.shape_4.setTransform(61,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.871)").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_5.setTransform(61,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.969)").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_6.setTransform(61,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOAQQgHgHAAgJQAAgIAHgHQAGgGAIAAQAJAAAGAGQAHAHAAAIQAAAJgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_7.setTransform(61,2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_8.setTransform(61,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKAAQALAAAHAIQAHAHAAAKQAAAKgHAIQgHAHgLABQgKgBgHgHg");
	this.shape_9.setTransform(61,2.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTATQgHgIgBgLQABgLAHgHQAJgJAKAAQAMAAAHAJQAIAHAAALQAAALgIAIQgHAJgMgBQgKABgJgJg");
	this.shape_10.setTransform(61,2.8);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},3).to({state:[{t:this.shape_10}]},1).to({state:[]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).to({state:[{t:this.shape_10}]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(16).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(8));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAMAAIgXAA");
	this.shape_11.setTransform(1.2,2.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgkAAIBJAA");
	this.shape_12.setTransform(3.7,2.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhwAAIDhAA");
	this.shape_13.setTransform(11.3,2.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ai+AAIF9AA");
	this.shape_14.setTransform(24,2.8,1.258,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aj9AAIH7AA");
	this.shape_15.setTransform(25.4,2.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkIAAIIRAA");
	this.shape_16.setTransform(26.5,2.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkSAAIIlAA");
	this.shape_17.setTransform(27.5,2.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkZAAIIzAA");
	this.shape_18.setTransform(28.2,2.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkeAAII9AA");
	this.shape_19.setTransform(28.7,2.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkhAAIJDAA");
	this.shape_20.setTransform(29,2.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEjAAIpFAA");
	this.shape_21.setTransform(29.1,2.8);
	this.shape_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},9).to({state:[]},1).to({state:[{t:this.shape_21}]},1).to({state:[]},1).to({state:[{t:this.shape_21}]},1).to({state:[]},1).to({state:[{t:this.shape_21}]},1).to({state:[]},1).to({state:[{t:this.shape_21}]},1).to({state:[]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(10).to({_off:false},0).wait(9).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,1.8,4.4,2);
p.frameBounds = [rect, new cjs.Rectangle(-0.5,2.3,8.5,1), new cjs.Rectangle(-0.5,2.3,23.7,1), new cjs.Rectangle(-1,1.8,50,2), new cjs.Rectangle(-0.5,-28.2,92.5,62), new cjs.Rectangle(-0.5,2.3,54,1), new cjs.Rectangle(-0.5,-28.2,92.5,62), new cjs.Rectangle(-0.5,2.3,57.4,1), new cjs.Rectangle(-0.5,-22,86.3,49.6), new cjs.Rectangle(-0.5,-13.9,78.2,33.3), new cjs.Rectangle(-1,-7.6,72.4,20.7), new cjs.Rectangle(-1,-3,67.8,11.6), new cjs.Rectangle(-1,-0.3,65.1,6.2), new cjs.Rectangle(-1,0.6,64.2,4.4), new cjs.Rectangle(-1,0.4,64.4,4.8), new cjs.Rectangle(-1,0.2,64.6,5.1), rect=new cjs.Rectangle(-1,0,64.8,5.5), rect, rect, rect, new cjs.Rectangle(58.3,0,5.5,5.5), new cjs.Rectangle(-1,1.8,60.3,2), new cjs.Rectangle(58.3,0,5.5,5.5), new cjs.Rectangle(-1,1.8,60.3,2), new cjs.Rectangle(58.3,0,5.5,5.5), new cjs.Rectangle(-1,1.8,60.3,2), new cjs.Rectangle(58.3,0,5.5,5.5), new cjs.Rectangle(-1,1.8,60.3,2), new cjs.Rectangle(58.3,0,5.5,5.5), new cjs.Rectangle(-1,1.8,60.3,2), rect=new cjs.Rectangle(-1,0,64.8,5.5), rect, rect, rect, rect, rect, rect, rect];


(lib.leftAnimcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(1));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgobgvzMAsEAAAMAAABfnMgsEAAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EgongzaMA1JAAAMAAABm1Mg1JAAAg");
	var mask_graphics_2 = new cjs.Graphics().p("Ego0g3BMA+QAAAMAAABuDMg+QAAAg");
	var mask_graphics_3 = new cjs.Graphics().p("EgpAg6nMBHWAAAMAAAB1PMhHWAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("EgpNg+OMBQdAAAMAAAB8dMhQdAAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EgsxhB1MBZjAAAMAAACDrMhZjAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("EgxUhFcMBipAAAMAAACK5MhipAAAg");
	var mask_graphics_7 = new cjs.Graphics().p("EgzLhHUMBmXAAAMAAACOpMhmXAAAg");
	var mask_graphics_8 = new cjs.Graphics().p("Eg1ChJNMBqFAAAMAAACSbMhqFAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("Eg24hLFMBtxAAAMAAACWLMhtxAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("Eg4vhM+MBxfAAAMAAACZ9MhxfAAAg");
	var mask_graphics_11 = new cjs.Graphics().p("Eg6mhO3MB1NAAAMAAACdvMh1NAAAg");
	var mask_graphics_12 = new cjs.Graphics().p("Eg8chQvMB45AAAMAAAChfMh45AAAg");
	var mask_graphics_13 = new cjs.Graphics().p("Eg+ThSoMB8nAAAMAAAClRMh8nAAAg");
	var mask_graphics_14 = new cjs.Graphics().p("EhAJhUgMCATAAAMAAACpBMiATAAAg");
	var mask_graphics_15 = new cjs.Graphics().p("EhCAhWZMCEBAAAMAAACszMiEBAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-258.7,y:-97.1}).wait(1).to({graphics:mask_graphics_1,x:-260,y:-81.5}).wait(1).to({graphics:mask_graphics_2,x:-261.3,y:-65.9}).wait(1).to({graphics:mask_graphics_3,x:-262.5,y:-50.3}).wait(1).to({graphics:mask_graphics_4,x:-263.8,y:-34.6}).wait(1).to({graphics:mask_graphics_5,x:-243.4,y:-19}).wait(1).to({graphics:mask_graphics_6,x:-217,y:-3.4}).wait(1).to({graphics:mask_graphics_7,x:-181,y:9}).wait(1).to({graphics:mask_graphics_8,x:-145,y:21.5}).wait(1).to({graphics:mask_graphics_9,x:-109,y:33.9}).wait(1).to({graphics:mask_graphics_10,x:-73,y:46.4}).wait(1).to({graphics:mask_graphics_11,x:-37.1,y:58.8}).wait(1).to({graphics:mask_graphics_12,x:-1.1,y:71.3}).wait(1).to({graphics:mask_graphics_13,x:34.9,y:83.7}).wait(1).to({graphics:mask_graphics_14,x:70.9,y:96.2}).wait(1).to({graphics:mask_graphics_15,x:107.1,y:108.7}).wait(18));

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-200,-221);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200.3,-221.4,400.3,447.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-200.3,-221.4,401.3,447.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-200,-221,401,446), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.leftAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(1));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgDZgvzMAsEAAAMAAABfnMgsEAAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EgMpgzaMA1KAAAMAAABm1Mg1KAAAg");
	var mask_graphics_2 = new cjs.Graphics().p("EgV5g3BMA+QAAAMAAABuDMg+QAAAg");
	var mask_graphics_3 = new cjs.Graphics().p("EgfJg6nMBHXAAAMAAAB1PMhHXAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("EgoOg+OMBQdAAAMAAAB8dMhQdAAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EgsxhB1MBZjAAAMAAACDrMhZjAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("EgxUhFcMBipAAAMAAACK5MhipAAAg");
	var mask_graphics_7 = new cjs.Graphics().p("EgzLhHUMBmXAAAMAAACOpMhmXAAAg");
	var mask_graphics_8 = new cjs.Graphics().p("Eg1ChJNMBqFAAAMAAACSbMhqFAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("Eg24hLFMBtxAAAMAAACWLMhtxAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("Eg4vhM+MBxfAAAMAAACZ9MhxfAAAg");
	var mask_graphics_11 = new cjs.Graphics().p("Eg6mhO3MB1NAAAMAAACdvMh1NAAAg");
	var mask_graphics_12 = new cjs.Graphics().p("Eg8chQvMB45AAAMAAAChfMh45AAAg");
	var mask_graphics_13 = new cjs.Graphics().p("Eg+ThSoMB8nAAAMAAAClRMh8nAAAg");
	var mask_graphics_14 = new cjs.Graphics().p("EhAJhUgMCATAAAMAAACpBMiATAAAg");
	var mask_graphics_15 = new cjs.Graphics().p("EhCAhWZMCEBAAAMAAACszMiEBAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:260.3,y:134.9}).wait(1).to({graphics:mask_graphics_1,x:259.3,y:134.5}).wait(1).to({graphics:mask_graphics_2,x:258.3,y:134.1}).wait(1).to({graphics:mask_graphics_3,x:257.4,y:133.7}).wait(1).to({graphics:mask_graphics_4,x:255.3,y:133.4}).wait(1).to({graphics:mask_graphics_5,x:224.3,y:133}).wait(1).to({graphics:mask_graphics_6,x:193,y:132.6}).wait(1).to({graphics:mask_graphics_7,x:180.3,y:132.3}).wait(1).to({graphics:mask_graphics_8,x:167.6,y:132.1}).wait(1).to({graphics:mask_graphics_9,x:155,y:131.9}).wait(1).to({graphics:mask_graphics_10,x:142.3,y:131.7}).wait(1).to({graphics:mask_graphics_11,x:129.6,y:131.5}).wait(1).to({graphics:mask_graphics_12,x:116.9,y:131.3}).wait(1).to({graphics:mask_graphics_13,x:104.3,y:131}).wait(1).to({graphics:mask_graphics_14,x:91.6,y:130.8}).wait(1).to({graphics:mask_graphics_15,x:79.1,y:130.7}).wait(18));

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-200,-221);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200.3,-221.4,400.3,447.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200.3,-221.4,401.3,447.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-200,-221,401,446), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

/*=== IT Users ===*/
(lib.itusers2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	/*
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#049FD9").s().p("AgwBKQgTgPgDgXIAgAAQACAPALAGQAKAHAQAAQATAAAKgIQAJgHAAgLQAAgHgDgGQgDgEgHgDQgGgDgJgDIgTgFQgdgGgNgLQgNgLAAgTQAAgWARgNQAQgMAfAAQAcAAASAMQASAOAEAWIgfAAQgDgLgJgHQgJgGgQAAQgQAAgJAGQgIAFAAAKQAAAEACAEQACADAEADQAEADAHADIATAFQAPADAMAEQAMAEAIAGQAIAFAFAJQAFAJAAANQAAALgFAKQgFAJgJAHQgJAHgMAEQgNAEgRAAQgeAAgTgOg");
	this.shape.setTransform(52.1,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#049FD9").s().p("AgsBVIAAilIAZAAIAFAZQANgeAbAAIAMABIAHACIAAAeIgKgCIgKAAQgHAAgIACQgHAEgFAGQgFAIgDAKQgDALAAAPIAABTg");
	this.shape_1.setTransform(39.6,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#049FD9").s().p("AgeBTQgPgGgKgLQgLgLgGgQQgGgRAAgWQAAgVAGgRQAGgQALgLQAKgLAPgGQAPgFAQAAQARAAAOAFQAPAFAKAMQAKALAGATQAGARAAAYIh+AAQACAdAOAOQAPANATAAQAQAAAKgHQALgJAEgLIAhAAQgDAMgHAJQgGAJgJAIQgKAHgNAEQgMAEgPAAQgQAAgQgFgAgdgzQgNALgDAXIBcAAQgBgXgMgLQgOgLgSAAQgSgBgNAMg");
	this.shape_2.setTransform(23.7,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#049FD9").s().p("AgwBKQgTgPgDgXIAgAAQACAPALAGQAKAHAQAAQATAAAKgIQAJgHAAgLQAAgHgDgGQgDgEgHgDQgGgDgJgDIgTgFQgdgGgNgLQgNgLAAgTQAAgWARgNQAQgMAfAAQAcAAASAMQASAOAEAWIgfAAQgDgLgJgHQgJgGgQAAQgQAAgJAGQgIAFAAAKQAAAEACAEQACADAEADQAEADAHADIATAFQAPADAMAEQAMAEAIAGQAIAFAFAJQAFAJAAANQAAALgFAKQgFAJgJAHQgJAHgMAEQgNAEgRAAQgeAAgTgOg");
	this.shape_3.setTransform(6.4,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#049FD9").s().p("AglBwQgQgGgMgLQgMgKgGgQQgHgPAAgSIAAiZIAhAAIAACcQAAAXAPAOQAPAOAbAAQAdAAAPgOQAPgOAAgXIAAicIAgAAIAACZQAAATgHAPQgGAPgMALQgMAKgRAGQgQAGgVAAQgUAAgRgGg");
	this.shape_4.setTransform(-12.7,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#049FD9").s().p("AgQBzIAAjIIhMAAIAAgdIC5AAIAAAdIhNAAIAADIg");
	this.shape_5.setTransform(-42.9,-1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#049FD9").s().p("AgPBzIAAjlIAfAAIAADlg");
	this.shape_6.setTransform(-56.4,-1.3);
	*/
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.itusers2_mc, rect = new cjs.Rectangle(-62.4,-23.8,124.8,47.6), [rect]);


(lib.itusers1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	/*
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4D6ED").s().p("AgwBKQgTgPgDgXIAgAAQACAPALAGQAKAHAQAAQATAAAKgIQAJgHAAgLQAAgHgDgGQgDgEgHgDQgGgDgJgDIgTgFQgdgGgNgLQgNgLAAgTQAAgWARgNQAQgMAfAAQAcAAASAMQASAOAEAWIgfAAQgDgLgJgHQgJgGgQAAQgQAAgJAGQgIAFAAAKQAAAEACAEQACADAEADQAEADAHADIATAFQAPADAMAEQAMAEAIAGQAIAFAFAJQAFAJAAANQAAALgFAKQgFAJgJAHQgJAHgMAEQgNAEgRAAQgeAAgTgOg");
	this.shape.setTransform(51.8,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4D6ED").s().p("AgsBVIAAilIAZAAIAFAZQAOgeAaAAIALABIAIACIAAAeIgKgCIgKAAQgHAAgIACQgHAEgFAGQgFAIgDAKQgEALABAPIAABTg");
	this.shape_1.setTransform(39.4,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4D6ED").s().p("AgeBTQgOgGgLgLQgLgLgGgQQgGgRAAgWQAAgVAGgRQAGgQAKgLQALgLAPgGQAPgFAQAAQARAAAOAFQAPAFAKAMQAKALAGATQAGARAAAYIh+AAQACAdAOAOQAPANATAAQAQAAAKgHQALgJAEgLIAhAAQgDAMgHAJQgGAJgKAIQgJAHgNAEQgMAEgOAAQgSAAgPgFgAgdgzQgNALgDAXIBdAAQgCgXgNgLQgNgLgSAAQgSgBgNAMg");
	this.shape_2.setTransform(23.6,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4D6ED").s().p("AgwBKQgTgPgDgXIAgAAQACAPALAGQAKAHAQAAQATAAAKgIQAJgHAAgLQAAgHgDgGQgDgEgHgDQgGgDgJgDIgTgFQgdgGgNgLQgNgLAAgTQAAgWARgNQAQgMAfAAQAcAAASAMQASAOAEAWIgfAAQgDgLgJgHQgJgGgQAAQgQAAgJAGQgIAFAAAKQAAAEACAEQACADAEADQAEADAHADIATAFQAPADAMAEQAMAEAIAGQAIAFAFAJQAFAJAAANQAAALgFAKQgFAJgJAHQgJAHgMAEQgNAEgRAAQgeAAgTgOg");
	this.shape_3.setTransform(6.4,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4D6ED").s().p("AglBwQgQgGgMgLQgMgKgGgQQgHgPAAgSIAAiZIAhAAIAACcQAAAXAPAOQAPAOAbAAQAdAAAPgOQAPgOAAgXIAAicIAgAAIAACZQAAATgHAPQgGAPgMALQgMAKgRAGQgQAGgVAAQgUAAgRgGg");
	this.shape_4.setTransform(-12.6,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C4D6ED").s().p("AgQBzIAAjIIhMAAIAAgdIC5AAIAAAdIhNAAIAADIg");
	this.shape_5.setTransform(-42.6,-1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C4D6ED").s().p("AgPBzIAAjlIAfAAIAADlg");
	this.shape_6.setTransform(-56,-1.3);
	*/
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.itusers1_mc, rect = new cjs.Rectangle(-62,-23.8,124,47.6), [rect]);

// 最上段選択時の背景色
(lib.greenSmallne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0MG+Q8yAagzhUQEdpHHclcMBQXAAAQDBgSDVDNQDVDNoRK5UgiBgCAgeEAAcg");
	mask.setTransform(101.6,6.9);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D69E75").s().p("AzaCvQhBABgtg0QgugzAAhJQAAhIAugzQAtg0BBAAMAm1AAAQBAAAAuA0QAuA0AABHQAABIguA0QguA0hAgBg");
	this.shape.setTransform(70.2,1.9,2.104,2.104);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greenSmallne, rect = new cjs.Rectangle(-217,-35,581.6,73.9), [rect]);

// 最下段選択時の背景色
(lib.greenSmallClickedCentercopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EguzAHoIAAvPMBdnAAAQjwExkfDhQlKEFimBzIhkBFg");
	mask.setTransform(67,-2.3);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D69E75").s().p("Ego1AFxQiJAAhghsQhghrAAiaQAAiZBghrQBghsCJAAMBRsAAAQCHAABgBsQBgBsABCYQgBCYhgBtQhgBsiHAAg");
	this.shape.setTransform(70.3,1.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greenSmallClickedCentercopy, rect = new cjs.Rectangle(-224,-35,588.5,73.9), [rect]);

// 中段選択時の背景色
(lib.greenSmallClickedCenter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D69E75").s().p("Ego1AFxQiJAAhghsQhghrAAiaQAAiZBghrQBghsCJAAMBRsAAAQCHAABgBsQBgBsABCYQgBCYhgBtQhgBsiHAAg");
	this.shape.setTransform(70.3,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greenSmallClickedCenter, rect = new cjs.Rectangle(-224,-35,588.5,73.9), [rect]);

// 最上段のデフォルトの色
(lib.greenSmallCenter1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EguzAHoIAAvPMBdnAAAQjwExkfDhQlKEFimBzIhkBFg");
	mask.setTransform(67,-2.3);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9CCB8").s().p("AzaCvQhBABgtg0QgugzAAhJQAAhIAugzQAtg0BBAAMAm1AAAQBAAAAuA0QAuA0AABHQAABIguA0QguA0hAgBg");
	this.shape.setTransform(70.2,1.9,2.104,2.104);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greenSmallCenter1, rect = new cjs.Rectangle(-224,-35,588.5,73.9), [rect]);

// 最下段のデフォルトの色
(lib.greenSmallCenter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9CCB8").s().p("AzaCvQhBABgtg0QgugzAAhJQAAhIAugzQAtg0BBAAMAm1AAAQBAAAAuA0QAuA0AABHQAABIguA0QguA0hAgBg");
	this.shape.setTransform(70.2,1.9,2.104,2.104);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greenSmallCenter, rect = new cjs.Rectangle(-224,-35,588.5,73.9), [rect]);

// 中段のデフォルトの色
(lib.greenSmall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0MG+Q8yAagzhUQEdpHHclcMBQXAAAQDBgSDVDNQDVDNoRK5UgiBgCAgeEAAcg");
	mask.setTransform(101.6,6.9);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9CCB8").s().p("AzaCvQhBABgtg0QgugzAAhJQAAhIAugzQAtg0BBAAMAm1AAAQBAAAAuA0QAuA0AABHQAABIguA0QguA0hAgBg");
	this.shape.setTransform(70.2,1.9,2.104,2.104);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greenSmall, rect = new cjs.Rectangle(-217,-35,581.6,73.9), [rect]);


(lib.capsule2new2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egu0AHoIAAvPMBdpAAAQjxExkfDhQlLEFimBzIhjBFg");
	mask.setTransform(62.1,-2.3);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzaCvQhBABgtg0QgugzAAhJQAAhIAugzQAtg0BBAAMAm1AAAQBAAAAuA0QAuA0AABHQAABIguA0QguA0hAgBg");
	this.shape.setTransform(65.2,1.9,2.104,2.104);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.capsule2new2, rect = new cjs.Rectangle(-229,-35,588.5,73.9), [rect]);


(lib.capsule2new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzaCvQhBABgtg0QgugzAAhJQAAhIAugzQAtg0BBAAMAm1AAAQBAAAAuA0QAuA0AABHQAABIguA0QguA0hAgBg");
	this.shape.setTransform(65.2,1.9,2.104,2.104);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.capsule2new, rect = new cjs.Rectangle(-229,-35,588.5,73.9), [rect]);


(lib.capsule1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA1INQ8lhd1MAnQEynMDdjuICJjIUAhzgCeAi1AAaQQTAMCNHGQCOHEqrCBQmOBLsTAAQo1AAr8gmg");
	mask.setTransform(90.1,2.3);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzaCvQhBABgtg0QgugzAAhJQAAhIAugzQAtg0BBAAMAm1AAAQBAAAAuA0QAuA0AABHQAABIguA0QguA0hAgBg");
	this.shape.setTransform(65.2,1.9,2.104,2.104);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.capsule1, rect = new cjs.Rectangle(-223.2,-35,582.7,73.9), [rect]);


(lib.btnGeneric = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgvpAHCIAAuDMBfTAAAIAAODg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-305,-45,610,90)];


(lib.animatetriangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.animatetriangle, rect = new cjs.Rectangle(-16,-16,32,29), [rect]);


(lib.allGlow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.glow1.compositeOperation="overlay";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.allGlow1, rect = new cjs.Rectangle(-248.7,-35,826,69.5), [rect]);

// Wireless の横棒
(lib.wireless2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	/*
	this.mc = new lib.wireless2_mc();
	this.mc.parent = this;
	this.mc.setTransform(64.9,43.6);
	*/

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.wireless2, rect = new cjs.Rectangle(0,0,129.7,87.2), [rect]);

// IT User の横棒
(lib.wireless1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	/*
	this.mc = new lib.wireless1_mc();
	this.mc.parent = this;
	this.mc.setTransform(64.9,43.6);
	*/
	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.wireless1, rect = new cjs.Rectangle(0,0,129.7,87.2), [rect]);


(lib.triannglebit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.animatetriangle();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1,alpha:1},4).to({scaleX:1,scaleY:1,alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16.5,32,29);
p.frameBounds = [rect, new cjs.Rectangle(-16.4,-16.9,32.8,29.8), new cjs.Rectangle(-16.8,-17.3,33.7,30.5), new cjs.Rectangle(-17.2,-17.7,34.5,31.3), new cjs.Rectangle(-17.6,-18.1,35.3,32), new cjs.Rectangle(-17.3,-17.8,34.6,31.4), new cjs.Rectangle(-16.9,-17.4,34,30.8), new cjs.Rectangle(-16.6,-17.1,33.3,30.2), new cjs.Rectangle(-16.3,-16.8,32.7,29.6), new cjs.Rectangle(-16,-16.5,32,29)];


(lib.triangles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// triannglebit
	this.instance = new lib.triannglebit("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(140,14.3,0.344,1,90);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(84));

	// triannglebit
	this.instance_1 = new lib.triannglebit("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-128,0.2,1,0.485,90);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(85));

	// triannglebit
	this.instance_2 = new lib.triannglebit("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-69,6.2,1,0.496,90);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).wait(86));

	// triannglebit
	this.instance_3 = new lib.triannglebit("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(210.4,9.2,0.578,1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).wait(87));

	// triannglebit
	this.instance_4 = new lib.triannglebit("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-259.6,-0.8,1,0.513,90);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).wait(88));

	// triannglebit
	this.instance_5 = new lib.triannglebit("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(10.3,-15.8,2.446,0.345,0,180,0,0.1,0.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).wait(89));

	// triannglebit
	this.instance_6 = new lib.triannglebit("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(90.4,9.2,1,0.549,0,180,0,0,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).wait(90));

	// triannglebit
	this.instance_7 = new lib.triannglebit("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(10.1,10.2,0.588,1,0,0,0,0.1,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(91));

	// triannglebit
	this.instance_8 = new lib.triannglebit("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-100,-9.8,0.58,1,0,180,0,-0.1,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).wait(92));

	// triannglebit
	this.instance_9 = new lib.triannglebit("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-160,10.3,1,0.605,0,0,0,0,0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(93));

	// triannglebit
	this.instance_10 = new lib.triannglebit("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-210,0.2,0.578,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(94));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-219.2,-16.3,18.5,29);
p.frameBounds = [rect, new cjs.Rectangle(-219.4,-16.7,75.4,34.4), new cjs.Rectangle(-219.7,-22.3,129,40.3), new cjs.Rectangle(-219.9,-22.6,239.3,45.3), new cjs.Rectangle(-220.1,-22.9,326.6,46), new cjs.Rectangle(-220,-23.3,326.8,46.7), new cjs.Rectangle(-265.9,-23.6,373.1,47.3), new cjs.Rectangle(-266.1,-23.3,485.8,47.4), new cjs.Rectangle(-266.3,-23.1,486.2,46.9), new cjs.Rectangle(-266.4,-22.8,486.6,46.3), new cjs.Rectangle(-266.6,-22.5,487,45.8), new cjs.Rectangle(-266.4,-22.3,487.1,45.8), new cjs.Rectangle(-266.3,-22.3,486.7,46.2), new cjs.Rectangle(-266.2,-22.3,486.5,45.8), new cjs.Rectangle(-266.1,-22.3,486.1,45.5), new cjs.Rectangle(-265.9,-22.3,485.8,45.2), rect=new cjs.Rectangle(-265.9,-22.3,485.6,45), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.subtriangles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgyMAF8QiPAAhmhvQhmhxAAicQAAidBmhvQBmhvCPAAMBkZAAAQCQAABnBvQBkBvAACdQAACchkBxQhnBviQAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-24.8,y:2.6}).wait(34).to({graphics:null,x:0,y:0}).wait(51));

	// Layer 1
	this.instance = new lib.triangles("synched",0,false);
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},34).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-219.2,-16.3,18.5,29);
p.frameBounds = [rect, new cjs.Rectangle(-219.4,-16.7,75.4,34.4), new cjs.Rectangle(-219.7,-22.3,129,40.3), new cjs.Rectangle(-219.9,-22.6,239.3,45.3), new cjs.Rectangle(-220.1,-22.9,326.6,46), new cjs.Rectangle(-220,-23.3,326.8,46.7), new cjs.Rectangle(-265.9,-23.6,373.1,47.3), new cjs.Rectangle(-266.1,-23.3,485.8,47.4), new cjs.Rectangle(-266.3,-23.1,486.2,46.9), new cjs.Rectangle(-266.4,-22.8,486.6,46.3), new cjs.Rectangle(-266.6,-22.5,487,45.8), new cjs.Rectangle(-266.4,-22.3,487.1,45.8), new cjs.Rectangle(-266.3,-22.3,486.7,46.2), new cjs.Rectangle(-266.2,-22.3,486.5,45.8), new cjs.Rectangle(-266.1,-22.3,486.1,45.5), new cjs.Rectangle(-265.9,-22.3,485.8,45.2), rect=new cjs.Rectangle(-265.9,-22.3,485.6,45), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.realGlow2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.realGlow2_mc();
	this.mc.parent = this;
	this.mc.setTransform(40,30);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.realGlow2, rect = new cjs.Rectangle(1,10,78,40), [rect]);


(lib.realGlow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.realGlow_mc();
	this.mc.parent = this;
	this.mc.setTransform(40.3,29.5);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.realGlow, rect = new cjs.Rectangle(0,0,80.5,59), [rect]);


(lib.menuItem3x2x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_117 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(117).call(this.frame_117).wait(1));

	// Layer 6
	this.instance = new lib.subtriangles("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-11.5,0.2,0.936,1.2,0,0,0,0.1,0);
	this.instance.alpha = 0.18;

	this.instance_1 = new lib.subtriangles("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19.9,0.2,0.936,1.2,0,0,0,0.1,0);
	this.instance_1.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},34).wait(84));

	// Layer 8
	this.instance_2 = new lib.subtext32x();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,-2.9,0.2,0.2,0,0,0,0,-0.3);
	this.instance_2.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-38.6,regY:1.7,scaleX:0.21,scaleY:0.21,x:-8.5,y:-2.4,alpha:0.189},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-9.6,y:-2,alpha:0.225},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-12.9,y:-0.9,alpha:0.325},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:-25.8,y:3.1,alpha:0.728},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-32.5,y:5.3,alpha:0.935},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-34.2,y:5.8,alpha:0.988},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:4,y:4,alpha:1},0).wait(111));

	// Layer 7
	this.instance_3 = new lib.subtext32x();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2.5,-4.9,0.2,0.2,0,0,0,-0.3,-0.3);
	this.instance_3.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-38.6,regY:1.7,scaleX:0.2,scaleY:0.2,x:-10.2,y:-4.4,alpha:0.537},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-10.7,alpha:0.529},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-11.6,y:-4.2,alpha:0.513},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-13.3,y:-4,alpha:0.482},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-16.7,y:-3.5,alpha:0.42},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-26.5,y:-2,alpha:0.246},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-35.3,y:-0.8,alpha:0.09},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-38.2,y:-0.3,alpha:0.037},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-39.5,y:-0.1,alpha:0.014},0).wait(1).to({scaleX:1,scaleY:1,x:-40.2,y:0,alpha:0.003},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-2,y:-2,alpha:0},0).to({_off:true},1).wait(106));

	// Layer 1
	this.instance_4 = new lib.subtext32x();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.9,-2.1,0.2,0.2);
	this.instance_4.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-38.6,regY:1.7,scaleX:0.2,scaleY:0.2,x:-8.6,y:-1.7,alpha:0.53},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-8.9,alpha:0.524},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-9.5,y:-1.6,alpha:0.514},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-10.5,y:-1.5,alpha:0.496},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-12.3,y:-1.3,alpha:0.465},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-15.6,y:-0.9,alpha:0.407},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-23.7,y:0.1,alpha:0.262},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-32.4,y:1,alpha:0.109},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-35.6,y:1.4,alpha:0.052},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-37.2,y:1.6,alpha:0.024},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-38,y:1.7,alpha:0.009},0).wait(1).to({scaleX:1,scaleY:1,x:-38.5,alpha:0.002},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,alpha:0},0).to({_off:true},1).wait(104));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-430.7,-169.8,930,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.menuItem2x1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_117 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(117).call(this.frame_117).wait(1));

	// Layer 6
	this.instance = new lib.subtriangles("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(56.5,0.2,0.936,1.2,0,0,0,0.1,0);
	this.instance.alpha = 0.18;

	this.instance_1 = new lib.subtriangles("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.1,0.2,0.936,1.2,0,0,0,0.1,0);
	this.instance_1.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},33).wait(84));

	// Layer 8
	this.instance_2 = new lib.subtext12xcopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,7.1,0.2,0.2,0,0,0,0,-0.3);
	this.instance_2.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-17.5,regY:1.4,scaleX:0.21,scaleY:0.21,x:-4.1,y:7.4,alpha:0.189},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-4.5,y:7.3,alpha:0.225},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-5.7,y:7.1,alpha:0.325},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:-10.3,y:6.3,alpha:0.728},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-12.8,y:5.8,alpha:0.935},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-13.4,y:5.7,alpha:0.988},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:4,y:4,alpha:1},0).wait(111));

	// Layer 7
	this.instance_3 = new lib.subtext12xcopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2.5,5.1,0.2,0.2,0,0,0,-0.3,-0.3);
	this.instance_3.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-17.5,regY:1.4,scaleX:0.2,scaleY:0.2,x:-5.9,y:5.4,alpha:0.537},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-6.1,y:5.3,alpha:0.529},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-6.6,y:5.2,alpha:0.513},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-7.3,y:4.8,alpha:0.482},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-8.8,y:4.2,alpha:0.42},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-13.1,y:2.3,alpha:0.246},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-17,y:0.6,alpha:0.09},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-18.3,y:0.1,alpha:0.037},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-18.9,y:-0.2,alpha:0.014},0).wait(1).to({scaleX:1,scaleY:1,x:-19.1,y:-0.3,alpha:0.003},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-2,y:-2,alpha:0},0).to({_off:true},1).wait(106));

	// Layer 1
	this.instance_4 = new lib.subtext12xcopy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.9,7.9,0.2,0.2);
	this.instance_4.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-17.5,regY:1.4,scaleX:0.2,scaleY:0.2,x:-4.4,y:8.2,alpha:0.53},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-4.5,y:8.1,alpha:0.524},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-4.8,y:7.9,alpha:0.514},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-5.2,y:7.7,alpha:0.496},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-6,y:7.3,alpha:0.465},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-7.4,y:6.6,alpha:0.407},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-11,y:4.7,alpha:0.262},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-14.8,y:2.8,alpha:0.109},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-16.2,y:2.1,alpha:0.052},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-16.8,y:1.7,alpha:0.024},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-17.2,y:1.5,alpha:0.009},0).wait(1).to({scaleX:1,scaleY:1,x:-17.4,y:1.4,alpha:0.002},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,alpha:0},0).to({_off:true},1).wait(104));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-430.7,-169.8,930,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.menuItem2x1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_117 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(117).call(this.frame_117).wait(1));

	// Layer 6
	this.instance = new lib.subtriangles("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(56.5,0.2,0.936,1.2,0,0,0,0.1,0);
	this.instance.alpha = 0.18;

	this.instance_1 = new lib.subtriangles("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.1,0.2,0.936,1.2,0,0,0,0.1,0);
	this.instance_1.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},33).wait(84));

	// Layer 8
	this.instance_2 = new lib.subtext12x();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,7.1,0.2,0.2,0,0,0,0,-0.3);
	this.instance_2.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-0.3,regY:-1.8,scaleX:0.21,scaleY:0.21,y:6.7,alpha:0.189},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-0.3,y:6.5,alpha:0.225},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:0.2,y:6,alpha:0.325},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:2.3,y:3.9,alpha:0.728},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:3.3,y:2.8,alpha:0.935},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:3.6,y:2.5,alpha:0.988},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:4,y:4,alpha:1},0).wait(111));

	// Layer 7
	this.instance_3 = new lib.subtext12x();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2.5,5.1,0.2,0.2,0,0,0,-0.3,-0.3);
	this.instance_3.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:-1.8,scaleX:0.2,scaleY:0.2,x:-2.4,y:4.8,alpha:0.537},0).wait(1).to({scaleX:0.22,scaleY:0.22,y:4.6,alpha:0.529},0).wait(1).to({scaleX:0.24,scaleY:0.24,y:4.4,alpha:0.513},0).wait(1).to({scaleX:0.28,scaleY:0.28,y:3.9,alpha:0.482},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-2.3,y:2.9,alpha:0.42},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-2.2,y:0.2,alpha:0.246},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-2.1,y:-2.1,alpha:0.09},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-2,y:-2.9,alpha:0.037},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-3.3,alpha:0.014},0).wait(1).to({scaleX:1,scaleY:1,y:-3.5,alpha:0.003},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:-2,alpha:0},0).to({_off:true},1).wait(106));

	// Layer 1
	this.instance_4 = new lib.subtext12x();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.9,7.9,0.2,0.2);
	this.instance_4.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-0.3,regY:-1.8,scaleX:0.2,scaleY:0.2,y:7.5,alpha:0.53},0).wait(1).to({scaleX:0.21,scaleY:0.21,y:7.4,alpha:0.524},0).wait(1).to({scaleX:0.23,scaleY:0.23,y:7.2,alpha:0.514},0).wait(1).to({scaleX:0.25,scaleY:0.25,y:6.9,alpha:0.496},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-0.8,y:6.4,alpha:0.465},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-0.7,y:5.4,alpha:0.407},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-0.6,y:2.8,alpha:0.262},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-0.4,y:0.1,alpha:0.109},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-0.3,y:-0.9,alpha:0.052},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:-1.4,alpha:0.024},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:-1.7,alpha:0.009},0).wait(1).to({scaleX:1,scaleY:1,y:-1.8,alpha:0.002},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,alpha:0},0).to({_off:true},1).wait(104));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-430.7,-169.8,930,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.leftAnim2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Egm3gvzMAsEAAAMAAABfnMgsEAAAg");
	var mask_graphics_1 = new cjs.Graphics().p("Egnug0IMA2+AAAMAAABoRMg2+AAAg");
	var mask_graphics_2 = new cjs.Graphics().p("Egolg4dMBB5AAAMAAABw7MhB5AAAg");
	var mask_graphics_3 = new cjs.Graphics().p("Egpcg8yMBM0AAAMAAAB5lMhM0AAAg");
	var mask_graphics_4 = new cjs.Graphics().p("Egr3hBHMBXvAAAMAAACCPMhXvAAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EgxUhFcMBipAAAMAAACK5MhipAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("EgzahHjMBm1AAAMAAACPHMhm1AAAg");
	var mask_graphics_7 = new cjs.Graphics().p("Eg1fhJrMBq/AAAMAAACTXMhq/AAAg");
	var mask_graphics_8 = new cjs.Graphics().p("Eg3lhLzMBvLAAAMAAACXnMhvLAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("Eg5qhN6MBzVAAAMAAACb1MhzVAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("Eg7whQCMB3hAAAMAAACgFMh3hAAAg");
	var mask_graphics_11 = new cjs.Graphics().p("Eg91hSKMB7rAAAMAAACkVMh7rAAAg");
	var mask_graphics_12 = new cjs.Graphics().p("Eg/7hURMB/3AAAMAAACojMh/3AAAg");
	var mask_graphics_13 = new cjs.Graphics().p("EhCAhWZMCEBAAAMAAACszMiEBAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-248.7,y:-101.1}).wait(1).to({graphics:mask_graphics_1,x:-254.3,y:-90}).wait(1).to({graphics:mask_graphics_2,x:-259.8,y:-78.8}).wait(1).to({graphics:mask_graphics_3,x:-265.3,y:-67.7}).wait(1).to({graphics:mask_graphics_4,x:-260.7,y:-56.5}).wait(1).to({graphics:mask_graphics_5,x:-237,y:-45.4}).wait(1).to({graphics:mask_graphics_6,x:-197.5,y:-23.4}).wait(1).to({graphics:mask_graphics_7,x:-158,y:-1.4}).wait(1).to({graphics:mask_graphics_8,x:-118.5,y:20.6}).wait(1).to({graphics:mask_graphics_9,x:-79,y:42.6}).wait(1).to({graphics:mask_graphics_10,x:-39.6,y:64.6}).wait(1).to({graphics:mask_graphics_11,x:-0.1,y:86.6}).wait(1).to({graphics:mask_graphics_12,x:39.4,y:108.6}).wait(1).to({graphics:mask_graphics_13,x:79.1,y:130.7}).wait(1).to({graphics:null,x:0,y:0}).wait(4));

	// Layer 3
	this.instance = new lib.strip1();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.191},10).to({_off:true},1).wait(7));

	// Layer 1
	this.instance_1 = new lib.Bitmap10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-200,-234);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200.3,-234.2,400.3,468.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.leftAnim2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgDZgvzMAsEAAAMAAABfnMgsEAAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EgOfg0IMA2+AAAMAAABoRMg2+AAAg");
	var mask_graphics_2 = new cjs.Graphics().p("EgZlg4dMBB4AAAMAAABw7MhB4AAAg");
	var mask_graphics_3 = new cjs.Graphics().p("Egksg8yMBM0AAAMAAAB5lMhM0AAAg");
	var mask_graphics_4 = new cjs.Graphics().p("Egr3hBHMBXvAAAMAAACCPMhXvAAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EgxUhFcMBipAAAMAAACK5MhipAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("EgzahHjMBm1AAAMAAACPHMhm1AAAg");
	var mask_graphics_7 = new cjs.Graphics().p("Eg1fhJrMBq/AAAMAAACTXMhq/AAAg");
	var mask_graphics_8 = new cjs.Graphics().p("Eg3lhLzMBvLAAAMAAACXnMhvLAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("Eg5qhN6MBzVAAAMAAACb1MhzVAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("Eg7whQCMB3hAAAMAAACgFMh3hAAAg");
	var mask_graphics_11 = new cjs.Graphics().p("Eg91hSKMB7rAAAMAAACkVMh7rAAAg");
	var mask_graphics_12 = new cjs.Graphics().p("Eg/7hURMB/3AAAMAAACojMh/3AAAg");
	var mask_graphics_13 = new cjs.Graphics().p("EhCAhWZMCEBAAAMAAACszMiEBAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:260.3,y:134.9}).wait(1).to({graphics:mask_graphics_1,x:259.1,y:134.4}).wait(1).to({graphics:mask_graphics_2,x:257.9,y:134}).wait(1).to({graphics:mask_graphics_3,x:256.8,y:133.5}).wait(1).to({graphics:mask_graphics_4,x:230.5,y:133.1}).wait(1).to({graphics:mask_graphics_5,x:193,y:132.6}).wait(1).to({graphics:mask_graphics_6,x:178.7,y:132.3}).wait(1).to({graphics:mask_graphics_7,x:164.5,y:132.1}).wait(1).to({graphics:mask_graphics_8,x:150.2,y:131.8}).wait(1).to({graphics:mask_graphics_9,x:136,y:131.6}).wait(1).to({graphics:mask_graphics_10,x:121.7,y:131.3}).wait(1).to({graphics:mask_graphics_11,x:107.4,y:131.1}).wait(1).to({graphics:mask_graphics_12,x:93.2,y:130.9}).wait(1).to({graphics:mask_graphics_13,x:79.1,y:130.7}).wait(1).to({graphics:null,x:0,y:0}).wait(4));

	// Layer 3
	this.instance = new lib.strip1();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.191},10).to({_off:true},1).wait(7));

	// Layer 1
	this.instance_1 = new lib.Bitmap7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-200,-234);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200.3,-234.2,400.3,468.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.itusers2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	/*
	this.mc = new lib.itusers2_mc();
	this.mc.parent = this;
	this.mc.setTransform(60.4,41.8);
	*/

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.itusers2, rect = new cjs.Rectangle(-2,18,124.8,47.6), [rect]);


(lib.itusers1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	/*
	this.mc = new lib.itusers1_mc();
	this.mc.parent = this;
	this.mc.setTransform(61,42.8);
	*/
	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.itusers1, rect = new cjs.Rectangle(-1,19,124,47.6), [rect]);


(lib.itusers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1,idle:24,on:43,off:49,clicked:56});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		this.stop();
		this.checkRotation = function(mc) {
			if (_this.rotation == 0) {
				mc.mc.rotation = 0;
			} else {
				mc.mc.rotation = 180;
			}
		}
		this.checkRotationAll = function() {
			if (_this.txt1) _this.checkRotation(_this.txt1);
			if (_this.txt2) _this.checkRotation(_this.txt2);
			if (_this.txt3) _this.checkRotation(_this.txt3);
		}
		this.checkRotation(this.txt1);
	}
	this.frame_1 = function() {
		this.checkRotation(this.txt3);
	}
	this.frame_42 = function() {
		this.stop();
	}
	this.frame_43 = function() {
		this.checkRotation(this.txt1);
		this.checkRotation(this.txt2);
	}
	this.frame_48 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.checkRotation(this.txt1);
		this.checkRotation(this.txt2);
	}
	this.frame_54 = function() {
		this.stop();
	}
	this.frame_56 = function() {
		this.checkRotation(this.txt2);
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(41).call(this.frame_42).wait(1).call(this.frame_43).wait(5).call(this.frame_48).wait(1).call(this.frame_49).wait(5).call(this.frame_54).wait(2).call(this.frame_56).wait(13).call(this.frame_69).wait(1));

	// btn
	this.wirelessBtn = new lib.wirelessBTB();
	this.wirelessBtn.parent = this;
	this.wirelessBtn.setTransform(72.6,22.1,1,1,0,0,0,90.5,40);
	new cjs.ButtonHelper(this.wirelessBtn, 0, 1, 2, false, new lib.wirelessBTB(), 3);

	this.timeline.addTween(cjs.Tween.get(this.wirelessBtn).to({_off:true},55).wait(15));

	// lineAnim
	this.instance = new lib.lineAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(103.6,21.8,1,1,0,0,0,31.6,2.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(33).to({y:22.1,startPosition:33},0).wait(1).to({regX:45.7,scaleX:1.01,scaleY:1.01,x:119,startPosition:34},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:123.6,startPosition:35},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:128.1,startPosition:36},0).wait(1).to({regX:31.7,scaleX:1.1,scaleY:1.1,x:113.9,startPosition:37},0).wait(2).to({startPosition:37},0).wait(1).to({regX:45.7,scaleX:1.09,scaleY:1.09,x:127.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:122.2,y:22},0).wait(1).to({scaleX:1,scaleY:1,x:118.1,y:21.9},0).wait(1).to({regX:31.7,regY:2.9,scaleX:0.99,scaleY:0.99,x:103.4},0).wait(17));

	// wirelessGlow
	this.txt3 = new lib.realGlow2();
	this.txt3.parent = this;
	this.txt3.setTransform(33.3,22.5,0.06,0.06,0,0,0,40,29.2);
	this.txt3.alpha = 0.789;
	this.txt3._off = true;

	this.instance_1 = new lib.itusers2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.6,10.9,0.5,0.5,0,0,0,33.1,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.txt3}]},1).to({state:[{t:this.txt3}]},4).to({state:[{t:this.txt3}]},4).to({state:[{t:this.txt3}]},5).to({state:[]},1).to({state:[{t:this.instance_1}]},40).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.txt3).wait(1).to({_off:false},0).to({regX:40.1,regY:29.4,scaleX:1.44,scaleY:1.44,x:33.2,y:22.3},4,cjs.Ease.get(1)).to({regX:40.3,regY:29.5,scaleX:1,scaleY:1,x:33.3,y:22.5,alpha:0.27},4).to({regY:29.4,scaleX:0.8,scaleY:0.8,alpha:0},5).to({_off:true},1).wait(55));

	// Layer 5
	this.txt2 = new lib.itusers2();
	this.txt2.parent = this;
	this.txt2.setTransform(17.6,10.9,0.5,0.5,0,0,0,33.1,21.8);
	this.txt2.alpha = 0;
	this.txt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt2).wait(43).to({_off:false},0).to({scaleX:0.55,scaleY:0.55,x:16.2,y:10,alpha:1},4,cjs.Ease.get(1)).wait(2).to({scaleX:0.5,scaleY:0.5,x:17.6,y:10.9,alpha:0},4).to({_off:true},1).wait(16));

	// Wireless Users White
	this.txt1 = new lib.itusers1();
	this.txt1.parent = this;
	this.txt1.setTransform(32.4,21.9,0.03,0.03,0,0,0,33.4,23.4);

	this.timeline.addTween(cjs.Tween.get(this.txt1).to({regX:33.1,regY:21.9,scaleX:0.6,scaleY:0.6,x:14.4,y:8.7},5,cjs.Ease.get(1)).to({regY:21.8,scaleX:0.5,scaleY:0.5,x:17.6,y:10.9},4).wait(34).to({scaleX:0.55,scaleY:0.55,x:16,y:9.8},4,cjs.Ease.get(1)).wait(1).to({alpha:0},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:17.6,y:10.9,alpha:1},4).to({_off:true},2).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.9,-17.9,181,80);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-19.5,-17.9,182.5,80), new cjs.Rectangle(-23.1,-17.9,186.2,80), new cjs.Rectangle(-18.8,-17.9,181.8,80), rect=new cjs.Rectangle(-17.9,-17.9,181,80), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-17.9,-17.9,182,80), new cjs.Rectangle(-17.9,-17.9,181,80), new cjs.Rectangle(-17.9,-17.9,182,80), rect=new cjs.Rectangle(-17.9,-17.9,181,80), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,9,135.1,23.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.blueCells = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":1});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
	}
	this.frame_75 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(75).call(this.frame_75).wait(1));

	// Guide: Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_8 = new cjs.Graphics().p("AkrTiMAAAgnDIJXAAMAAAAnDg");
	var mask_graphics_9 = new cjs.Graphics().p("Al9TiMAAAgnDIL7AAMAAAAnDg");
	var mask_graphics_10 = new cjs.Graphics().p("AnxTiMAAAgnDIPjAAMAAAAnDg");
	var mask_graphics_11 = new cjs.Graphics().p("AqHTiMAAAgnDIUPAAMAAAAnDg");
	var mask_graphics_12 = new cjs.Graphics().p("AoyTiMAAAgnDIRkAAMAAAAnDg");
	var mask_graphics_13 = new cjs.Graphics().p("AnnTiMAAAgnDIPPAAMAAAAnDg");
	var mask_graphics_14 = new cjs.Graphics().p("AmnTiMAAAgnDINPAAMAAAAnDg");
	var mask_graphics_15 = new cjs.Graphics().p("AlzTiMAAAgnDILnAAMAAAAnDg");
	var mask_graphics_16 = new cjs.Graphics().p("AlKTiMAAAgnDIKUAAMAAAAnDg");
	var mask_graphics_17 = new cjs.Graphics().p("A7UTiMAAAgnDIJYAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_8,x:279.8,y:-9}).wait(1).to({graphics:mask_graphics_9,x:212.6,y:-4.9}).wait(1).to({graphics:mask_graphics_10,x:117.6,y:0.9}).wait(1).to({graphics:mask_graphics_11,x:-5.4,y:8.4}).wait(1).to({graphics:mask_graphics_12,x:-82.7,y:15.2}).wait(1).to({graphics:mask_graphics_13,x:-150,y:21.1}).wait(1).to({graphics:mask_graphics_14,x:-207.4,y:26.2}).wait(1).to({graphics:mask_graphics_15,x:-254.8,y:30.3}).wait(1).to({graphics:mask_graphics_16,x:-292.3,y:33.6}).wait(1).to({graphics:mask_graphics_17,x:-174.9,y:36}).wait(59));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgmzACPQh4AAhVhJQhZhLABhqIAAgMQABgIAFgFQAHgGAIAAIAKAAQAFAAAFADQAEADADAFQACAFAAAFIAAAKQABBUBGA7QBHA9BlAAMBNnAAAQBmAABHg9IABAAQBEg7ABhUIAAgKQgBgFADgFQADgFAEgDQAFgDAGAAIAKAAQAHAAAHAGQAFAFABAIIAAAMQAABqhWBLQhXBJh4AAg");
	this.shape.setTransform(-5,11.2);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8).to({_off:false},0).wait(68));

	// Guide: Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("AkrTiMAAAgnDIJXAAMAAAAnDg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AllTiMAAAgnDILLAAMAAAAnDg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AmzTiMAAAgnDINnAAMAAAAnDg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AoUTiMAAAgnDIQpAAMAAAAnDg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AqHTiMAAAgnDIUPAAMAAAAnDg");
	var mask_1_graphics_6 = new cjs.Graphics().p("ApGTiMAAAgnDISNAAMAAAAnDg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AoLTiMAAAgnDIQXAAMAAAAnDg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AnWTiMAAAgnDIOtAAMAAAAnDg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AmoTiMAAAgnDINQAAMAAAAnDg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Al/TiMAAAgnDIL/AAMAAAAnDg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AldTiMAAAgnDIK7AAMAAAAnDg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AlBTiMAAAgnDIKDAAMAAAAnDg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AkrTiMAAAgnDIJXAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:-289.2,y:-15}).wait(1).to({graphics:mask_1_graphics_2,x:-241.7,y:-11.1}).wait(1).to({graphics:mask_1_graphics_3,x:-178.5,y:-5.8}).wait(1).to({graphics:mask_1_graphics_4,x:-99.8,y:0.6}).wait(1).to({graphics:mask_1_graphics_5,x:-5.4,y:8.4}).wait(1).to({graphics:mask_1_graphics_6,x:53.7,y:13.6}).wait(1).to({graphics:mask_1_graphics_7,x:107.2,y:18.3}).wait(1).to({graphics:mask_1_graphics_8,x:155.1,y:22.5}).wait(1).to({graphics:mask_1_graphics_9,x:197.4,y:26.2}).wait(1).to({graphics:mask_1_graphics_10,x:234,y:29.4}).wait(1).to({graphics:mask_1_graphics_11,x:265,y:32.1}).wait(1).to({graphics:mask_1_graphics_12,x:290.4,y:34.3}).wait(1).to({graphics:mask_1_graphics_13,x:310.2,y:36}).wait(63));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EAq7ACEQgIAAgGgGQgGgFAAgIQgFhOhAg3QhJg9hlAAMhNnAAAQhmAAhHA9QhCA3gEBOQAAAIgGAFQgGAGgIAAIgKAAQgFAAgFgDQgFgDgCgFQgDgFAAgFQAEhjBUhGQBUhJB5AAMBNnAAAQB4AABWBJQBSBGAFBjQAAAFgDAFQgDAFgEADQgFADgFAAg");
	this.shape_1.setTransform(-5,-12.3);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(75));

	// Layer 8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_10 = new cjs.Graphics().p("AgCx9IAJAAMAAAAj7IgJAAg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AmIx9IMRAAMAAAAj7IsRAAg");
	var mask_2_graphics_12 = new cjs.Graphics().p("A4Vx9MAwrAAAMAAAAj7MgwrAAAg");
	var mask_2_graphics_13 = new cjs.Graphics().p("A/8x9MA/5AAAMAAAAj7Mg/5AAAg");
	var mask_2_graphics_14 = new cjs.Graphics().p("Egl2gR9MBLtAAAMAAAAj7MhLtAAAg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EgqFgR9MBULAAAMAAAAj7MhULAAAg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EgsngR9MBZPAAAMAAAAj7MhZPAAAg");
	var mask_2_graphics_17 = new cjs.Graphics().p("EgtdgR9MBa7AAAMAAAAj7Mha7AAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_2_graphics_10,x:0.7,y:15}).wait(1).to({graphics:mask_2_graphics_11,x:-2.9,y:15}).wait(1).to({graphics:mask_2_graphics_12,x:-14.5,y:15}).wait(1).to({graphics:mask_2_graphics_13,x:-19.4,y:15}).wait(1).to({graphics:mask_2_graphics_14,x:-23.2,y:15}).wait(1).to({graphics:mask_2_graphics_15,x:-25.9,y:15}).wait(1).to({graphics:mask_2_graphics_16,x:-27.5,y:15}).wait(1).to({graphics:mask_2_graphics_17,x:1,y:15}).wait(59));

	// Layer 9
	this.instance = new lib.subtriangles("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(19.8,-2.1);
	this.instance.alpha = 0.23;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},21).wait(53));

	// Layer 7
	this.instance_1 = new lib.capsule1();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({alpha:0},8).to({_off:true},1).wait(57));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDEDED").s().p("EgmzADlQhvABhOhDQhPhEAAhfQAAhfBPhDQBOhDBvAAMBNnAAAQBvAABPBDQBOBDAABfQAABfhOBEQhPBDhvgBg");
	this.shape_2.setTransform(-5,0);

	this.instance_2 = new lib.testblue();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-5,0);

	var maskedShapeInstanceList = [this.shape_2,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.instance_2}]},14).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, new cjs.Rectangle(-282.6,-25.4,23.4,26.4), new cjs.Rectangle(-277.5,-25.4,96.6,36), new cjs.Rectangle(-222.1,-25.4,97.9,41.1), new cjs.Rectangle(-199.9,-25.4,153.4,41.3), new cjs.Rectangle(-200.1,-25.4,259.6,46), new cjs.Rectangle(-200.3,-25.4,326.6,46.3), new cjs.Rectangle(-200.2,-25.4,359.8,46.7), new cjs.Rectangle(-246.1,-25.8,518.8,51.3), new cjs.Rectangle(-246.3,-25.5,497.1,51), new cjs.Rectangle(0.5,-54.5,272,113.7), new cjs.Rectangle(-70.2,-35,343,73.9), new cjs.Rectangle(-170.3,-35,443,73.9), new cjs.Rectangle(-223.8,-35,408.9,73.9), new cjs.Rectangle(-265.4,-35,484.6,73.9), new cjs.Rectangle(-282.7,-35,526.2,73.9), new cjs.Rectangle(-282.7,-35,540.8,73.9), new cjs.Rectangle(-280.2,-35,572.2,73.9), new cjs.Rectangle(-280.2,-54.5,572.2,113.7), rect=new cjs.Rectangle(-280.2,-24.4,550.4,47.4), rect, rect, rect, rect=new cjs.Rectangle(-280.2,-22.9,550.4,45.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animRightPurple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EArGgvzMgsEAAAMAAABfnMAsEAAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EAregwJMgu5AAAMAAABgTMAu5AAAg");
	var mask_graphics_2 = new cjs.Graphics().p("EAsogxLMg3cAAAMAAABiXMA3cAAAg");
	var mask_graphics_3 = new cjs.Graphics().p("EAukgy6MhFsAAAMAAABl1MBFsAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("EAxQg1UMhZoAAAMAAABqpMBZoAAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EA5pg4bMhzRAAAMAAABw3MBzRAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("EA8+g5PMh57AAAMAAAByfMB57AAAg");
	var mask_graphics_7 = new cjs.Graphics().p("EA/2g57Mh/rAAAMAAABz3MB/rAAAg");
	var mask_graphics_8 = new cjs.Graphics().p("EBCRg6hMiEhAAAMAAAB1DMCEhAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("EBERg7AMiIhAAAMAAAB2BMCIhAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("EBF0g7YMiLnAAAMAAAB2xMCLnAAAg");
	var mask_graphics_11 = new cjs.Graphics().p("EBG7g7pMiN1AAAMAAAB3TMCN1AAAg");
	var mask_graphics_12 = new cjs.Graphics().p("EBHlg7zMiPJAAAMAAAB3nMCPJAAAg");
	var mask_graphics_13 = new cjs.Graphics().p("EBHzg73MiPlAAAMAAAB3vMCPlAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:275.8,y:-125.5}).wait(1).to({graphics:mask_graphics_1,x:278.2,y:-122.7}).wait(1).to({graphics:mask_graphics_2,x:285.6,y:-114.2}).wait(1).to({graphics:mask_graphics_3,x:298,y:-100.2}).wait(1).to({graphics:mask_graphics_4,x:315.2,y:-80.4}).wait(1).to({graphics:mask_graphics_5,x:306,y:-55.1}).wait(1).to({graphics:mask_graphics_6,x:243.7,y:-30.3}).wait(1).to({graphics:mask_graphics_7,x:189.7,y:-8.8}).wait(1).to({graphics:mask_graphics_8,x:144.1,y:9.4}).wait(1).to({graphics:mask_graphics_9,x:106.7,y:24.3}).wait(1).to({graphics:mask_graphics_10,x:77.6,y:35.9}).wait(1).to({graphics:mask_graphics_11,x:56.9,y:44.2}).wait(1).to({graphics:mask_graphics_12,x:44.4,y:49.2}).wait(1).to({graphics:mask_graphics_13,x:40.5,y:50.8}).wait(1).to({graphics:null,x:0,y:0}).wait(8));

	// Layer 12
	this.instance = new lib.whiteRight();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.191},11).to({_off:true},1).wait(10));

	// Layer 1
	this.instance_1 = new lib.Bitmap8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-200,-223);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199.5,-222.6,399,445.3);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-199.5,-223.5,399,446.2), rect, rect, rect, rect=new cjs.Rectangle(-200.5,-223.5,400,446.2), rect, rect, rect, rect, new cjs.Rectangle(-200,-223,399.5,445.7), rect=new cjs.Rectangle(-200,-223,399,445), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animRight2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EAm4gvzMgsEAAAMAAABfnMAsEAAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EAnGgv+MgtgAAAMAAABf9MAtgAAAg");
	var mask_graphics_2 = new cjs.Graphics().p("EAnwgwgMgx3AAAMAAABhBMAx3AAAg");
	var mask_graphics_3 = new cjs.Graphics().p("EAo3gxYMg5IAAAMAAABixMA5IAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("EAqbgynMhDUAAAMAAABlPMBDUAAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EAsbg0NMhQZAAAMAAABobMBQZAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("EAwMg2JMhgXAAAMAAABsTMBgXAAAg");
	var mask_graphics_7 = new cjs.Graphics().p("EA5pg4bMhzRAAAMAAABw3MBzRAAAg");
	var mask_graphics_8 = new cjs.Graphics().p("EA8+g5PMh57AAAMAAAByfMB57AAAg");
	var mask_graphics_9 = new cjs.Graphics().p("EA/2g57Mh/rAAAMAAABz3MB/rAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("EBCRg6hMiEhAAAMAAAB1DMCEhAAAg");
	var mask_graphics_11 = new cjs.Graphics().p("EBERg7AMiIhAAAMAAAB2BMCIhAAAg");
	var mask_graphics_12 = new cjs.Graphics().p("EBF0g7YMiLnAAAMAAAB2xMCLnAAAg");
	var mask_graphics_13 = new cjs.Graphics().p("EBG7g7pMiN1AAAMAAAB3TMCN1AAAg");
	var mask_graphics_14 = new cjs.Graphics().p("EBHlg7zMiPJAAAMAAAB3nMCPJAAAg");
	var mask_graphics_15 = new cjs.Graphics().p("EBHzg73MiPlAAAMAAAB3vMCPlAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:248.8,y:-147.5}).wait(1).to({graphics:mask_graphics_1,x:250.2,y:-145.7}).wait(1).to({graphics:mask_graphics_2,x:254.4,y:-140.3}).wait(1).to({graphics:mask_graphics_3,x:261.5,y:-131.3}).wait(1).to({graphics:mask_graphics_4,x:271.5,y:-118.6}).wait(1).to({graphics:mask_graphics_5,x:284.3,y:-102.4}).wait(1).to({graphics:mask_graphics_6,x:291.4,y:-82.6}).wait(1).to({graphics:mask_graphics_7,x:267.9,y:-59.1}).wait(1).to({graphics:mask_graphics_8,x:187.8,y:-25.4}).wait(1).to({graphics:mask_graphics_9,x:118.4,y:3.9}).wait(1).to({graphics:mask_graphics_10,x:59.7,y:28.6}).wait(1).to({graphics:mask_graphics_11,x:11.7,y:48.8}).wait(1).to({graphics:mask_graphics_12,x:-25.7,y:64.6}).wait(1).to({graphics:mask_graphics_13,x:-52.4,y:75.8}).wait(1).to({graphics:mask_graphics_14,x:-68.4,y:82.6}).wait(1).to({graphics:mask_graphics_15,x:-73.5,y:84.8}).wait(10));

	// Layer 14
	this.instance = new lib.lineRightMasked();
	this.instance.parent = this;
	this.instance.setTransform(-1.1,-1.3,1,1,0,0,0,-0.1,0.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, new cjs.Rectangle(189.7,-226.1,12.3,396.3), new cjs.Rectangle(157.4,-226.1,44.5,411), new cjs.Rectangle(112.2,-226.1,89.7,431.5), new cjs.Rectangle(54,-226.1,148,449.6), new cjs.Rectangle(-17,-226.1,219,449.6), new cjs.Rectangle(-101,-226.1,303,449.6), new cjs.Rectangle(-202.4,-226.1,404.4,449.6), rect=new cjs.Rectangle(-204,-226.1,406,449.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animRight2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EAASgvzMgsEAAAMAAABfnMAsEAAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EABxgv+MgthAAAMAAABf9MAthAAAg");
	var mask_graphics_2 = new cjs.Graphics().p("EAGOgwgMgx4AAAMAAABhBMAx4AAAg");
	var mask_graphics_3 = new cjs.Graphics().p("EANpgxYMg5JAAAMAAABixMA5JAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("EAYCgynMhDUAAAMAAABlPMBDUAAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EAlZg0NMhQZAAAMAAABobMBQZAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("EAwMg2JMhgXAAAMAAABsTMBgXAAAg");
	var mask_graphics_7 = new cjs.Graphics().p("EA5pg4bMhzRAAAMAAABw3MBzRAAAg");
	var mask_graphics_8 = new cjs.Graphics().p("EA8+g5PMh57AAAMAAAByfMB57AAAg");
	var mask_graphics_9 = new cjs.Graphics().p("EA/2g57Mh/rAAAMAAABz3MB/rAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("EBCRg6hMiEhAAAMAAAB1DMCEhAAAg");
	var mask_graphics_11 = new cjs.Graphics().p("EBERg7AMiIhAAAMAAAB2BMCIhAAAg");
	var mask_graphics_12 = new cjs.Graphics().p("EBF0g7YMiLnAAAMAAAB2xMCLnAAAg");
	var mask_graphics_13 = new cjs.Graphics().p("EBG7g7pMiN1AAAMAAAB3TMCN1AAAg");
	var mask_graphics_14 = new cjs.Graphics().p("EBHlg7zMiPJAAAMAAAB3nMCPJAAAg");
	var mask_graphics_15 = new cjs.Graphics().p("EBHzg73MiPlAAAMAAAB3vMCPlAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-280.2,y:134.5}).wait(1).to({graphics:mask_graphics_1,x:-280.1,y:133.8}).wait(1).to({graphics:mask_graphics_2,x:-279.5,y:131.6}).wait(1).to({graphics:mask_graphics_3,x:-278.5,y:128}).wait(1).to({graphics:mask_graphics_4,x:-277.1,y:122.9}).wait(1).to({graphics:mask_graphics_5,x:-275.3,y:116.3}).wait(1).to({graphics:mask_graphics_6,x:-237.7,y:108.3}).wait(1).to({graphics:mask_graphics_7,x:-172,y:98.9}).wait(1).to({graphics:mask_graphics_8,x:-149,y:95.6}).wait(1).to({graphics:mask_graphics_9,x:-129,y:92.7}).wait(1).to({graphics:mask_graphics_10,x:-112.1,y:90.3}).wait(1).to({graphics:mask_graphics_11,x:-98.3,y:88.3}).wait(1).to({graphics:mask_graphics_12,x:-87.5,y:86.8}).wait(1).to({graphics:mask_graphics_13,x:-79.9,y:85.7}).wait(1).to({graphics:mask_graphics_14,x:-75.2,y:85}).wait(1).to({graphics:mask_graphics_15,x:-73.5,y:84.8}).wait(10));

	// Layer 14
	this.instance = new lib.lineRightMasked();
	this.instance.parent = this;
	this.instance.setTransform(-1.1,-1.3,1,1,0,0,0,-0.1,0.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-204,-188.1,12.8,411.6), new cjs.Rectangle(-204,-201.1,80.7,424.6), new cjs.Rectangle(-204,-217.8,168,441.3), new cjs.Rectangle(-204,-226.1,274.8,449.6), new cjs.Rectangle(-204,-226.1,400.9,449.6), rect=new cjs.Rectangle(-204,-226.1,406,449.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EAASgvzMgsEAAAMAAABfnMAsEAAAg");
	var mask_graphics_1 = new cjs.Graphics().p("EADMgwJMgu6AAAMAAABgTMAu6AAAg");
	var mask_graphics_2 = new cjs.Graphics().p("EAL6gxLMg3cAAAMAAABiXMA3cAAAg");
	var mask_graphics_3 = new cjs.Graphics().p("EAaegy6MhFsAAAMAAABl1MBFsAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("EAs1g1UMhZpAAAMAAABqpMBZpAAAg");
	var mask_graphics_5 = new cjs.Graphics().p("EA5pg4bMhzRAAAMAAABw3MBzRAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("EA8+g5PMh57AAAMAAAByfMB57AAAg");
	var mask_graphics_7 = new cjs.Graphics().p("EA/2g57Mh/rAAAMAAABz3MB/rAAAg");
	var mask_graphics_8 = new cjs.Graphics().p("EBCRg6hMiEhAAAMAAAB1DMCEhAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("EBERg7AMiIhAAAMAAAB2BMCIhAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("EBF0g7YMiLnAAAMAAAB2xMCLnAAAg");
	var mask_graphics_11 = new cjs.Graphics().p("EBG7g7pMiN1AAAMAAAB3TMCN1AAAg");
	var mask_graphics_12 = new cjs.Graphics().p("EBHlg7zMiPJAAAMAAAB3nMCPJAAAg");
	var mask_graphics_13 = new cjs.Graphics().p("EBHzg73MiPlAAAMAAAB3vMCPlAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-280.2,y:134.5}).wait(1).to({graphics:mask_graphics_1,x:-279.9,y:133.1}).wait(1).to({graphics:mask_graphics_2,x:-278.7,y:128.8}).wait(1).to({graphics:mask_graphics_3,x:-276.7,y:121.7}).wait(1).to({graphics:mask_graphics_4,x:-261.1,y:111.7}).wait(1).to({graphics:mask_graphics_5,x:-172,y:98.9}).wait(1).to({graphics:mask_graphics_6,x:-149,y:95.6}).wait(1).to({graphics:mask_graphics_7,x:-129,y:92.7}).wait(1).to({graphics:mask_graphics_8,x:-112.1,y:90.3}).wait(1).to({graphics:mask_graphics_9,x:-98.3,y:88.3}).wait(1).to({graphics:mask_graphics_10,x:-87.5,y:86.8}).wait(1).to({graphics:mask_graphics_11,x:-79.9,y:85.7}).wait(1).to({graphics:mask_graphics_12,x:-75.2,y:85}).wait(1).to({graphics:mask_graphics_13,x:-73.5,y:84.8}).wait(1).to({graphics:null,x:0,y:0}).wait(8));

	// Layer 12
	this.instance = new lib.whiteRight();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.191},11).to({_off:true},1).wait(10));

	// Layer 1
	this.instance_1 = new lib.Bitmap6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-200,-223);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199.5,-222.6,399,445.3);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-200.5,-222.6,400,445.3), rect=new cjs.Rectangle(-200.5,-223.5,400,446.2), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-223,399.5,445.7), rect=new cjs.Rectangle(-200,-223,399,445), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.wireless = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1,"idle":24,"on":43,"off":49,"clicked":56});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		this.stop();
		this.checkRotation = function(mc) {
			if (_this.rotation == 0) {
				mc.mc.rotation = 0;
			} else {
				mc.mc.rotation = 180;
			}
		}
		this.checkRotationAll = function() {
			if (_this.txt1) _this.checkRotation(_this.txt1);
			if (_this.txt2) _this.checkRotation(_this.txt2);
			if (_this.txt3) _this.checkRotation(_this.txt3);
		}
		this.checkRotation(this.txt1);
	}
	this.frame_1 = function() {
		this.checkRotation(this.txt3);
	}
	this.frame_42 = function() {
		this.stop();
	}
	this.frame_43 = function() {
		this.checkRotation(this.txt1);
		this.checkRotation(this.txt2);
	}
	this.frame_48 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.checkRotation(this.txt1);
		this.checkRotation(this.txt2);
	}
	this.frame_54 = function() {
		this.gotoAndStop("idle");
	}
	this.frame_56 = function() {
		this.checkRotation(this.txt2);
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(41).call(this.frame_42).wait(1).call(this.frame_43).wait(5).call(this.frame_48).wait(1).call(this.frame_49).wait(5).call(this.frame_54).wait(2).call(this.frame_56).wait(13).call(this.frame_69).wait(1));

	// btn
	this.wirelessBtn = new lib.wirelessBTB();
	this.wirelessBtn.parent = this;
	this.wirelessBtn.setTransform(72.6,22.1,1,1,0,0,0,90.5,40);
	new cjs.ButtonHelper(this.wirelessBtn, 0, 1, 2, false, new lib.wirelessBTB(), 3);

	this.timeline.addTween(cjs.Tween.get(this.wirelessBtn).to({_off:true},55).wait(15));

	// lineAnim
	this.instance = new lib.lineAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(103.6,21.8,1,1,0,0,0,31.6,2.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(33).to({y:22.1,startPosition:33},0).wait(1).to({regX:45.7,scaleX:1.01,scaleY:1.01,x:119,startPosition:34},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:123.6,startPosition:35},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:128.1,startPosition:36},0).wait(1).to({regX:31.7,scaleX:1.1,scaleY:1.1,x:113.9,startPosition:37},0).wait(2).to({startPosition:37},0).wait(1).to({regX:45.7,scaleX:1.09,scaleY:1.09,x:127.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:122.2,y:22},0).wait(1).to({scaleX:1,scaleY:1,x:118.1,y:21.9},0).wait(1).to({regX:31.7,regY:2.9,scaleX:0.99,scaleY:0.99,x:103.4},0).wait(17));

	// wirelessGlow
	this.txt3 = new lib.realGlow();
	this.txt3.parent = this;
	this.txt3.setTransform(33.3,22.5,0.06,0.06,0,0,0,40,29.2);
	this.txt3.alpha = 0.789;
	this.txt3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt3).wait(1).to({_off:false},0).to({regX:40.2,regY:29.4,scaleX:1.2,scaleY:1.2},4,cjs.Ease.get(1)).to({regX:40.3,regY:29.5,scaleX:1,scaleY:1,alpha:0.27},4).to({regY:29.4,scaleX:0.8,scaleY:0.8,alpha:0},5).to({_off:true},1).wait(55));

	// Layer 5
	this.txt2 = new lib.wireless2();
	this.txt2.parent = this;
	this.txt2.setTransform(33.4,21.8,0.5,0.5,0,0,0,64.8,43.6);
	this.txt2.alpha = 0;
	this.txt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt2).wait(43).to({_off:false},0).to({regY:43.5,scaleX:0.55,scaleY:0.55,x:33.7,y:21.9,alpha:1},4,cjs.Ease.get(1)).wait(2).to({regY:43.6,scaleX:0.5,scaleY:0.5,x:33.4,y:21.8,alpha:0},4).wait(3).to({alpha:1},0).wait(14));

	// Wireless Users White
	this.txt1 = new lib.wireless1();
	this.txt1.parent = this;
	this.txt1.setTransform(32.4,21.9,0.03,0.03,0,0,0,33.4,23.4);
	this.txt1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.txt1).to({regX:33.1,regY:21.9,scaleX:0.6,scaleY:0.6,x:14.4,y:8.7,alpha:1},5,cjs.Ease.get(1)).to({regY:21.8,scaleX:0.5,scaleY:0.5,x:17.6,y:10.9},4).wait(34).to({scaleX:0.55,scaleY:0.55,x:16,y:9.8},4,cjs.Ease.get(1)).wait(1).to({alpha:0},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:17.6,y:10.9,alpha:1},4).to({_off:true},3).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.9,-17.9,181,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-17.9,-17.9,182,80), new cjs.Rectangle(-17.9,-17.9,181,80), new cjs.Rectangle(-17.9,-17.9,182,80), rect=new cjs.Rectangle(-17.9,-17.9,181,80), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(1,0,134.1,43.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.textAnim3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_113 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(113).call(this.frame_113).wait(1));

	// Layer 6
	this.instance = new lib.subtriangles("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(105,1.8,0.78,1);
	this.instance.alpha = 0.18;

	this.instance_1 = new lib.subtriangles("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(98,1.8,0.78,1);
	this.instance_1.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},30).wait(84));

	// Layer 8
	this.instance_2 = new lib.subtext3a();
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.5,5.1,0.2,0.2,0,0,0,0,-0.3);
	this.instance_2.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:73.3,regY:0.5,scaleX:0.22,scaleY:0.22,x:78.1,y:5.2,alpha:0.197},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.27},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:77.9,y:5.1,alpha:0.458},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:77.6,y:4.9,alpha:0.753},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:77.4,y:4.8,alpha:0.919},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:77.3,alpha:0.984},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:4,y:4,alpha:1},0).wait(107));

	// Layer 7
	this.instance_3 = new lib.subtext3a();
	this.instance_3.parent = this;
	this.instance_3.setTransform(61.5,3.1,0.2,0.2,0,0,0,-0.3,-0.3);
	this.instance_3.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:73.3,regY:0.5,scaleX:0.21,scaleY:0.21,x:76.2,y:3.2,alpha:0.535},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:76.1,y:3.1,alpha:0.519},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:75.8,y:2.8,alpha:0.486},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:75.2,y:2.3,alpha:0.426},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:74.3,y:1.4,alpha:0.322},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:73.2,y:0.4,alpha:0.194},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:72.4,y:-0.3,alpha:0.101},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:72,y:-0.8,alpha:0.047},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:71.7,y:-1,alpha:0.018},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:71.6,y:-1.2,alpha:0.004},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-2,y:-2,alpha:0},0).to({_off:true},1).wait(102));

	// Layer 1
	this.instance_4 = new lib.subtext3a();
	this.instance_4.parent = this;
	this.instance_4.setTransform(63.1,5.9,0.2,0.2);
	this.instance_4.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:73.3,regY:0.5,scaleX:0.21,scaleY:0.21,x:77.7,y:6,alpha:0.528},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:77.6,y:5.9,alpha:0.518},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:77.5,y:5.7,alpha:0.497},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:77.1,y:5.3,alpha:0.46},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:76.7,y:4.6,alpha:0.4},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:75.9,y:3.7,alpha:0.307},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:75,y:2.6,alpha:0.2},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:74.3,y:1.7,alpha:0.117},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:73.9,y:1.2,alpha:0.064},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:73.6,y:0.8,alpha:0.031},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:73.4,y:0.6,alpha:0.012},0).wait(1).to({scaleX:1,scaleY:1,x:73.3,y:0.5,alpha:0.003},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,alpha:0},0).to({_off:true},1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-430.7,-169.8,930,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.textAnimcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_113 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(113).call(this.frame_113).wait(1));

	// Layer 6
	this.instance = new lib.subtriangles("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(23,1.8,0.78,1);
	this.instance.alpha = 0.18;

	this.instance_1 = new lib.subtriangles("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(16,1.8,0.78,1);
	this.instance_1.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},30).wait(84));

	// Layer 8
	this.instance_2 = new lib.subtext1copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,2.1,0.2,0.2,0,0,0,0,-0.3);
	this.instance_2.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-2.4,regY:1.3,scaleX:0.22,scaleY:0.22,x:-0.9,y:2.5,alpha:0.197},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-0.7,y:2.7,alpha:0.27},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:-0.1,y:3.5,alpha:0.458},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:0.8,y:4.6,alpha:0.753},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1.4,y:5.2,alpha:0.919},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1.6,y:5.5,alpha:0.984},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:4,y:4,alpha:1},0).wait(107));

	// Layer 7
	this.instance_3 = new lib.subtext1copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2.5,0.1,0.2,0.2,0,0,0,-0.3,-0.3);
	this.instance_3.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-2.4,regY:1.3,scaleX:0.21,scaleY:0.21,x:-2.9,y:0.4,alpha:0.535},0).wait(1).to({scaleX:0.23,scaleY:0.23,alpha:0.519},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-3,alpha:0.486},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-3.2,y:0.3,alpha:0.426},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-3.4,y:0.1,alpha:0.322},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:-3.7,y:-0.1,alpha:0.194},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-3.9,y:-0.2,alpha:0.101},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-4,y:-0.3,alpha:0.047},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-4.1,y:-0.4,alpha:0.018},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.004},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-2,y:-2,alpha:0},0).to({_off:true},1).wait(102));

	// Layer 1
	this.instance_4 = new lib.subtext1copy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.9,2.9,0.2,0.2);
	this.instance_4.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-2.4,regY:1.3,scaleX:0.21,scaleY:0.21,x:-1.3,y:3.1,alpha:0.528},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-1.4,alpha:0.518},0).wait(1).to({scaleX:0.25,scaleY:0.25,alpha:0.497},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-1.5,y:2.9,alpha:0.46},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-1.6,y:2.7,alpha:0.4},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-1.8,y:2.4,alpha:0.307},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-2,y:2,alpha:0.2},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-2.1,y:1.7,alpha:0.117},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-2.2,y:1.5,alpha:0.064},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-2.3,y:1.4,alpha:0.031},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.012},0).wait(1).to({scaleX:1,scaleY:1,x:-2.4,y:1.3,alpha:0.003},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,alpha:0},0).to({_off:true},1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-430.7,-169.8,930,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.textAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_113 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(113).call(this.frame_113).wait(1));

	// Layer 6
	this.instance = new lib.subtriangles("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(23,1.8,0.78,1);
	this.instance.alpha = 0.18;

	this.instance_1 = new lib.subtriangles("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(16,1.8,0.78,1);
	this.instance_1.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},30).wait(84));

	// Layer 8
	this.instance_2 = new lib.subtext1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,2.1,0.2,0.2,0,0,0,0,-0.3);
	this.instance_2.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-7.3,regY:-4.7,scaleX:0.22,scaleY:0.22,x:-2,y:1.2,alpha:0.197},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-2.1,y:1,alpha:0.27},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:-2.4,y:0.7,alpha:0.458},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-2.9,y:0.1,alpha:0.753},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-3.1,y:-0.3,alpha:0.919},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-3.3,y:-0.4,alpha:0.984},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:4,y:4,alpha:1},0).wait(107));

	// Layer 7
	this.instance_3 = new lib.subtext1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2.5,0.1,0.2,0.2,0,0,0,-0.3,-0.3);
	this.instance_3.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-7.3,regY:-4.7,scaleX:0.21,scaleY:0.21,x:-3.9,y:-0.8,alpha:0.535},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-4.1,y:-1,alpha:0.519},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-4.4,y:-1.3,alpha:0.486},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-5,y:-1.9,alpha:0.426},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-5.9,y:-3,alpha:0.322},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:-7.2,y:-4.4,alpha:0.194},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-8,y:-5.3,alpha:0.101},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-8.6,y:-5.9,alpha:0.047},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-8.8,y:-6.2,alpha:0.018},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-9,y:-6.3,alpha:0.004},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-2,y:-2,alpha:0},0).to({_off:true},1).wait(102));

	// Layer 1
	this.instance_4 = new lib.subtext1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.9,2.9,0.2,0.2);
	this.instance_4.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-7.3,regY:-4.7,scaleX:0.21,scaleY:0.21,x:-2.3,y:1.9,alpha:0.528},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-2.4,y:1.8,alpha:0.518},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-2.6,y:1.5,alpha:0.497},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-3,y:1.1,alpha:0.46},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-3.5,y:0.3,alpha:0.4},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-4.4,y:-0.8,alpha:0.307},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-5.4,y:-2.2,alpha:0.2},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:-6.1,y:-3.2,alpha:0.117},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-6.7,y:-3.9,alpha:0.064},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-7,y:-4.3,alpha:0.031},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-7.1,y:-4.5,alpha:0.012},0).wait(1).to({scaleX:1,scaleY:1,x:-7.2,y:-4.7,alpha:0.003},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,alpha:0},0).to({_off:true},1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-430.7,-169.8,930,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.greenCTAs3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":1,"idle":24,"static":28,over:29,out:39,"clicked":49});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.gotoAndStop("static");
	}
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(10).call(this.frame_38).wait(10).call(this.frame_48).wait(12).call(this.frame_60).wait(1));

	// Layer 4
	this.btn1 = new lib.btnGeneric();
	this.btn1.parent = this;
	this.btn1.setTransform(16,2,0.05,0.05,0,0,0,-1,-1);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.btnGeneric(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:74,y:-2},0).wait(48).to({x:2378.6,y:311.7},0).wait(12));

	// Layer 16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_38 = new cjs.Graphics().p("Eg6NAFYQimAAh2hkQh2hmAAiOQAAiOB2hlQB2hkCmAAMB0bAAAQCmAAB3BkQB1BlAACOQAACOh1BmQh3BkimAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_graphics_38,x:-7.5,y:0.1}).wait(1).to({graphics:null,x:0,y:0}).wait(22));

	// Layer 15
	this.instance = new lib.allGlow1();
	this.instance.parent = this;
	this.instance.setTransform(-169.4,0);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).to({_off:true},1).wait(22));

	// Layer 11
	this.instance_1 = new lib.menuItem3x2x();
	this.instance_1.parent = this;
	this.instance_1.setTransform(95,-2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).wait(7).to({regX:-1,regY:-1,scaleX:0.05,scaleY:0.05,x:64},4).wait(4).to({regX:0,regY:0,scaleX:1,scaleY:1,x:95},0).wait(2).to({regX:-1,regY:-1,scaleX:0.05,scaleY:0.05,x:64},4).to({_off:true},1).wait(5));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_29 = new cjs.Graphics().p("AgCx9IAJAAMAAAAj7IgJAAg");
	var mask_1_graphics_30 = new cjs.Graphics().p("Atlx9IbLAAMAAAAj7I7LAAg");
	var mask_1_graphics_31 = new cjs.Graphics().p("Eg2IgR9MBsRAAAMAAAAj7MhsRAAAg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Eg8lgR9MB5LAAAMAAAAj7Mh5LAAAg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EhBMgR9MCCZAAAMAAAAj7MiCZAAAg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EhD+gR9MCH9AAAMAAAAj7MiH9AAAg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EhE5gR9MCJzAAAMAAAAj7MiJzAAAg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EhE5gR9MCJzAAAMAAAAj7MiJzAAAg");
	var mask_1_graphics_40 = new cjs.Graphics().p("Eg7VgR9MB2rAAAMAAAAj7Mh2rAAAg");
	var mask_1_graphics_41 = new cjs.Graphics().p("A+qx9MA9VAAAMAAAAj7Mg9VAAAg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AxRx9MAijAAAMAAAAj7MgijAAAg");
	var mask_1_graphics_43 = new cjs.Graphics().p("Anox9IPcAAMAAAAj7IvcAAg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AApx9ID/AAMAAAAj7Ij/AAg");
	var mask_1_graphics_45 = new cjs.Graphics().p("ADZx9IAKAAMAAAAj7IgKAAg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EhE5gR9MCJzAAAMAAAAj7MiJzAAAg");
	var mask_1_graphics_50 = new cjs.Graphics().p("Eg7VgR9MB2rAAAMAAAAj7Mh2rAAAg");
	var mask_1_graphics_51 = new cjs.Graphics().p("A+qx9MA9VAAAMAAAAj7Mg9VAAAg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AxRx9MAijAAAMAAAAj7MgijAAAg");
	var mask_1_graphics_53 = new cjs.Graphics().p("Antx9IPbAAMAAAAj7IvbAAg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AAqx9ID/AAMAAAAj7Ij/AAg");
	var mask_1_graphics_55 = new cjs.Graphics().p("ADjx9IAKAAMAAAAj7IgKAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_1_graphics_29,x:0.7,y:15}).wait(1).to({graphics:mask_1_graphics_30,x:15.3,y:15}).wait(1).to({graphics:mask_1_graphics_31,x:58.5,y:15}).wait(1).to({graphics:mask_1_graphics_32,x:43.1,y:15}).wait(1).to({graphics:mask_1_graphics_33,x:32.1,y:15}).wait(1).to({graphics:mask_1_graphics_34,x:25.5,y:15}).wait(1).to({graphics:mask_1_graphics_35,x:67,y:15}).wait(4).to({graphics:mask_1_graphics_39,x:67,y:15}).wait(1).to({graphics:mask_1_graphics_40,x:67,y:15}).wait(1).to({graphics:mask_1_graphics_41,x:67,y:15}).wait(1).to({graphics:mask_1_graphics_42,x:57.3,y:15}).wait(1).to({graphics:mask_1_graphics_43,x:50,y:15}).wait(1).to({graphics:mask_1_graphics_44,x:29.6,y:15}).wait(1).to({graphics:mask_1_graphics_45,x:22.7,y:15}).wait(1).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_1_graphics_49,x:61,y:15}).wait(1).to({graphics:mask_1_graphics_50,x:56,y:15}).wait(1).to({graphics:mask_1_graphics_51,x:41,y:15}).wait(1).to({graphics:mask_1_graphics_52,x:43.6,y:15}).wait(1).to({graphics:mask_1_graphics_53,x:45.5,y:15}).wait(1).to({graphics:mask_1_graphics_54,x:29.7,y:15}).wait(1).to({graphics:mask_1_graphics_55,x:23.7,y:15}).wait(1).to({graphics:null,x:0,y:0}).wait(5));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape.setTransform(61,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F8E8").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_1.setTransform(61,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECF1D2").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_2.setTransform(61,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3EBBB").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_3.setTransform(61,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DAE4A4").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_4.setTransform(61,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D0DD8E").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_5.setTransform(61,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C7D677").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_6.setTransform(61,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BED060").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_7.setTransform(61,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B4C94A").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_8.setTransform(61,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ABC233").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_9.setTransform(61,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B9CC55").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_10.setTransform(61,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D5E199").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_11.setTransform(61,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1F5DD").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_12.setTransform(61,2.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},29).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(5));

	// Layer 12 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_12 = new cjs.Graphics().p("A0MG+Q8yAagzhUQEdpHHclcMBQXAAAQDBgSDVDNQDVDNoRK5UgiBgCAgeEAAcg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_2_graphics_12,x:96.6,y:6.9}).wait(27).to({graphics:null,x:0,y:0}).wait(22));

	// Layer 5
	this.t1a = new lib.textAnim3a();
	this.t1a.parent = this;
	this.t1a.setTransform(-4,-3);

	this.instance_2 = new lib.subtext3a();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,2);

	var maskedShapeInstanceList = [this.t1a,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.t1a}]},12).to({state:[{t:this.instance_2}]},17).to({state:[]},10).to({state:[{t:this.instance_2}]},10).wait(12));

	// Guide: Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_8 = new cjs.Graphics().p("AkrTiMAAAgnDIJXAAMAAAAnDg");
	var mask_3_graphics_9 = new cjs.Graphics().p("Al9TiMAAAgnDIL7AAMAAAAnDg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AnxTiMAAAgnDIPjAAMAAAAnDg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AqHTiMAAAgnDIUPAAMAAAAnDg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AoyTiMAAAgnDIRlAAMAAAAnDg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AnnTiMAAAgnDIPPAAMAAAAnDg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AmoTiMAAAgnDINRAAMAAAAnDg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AlzTiMAAAgnDILnAAMAAAAnDg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AlJTiMAAAgnDIKTAAMAAAAnDg");
	var mask_3_graphics_17 = new cjs.Graphics().p("A3LTiMAAAgnDIJYAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_3_graphics_8,x:404.8,y:-9}).wait(1).to({graphics:mask_3_graphics_9,x:308.2,y:-4.9}).wait(1).to({graphics:mask_3_graphics_10,x:171.4,y:0.9}).wait(1).to({graphics:mask_3_graphics_11,x:-5.4,y:8.4}).wait(1).to({graphics:mask_3_graphics_12,x:-69.7,y:15.2}).wait(1).to({graphics:mask_3_graphics_13,x:-125.6,y:21.1}).wait(1).to({graphics:mask_3_graphics_14,x:-173.3,y:26.2}).wait(1).to({graphics:mask_3_graphics_15,x:-212.8,y:30.3}).wait(1).to({graphics:mask_3_graphics_16,x:-243.9,y:33.6}).wait(1).to({graphics:mask_3_graphics_17,x:-148.4,y:36}).wait(12).to({graphics:null,x:0,y:0}).wait(32));

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1,1).p("Egt+gC9QAAAFAAAFQAACaBgBqQBgBtCIAAMBRtAAAQCHAABhhtQBghrAAiZQAAgFAAgF");
	this.shape_13.setTransform(65.3,19.9);
	this.shape_13._off = true;

	var maskedShapeInstanceList = [this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(8).to({_off:false},0).to({_off:true},21).wait(32));

	// Guide: Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_1 = new cjs.Graphics().p("AkrTiMAAAgnDIJXAAMAAAAnDg");
	var mask_4_graphics_2 = new cjs.Graphics().p("AllTiMAAAgnDILLAAMAAAAnDg");
	var mask_4_graphics_3 = new cjs.Graphics().p("AmzTiMAAAgnDINnAAMAAAAnDg");
	var mask_4_graphics_4 = new cjs.Graphics().p("AoUTiMAAAgnDIQpAAMAAAAnDg");
	var mask_4_graphics_5 = new cjs.Graphics().p("AqHTiMAAAgnDIUPAAMAAAAnDg");
	var mask_4_graphics_6 = new cjs.Graphics().p("ApGTiMAAAgnDISNAAMAAAAnDg");
	var mask_4_graphics_7 = new cjs.Graphics().p("AoLTiMAAAgnDIQXAAMAAAAnDg");
	var mask_4_graphics_8 = new cjs.Graphics().p("AnWTiMAAAgnDIOtAAMAAAAnDg");
	var mask_4_graphics_9 = new cjs.Graphics().p("AmoTiMAAAgnDINQAAMAAAAnDg");
	var mask_4_graphics_10 = new cjs.Graphics().p("Al/TiMAAAgnDIL/AAMAAAAnDg");
	var mask_4_graphics_11 = new cjs.Graphics().p("AldTiMAAAgnDIK7AAMAAAAnDg");
	var mask_4_graphics_12 = new cjs.Graphics().p("AlBTiMAAAgnDIKDAAMAAAAnDg");
	var mask_4_graphics_13 = new cjs.Graphics().p("AkrTiMAAAgnDIJXAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_4_graphics_1,x:-289.2,y:-15}).wait(1).to({graphics:mask_4_graphics_2,x:-241.7,y:-11.1}).wait(1).to({graphics:mask_4_graphics_3,x:-178.5,y:-5.8}).wait(1).to({graphics:mask_4_graphics_4,x:-99.8,y:0.6}).wait(1).to({graphics:mask_4_graphics_5,x:-5.4,y:8.4}).wait(1).to({graphics:mask_4_graphics_6,x:71.2,y:19.2}).wait(1).to({graphics:mask_4_graphics_7,x:140.4,y:29}).wait(1).to({graphics:mask_4_graphics_8,x:202.4,y:37.7}).wait(1).to({graphics:mask_4_graphics_9,x:257.1,y:45.4}).wait(1).to({graphics:mask_4_graphics_10,x:304.6,y:52.1}).wait(1).to({graphics:mask_4_graphics_11,x:344.7,y:57.8}).wait(1).to({graphics:mask_4_graphics_12,x:377.6,y:62.4}).wait(1).to({graphics:mask_4_graphics_13,x:403.2,y:66}).wait(16).to({graphics:null,x:0,y:0}).wait(32));

	// Layer 2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1,1).p("EAt/AC0QgEiThchnQhhhtiHAAMhRtAAAQiIAAhgBtQhcBmgECU");
	this.shape_14.setTransform(65.3,-17);
	this.shape_14._off = true;

	var maskedShapeInstanceList = [this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1).to({_off:false},0).to({_off:true},28).wait(32));

	// Layer 8 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_10 = new cjs.Graphics().p("AgCx9IAJAAMAAAAj7IgJAAg");
	var mask_5_graphics_11 = new cjs.Graphics().p("AmIx9IMRAAMAAAAj7IsRAAg");
	var mask_5_graphics_12 = new cjs.Graphics().p("A4Vx9MAwrAAAMAAAAj7MgwrAAAg");
	var mask_5_graphics_13 = new cjs.Graphics().p("Egi9gR9MBF7AAAMAAAAj7MhF7AAAg");
	var mask_5_graphics_14 = new cjs.Graphics().p("EgqjgR9MBVHAAAMAAAAj7MhVHAAAg");
	var mask_5_graphics_15 = new cjs.Graphics().p("EgvGgR9MBeNAAAMAAAAj7MheNAAAg");
	var mask_5_graphics_16 = new cjs.Graphics().p("EgwngR9MBhPAAAMAAAAj7MhhPAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_5_graphics_10,x:0.7,y:15}).wait(1).to({graphics:mask_5_graphics_11,x:-2.9,y:15}).wait(1).to({graphics:mask_5_graphics_12,x:-14.5,y:15}).wait(1).to({graphics:mask_5_graphics_13,x:5.4,y:15}).wait(1).to({graphics:mask_5_graphics_14,x:19.6,y:15}).wait(1).to({graphics:mask_5_graphics_15,x:28.1,y:15}).wait(1).to({graphics:mask_5_graphics_16,x:62,y:15}).wait(13).to({graphics:null,x:0,y:0}).wait(32));

	// Layer 9
	this.instance_3 = new lib.subtriangles("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(19.8,-2.1);
	this.instance_3.alpha = 0.23;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({_off:true},27).wait(32));

	// Layer 7
	this.instance_4 = new lib.capsule1();
	this.instance_4.parent = this;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({alpha:0},8).to({_off:true},1).wait(42));

	// Layer 1
	this.instance_5 = new lib.greenSmall();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5,0);

	this.instance_6 = new lib.greenSmallne();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-5,0);

	var maskedShapeInstanceList = [this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_6}]},39).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.8,-0.2,30.5,4.5);
p.frameBounds = [rect, new cjs.Rectangle(-231,-47,610,90), new cjs.Rectangle(-231.5,-47,610.5,90), rect=new cjs.Rectangle(-231,-47,610,90), rect, rect, rect, rect, new cjs.Rectangle(-246.1,-47,625.1,90), new cjs.Rectangle(-246.3,-47,625.3,90), new cjs.Rectangle(-231,-54.5,610,116.1), rect=new cjs.Rectangle(-231,-47.6,610,109.2), rect, rect, new cjs.Rectangle(-246.5,-47.6,625.6,109.2), new cjs.Rectangle(-246.4,-47.6,625.5,109.2), new cjs.Rectangle(-246.3,-47.6,625.3,109.2), new cjs.Rectangle(-246.1,-47.6,625.1,109.2), new cjs.Rectangle(-246.1,-54.5,625.1,116.1), rect=new cjs.Rectangle(-246.1,-47.6,625.1,109.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-231,-47.6,646.2,109.2), rect, new cjs.Rectangle(-288,-47.6,703.3,109.2), rect=new cjs.Rectangle(-301.8,-47.6,725.6,109.2), rect, rect, rect, rect, rect, new cjs.Rectangle(-499.5,-69.9,983.6,321.6), rect=new cjs.Rectangle(-301.8,-47.6,725.6,109.2), rect, new cjs.Rectangle(-281.3,-47.6,696.6,109.2), rect=new cjs.Rectangle(-231,-47.6,646.2,109.2), rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-301.8,-47.6,2985.4,404.3), rect, new cjs.Rectangle(-281.3,-47.6,2965,404.3), rect=new cjs.Rectangle(-229,-47.6,2912.6,404.3), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.greenCTAs2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":1,"idle":20,"static":28,"over":29,"out":39,"clicked":49});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.gotoAndStop("static");
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(10).call(this.frame_38).wait(10).call(this.frame_48).wait(21).call(this.frame_69).wait(1));

	// Layer 4
	this.btn1 = new lib.btnGeneric();
	this.btn1.parent = this;
	this.btn1.setTransform(16,2,0.05,0.05,0,0,0,-1,-1);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.btnGeneric(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:42,y:-2},0).wait(48).to({x:2178.5,y:-6.1},0).wait(21));

	// Layer 13
	this.instance = new lib.menuItem2x1copy();
	this.instance.parent = this;
	this.instance.setTransform(71,-2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).wait(7).to({regX:0.9,regY:-0.5,scaleX:0.11,scaleY:0.11,x:80.8,y:-0.1},4).wait(4).to({regX:0,regY:0,scaleX:1,scaleY:1,x:71,y:-2},0).wait(2).to({regX:0.9,regY:-0.5,scaleX:0.11,scaleY:0.11,x:80.8,y:-0.1},4).to({_off:true},1).wait(14));

	// Layer 14 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_29 = new cjs.Graphics().p("AgCx9IAJAAMAAAAj7IgJAAg");
	var mask_graphics_30 = new cjs.Graphics().p("Atlx9IbLAAMAAAAj7I7LAAg");
	var mask_graphics_31 = new cjs.Graphics().p("Eg2IgR9MBsRAAAMAAAAj7MhsRAAAg");
	var mask_graphics_32 = new cjs.Graphics().p("Eg8lgR9MB5LAAAMAAAAj7Mh5LAAAg");
	var mask_graphics_33 = new cjs.Graphics().p("EhBMgR9MCCZAAAMAAAAj7MiCZAAAg");
	var mask_graphics_34 = new cjs.Graphics().p("EhD+gR9MCH9AAAMAAAAj7MiH9AAAg");
	var mask_graphics_35 = new cjs.Graphics().p("EhE5gR9MCJzAAAMAAAAj7MiJzAAAg");
	var mask_graphics_39 = new cjs.Graphics().p("EhE5gR9MCJzAAAMAAAAj7MiJzAAAg");
	var mask_graphics_40 = new cjs.Graphics().p("Eg7VgR9MB2rAAAMAAAAj7Mh2rAAAg");
	var mask_graphics_41 = new cjs.Graphics().p("A+qx9MA9VAAAMAAAAj7Mg9VAAAg");
	var mask_graphics_42 = new cjs.Graphics().p("AxRx9MAijAAAMAAAAj7MgijAAAg");
	var mask_graphics_43 = new cjs.Graphics().p("Anox9IPcAAMAAAAj7IvcAAg");
	var mask_graphics_44 = new cjs.Graphics().p("AApx9ID/AAMAAAAj7Ij/AAg");
	var mask_graphics_45 = new cjs.Graphics().p("ADZx9IAKAAMAAAAj7IgKAAg");
	var mask_graphics_49 = new cjs.Graphics().p("EhE5gR9MCJzAAAMAAAAj7MiJzAAAg");
	var mask_graphics_50 = new cjs.Graphics().p("Eg7VgR9MB2rAAAMAAAAj7Mh2rAAAg");
	var mask_graphics_51 = new cjs.Graphics().p("A+qx9MA9VAAAMAAAAj7Mg9VAAAg");
	var mask_graphics_52 = new cjs.Graphics().p("AxRx9MAijAAAMAAAAj7MgijAAAg");
	var mask_graphics_53 = new cjs.Graphics().p("Antx9IPbAAMAAAAj7IvbAAg");
	var mask_graphics_54 = new cjs.Graphics().p("AAqx9ID/AAMAAAAj7Ij/AAg");
	var mask_graphics_55 = new cjs.Graphics().p("ADjx9IAKAAMAAAAj7IgKAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_graphics_29,x:0.7,y:15}).wait(1).to({graphics:mask_graphics_30,x:15.3,y:15}).wait(1).to({graphics:mask_graphics_31,x:58.5,y:15}).wait(1).to({graphics:mask_graphics_32,x:43.1,y:15}).wait(1).to({graphics:mask_graphics_33,x:32.1,y:15}).wait(1).to({graphics:mask_graphics_34,x:25.5,y:15}).wait(1).to({graphics:mask_graphics_35,x:67,y:15}).wait(4).to({graphics:mask_graphics_39,x:67,y:15}).wait(1).to({graphics:mask_graphics_40,x:67,y:15}).wait(1).to({graphics:mask_graphics_41,x:67,y:15}).wait(1).to({graphics:mask_graphics_42,x:57.3,y:15}).wait(1).to({graphics:mask_graphics_43,x:50,y:15}).wait(1).to({graphics:mask_graphics_44,x:29.6,y:15}).wait(1).to({graphics:mask_graphics_45,x:22.7,y:15}).wait(1).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_graphics_49,x:61,y:15}).wait(1).to({graphics:mask_graphics_50,x:56,y:15}).wait(1).to({graphics:mask_graphics_51,x:41,y:15}).wait(1).to({graphics:mask_graphics_52,x:43.6,y:15}).wait(1).to({graphics:mask_graphics_53,x:45.5,y:15}).wait(1).to({graphics:mask_graphics_54,x:29.7,y:15}).wait(1).to({graphics:mask_graphics_55,x:23.7,y:15}).wait(1).to({graphics:null,x:0,y:0}).wait(14));

	// Layer 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape.setTransform(61,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F8E8").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_1.setTransform(61,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECF1D2").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_2.setTransform(61,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3EBBB").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_3.setTransform(61,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DAE4A4").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_4.setTransform(61,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D0DD8E").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_5.setTransform(61,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C7D677").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_6.setTransform(61,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BED060").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_7.setTransform(61,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B4C94A").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_8.setTransform(61,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ABC233").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_9.setTransform(61,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B9CC55").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_10.setTransform(61,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D5E199").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_11.setTransform(61,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1F5DD").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_12.setTransform(61,2.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},29).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(14));

	// Layer 16 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_12 = new cjs.Graphics().p("A0MG+Q8yAagzhUQEdpHHclcMBQXAAAQDBgSDVDNQDVDNoRK5UgiBgCAgeEAAcg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_1_graphics_12,x:96.6,y:6.9}).wait(27).to({graphics:null,x:0,y:0}).wait(31));

	// Layer 17
	this.t1a = new lib.textAnimcopy();
	this.t1a.parent = this;
	this.t1a.setTransform(66,-1);

	this.instance_1 = new lib.subtext1copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(70,3);

	var maskedShapeInstanceList = [this.t1a,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.t1a}]},12).to({state:[{t:this.instance_1}]},17).to({state:[]},10).to({state:[{t:this.instance_1}]},10).wait(21));

	// Guide: Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_8 = new cjs.Graphics().p("AkrTiMAAAgnDIJXAAMAAAAnDg");
	var mask_2_graphics_9 = new cjs.Graphics().p("Al9TiMAAAgnDIL7AAMAAAAnDg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AnxTiMAAAgnDIPjAAMAAAAnDg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AqHTiMAAAgnDIUPAAMAAAAnDg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AoyTiMAAAgnDIRlAAMAAAAnDg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AnnTiMAAAgnDIPPAAMAAAAnDg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AmoTiMAAAgnDINRAAMAAAAnDg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AlzTiMAAAgnDILnAAMAAAAnDg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AlJTiMAAAgnDIKTAAMAAAAnDg");
	var mask_2_graphics_17 = new cjs.Graphics().p("A3LTiMAAAgnDIJYAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_2_graphics_8,x:404.8,y:-9}).wait(1).to({graphics:mask_2_graphics_9,x:308.2,y:-4.9}).wait(1).to({graphics:mask_2_graphics_10,x:171.4,y:0.9}).wait(1).to({graphics:mask_2_graphics_11,x:-5.4,y:8.4}).wait(1).to({graphics:mask_2_graphics_12,x:-69.7,y:15.2}).wait(1).to({graphics:mask_2_graphics_13,x:-125.6,y:21.1}).wait(1).to({graphics:mask_2_graphics_14,x:-173.3,y:26.2}).wait(1).to({graphics:mask_2_graphics_15,x:-212.8,y:30.3}).wait(1).to({graphics:mask_2_graphics_16,x:-243.9,y:33.6}).wait(1).to({graphics:mask_2_graphics_17,x:-148.4,y:36}).wait(12).to({graphics:null,x:0,y:0}).wait(41));

	// Layer 19
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1,1).p("Egt+gC9QAAAFAAAFQAACaBgBqQBgBtCIAAMBRtAAAQCHAABhhtQBghrAAiZQAAgFAAgF");
	this.shape_13.setTransform(65.3,19.9);
	this.shape_13._off = true;

	var maskedShapeInstanceList = [this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(8).to({_off:false},0).to({_off:true},21).wait(41));

	// Guide: Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_1 = new cjs.Graphics().p("AkrTiMAAAgnDIJXAAMAAAAnDg");
	var mask_3_graphics_2 = new cjs.Graphics().p("AllTiMAAAgnDILLAAMAAAAnDg");
	var mask_3_graphics_3 = new cjs.Graphics().p("AmzTiMAAAgnDINnAAMAAAAnDg");
	var mask_3_graphics_4 = new cjs.Graphics().p("AoUTiMAAAgnDIQpAAMAAAAnDg");
	var mask_3_graphics_5 = new cjs.Graphics().p("AqHTiMAAAgnDIUPAAMAAAAnDg");
	var mask_3_graphics_6 = new cjs.Graphics().p("ApGTiMAAAgnDISNAAMAAAAnDg");
	var mask_3_graphics_7 = new cjs.Graphics().p("AoLTiMAAAgnDIQXAAMAAAAnDg");
	var mask_3_graphics_8 = new cjs.Graphics().p("AnWTiMAAAgnDIOtAAMAAAAnDg");
	var mask_3_graphics_9 = new cjs.Graphics().p("AmoTiMAAAgnDINQAAMAAAAnDg");
	var mask_3_graphics_10 = new cjs.Graphics().p("Al/TiMAAAgnDIL/AAMAAAAnDg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AldTiMAAAgnDIK7AAMAAAAnDg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AlBTiMAAAgnDIKDAAMAAAAnDg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AkrTiMAAAgnDIJXAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_1,x:-289.2,y:-15}).wait(1).to({graphics:mask_3_graphics_2,x:-241.7,y:-11.1}).wait(1).to({graphics:mask_3_graphics_3,x:-178.5,y:-5.8}).wait(1).to({graphics:mask_3_graphics_4,x:-99.8,y:0.6}).wait(1).to({graphics:mask_3_graphics_5,x:-5.4,y:8.4}).wait(1).to({graphics:mask_3_graphics_6,x:71.2,y:19.2}).wait(1).to({graphics:mask_3_graphics_7,x:140.4,y:29}).wait(1).to({graphics:mask_3_graphics_8,x:202.4,y:37.7}).wait(1).to({graphics:mask_3_graphics_9,x:257.1,y:45.4}).wait(1).to({graphics:mask_3_graphics_10,x:304.6,y:52.1}).wait(1).to({graphics:mask_3_graphics_11,x:344.7,y:57.8}).wait(1).to({graphics:mask_3_graphics_12,x:377.6,y:62.4}).wait(1).to({graphics:mask_3_graphics_13,x:403.2,y:66}).wait(16).to({graphics:null,x:0,y:0}).wait(41));

	// Layer 21
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1,1).p("EAt/AC0QgEiThchnQhhhtiHAAMhRtAAAQiIAAhgBtQhcBmgECU");
	this.shape_14.setTransform(65.3,-17);
	this.shape_14._off = true;

	var maskedShapeInstanceList = [this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1).to({_off:false},0).to({_off:true},28).wait(41));

	// Layer 22 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_10 = new cjs.Graphics().p("ADtx9IAKAAMAAAAj7IgKAAg");
	var mask_4_graphics_11 = new cjs.Graphics().p("AlDx9IMRAAMAAAAj7IsRAAg");
	var mask_4_graphics_12 = new cjs.Graphics().p("A4Vx9MAwrAAAMAAAAj7MgwrAAAg");
	var mask_4_graphics_13 = new cjs.Graphics().p("Egi9gR9MBF7AAAMAAAAj7MhF7AAAg");
	var mask_4_graphics_14 = new cjs.Graphics().p("EgqjgR9MBVHAAAMAAAAj7MhVHAAAg");
	var mask_4_graphics_15 = new cjs.Graphics().p("EgvGgR9MBeNAAAMAAAAj7MheNAAAg");
	var mask_4_graphics_16 = new cjs.Graphics().p("EgwngR9MBhPAAAMAAAAj7MhhPAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_4_graphics_10,x:24.7,y:15}).wait(1).to({graphics:mask_4_graphics_11,x:46.2,y:15}).wait(1).to({graphics:mask_4_graphics_12,x:65.5,y:15}).wait(1).to({graphics:mask_4_graphics_13,x:50.4,y:15}).wait(1).to({graphics:mask_4_graphics_14,x:39.6,y:15}).wait(1).to({graphics:mask_4_graphics_15,x:33.1,y:15}).wait(1).to({graphics:mask_4_graphics_16,x:62,y:15}).wait(13).to({graphics:null,x:0,y:0}).wait(41));

	// Layer 23
	this.instance_2 = new lib.subtriangles("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.8,-2.1);
	this.instance_2.alpha = 0.23;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},27).wait(41));

	// Layer 24
	this.instance_3 = new lib.capsule2new2();
	this.instance_3.parent = this;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({alpha:0},8).to({_off:true},1).wait(51));

	// Layer 25
	this.instance_4 = new lib.greenSmallCenter1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-5,0);

	this.instance_5 = new lib.greenSmallClickedCentercopy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5,0);

	var maskedShapeInstanceList = [this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_5}]},39).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.8,-0.2,30.5,4.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-263,-47,610,90), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-263,-61.1,610,131), rect=new cjs.Rectangle(-263,-61.1,625,131), rect, rect=new cjs.Rectangle(-263,-61.1,610.2,131), rect, rect, rect=new cjs.Rectangle(-263,-61.1,632.4,131), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-288,-61.1,693,131), rect=new cjs.Rectangle(-301.8,-61.1,725.6,131), rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-263,-61.1,632.4,131), rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-301.8,-61.1,2785.3,131), rect, rect=new cjs.Rectangle(-247.1,-61.1,2730.6,131), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.greenCTAs1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":1,"idle":19,"static":28,"over":29,"out":39,"clicked":49});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.gotoAndStop("static");
	}
	this.frame_94 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(28).call(this.frame_28).wait(10).call(this.frame_38).wait(10).call(this.frame_48).wait(46).call(this.frame_94).wait(61));

	// Layer 4
	this.btn1 = new lib.btnGeneric();
	this.btn1.parent = this;
	this.btn1.setTransform(56,2,0.05,0.05,0,0,0,-1,-1);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.btnGeneric(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:58,y:-2},0).wait(48).to({x:2326.6,y:-6.1},0).to({_off:true},46).wait(60));

	// Layer 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_38 = new cjs.Graphics().p("Eg6NAFYQimAAh2hkQh2hmAAiOQAAiOB2hlQB2hkCmAAMB0bAAAQCmAAB3BkQB1BlAACOQAACOh1BmQh3BkimAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_graphics_38,x:-7.5,y:0.1}).wait(1).to({graphics:null,x:0,y:0}).wait(116));

	// Layer 15
	this.instance = new lib.allGlow1();
	this.instance.parent = this;
	this.instance.setTransform(-169.4,0);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).to({_off:true},1).wait(116));

	// Layer 16
	this.instance_1 = new lib.menuItem2x1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55,-2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).wait(7).to({regX:0.9,regY:-0.5,scaleX:0.11,scaleY:0.11,x:64.8,y:-0.1},4).wait(4).to({regX:0,regY:0,scaleX:1,scaleY:1,x:55,y:-2},0).wait(2).to({regX:0.9,regY:-0.5,scaleX:0.11,scaleY:0.11,x:64.8,y:-0.1},4).to({_off:true},1).wait(99));

	// Layer 17 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_29 = new cjs.Graphics().p("AgCx9IAJAAMAAAAj7IgJAAg");
	var mask_1_graphics_30 = new cjs.Graphics().p("Atlx9IbLAAMAAAAj7I7LAAg");
	var mask_1_graphics_31 = new cjs.Graphics().p("Eg2IgR9MBsRAAAMAAAAj7MhsRAAAg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Eg8lgR9MB5LAAAMAAAAj7Mh5LAAAg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EhBMgR9MCCZAAAMAAAAj7MiCZAAAg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EhD+gR9MCH9AAAMAAAAj7MiH9AAAg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EhE5gR9MCJzAAAMAAAAj7MiJzAAAg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EhE5gR9MCJzAAAMAAAAj7MiJzAAAg");
	var mask_1_graphics_40 = new cjs.Graphics().p("Eg7VgR9MB2rAAAMAAAAj7Mh2rAAAg");
	var mask_1_graphics_41 = new cjs.Graphics().p("A+qx9MA9VAAAMAAAAj7Mg9VAAAg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AxRx9MAijAAAMAAAAj7MgijAAAg");
	var mask_1_graphics_43 = new cjs.Graphics().p("Anox9IPcAAMAAAAj7IvcAAg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AApx9ID/AAMAAAAj7Ij/AAg");
	var mask_1_graphics_45 = new cjs.Graphics().p("ADZx9IAKAAMAAAAj7IgKAAg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EhE5gR9MCJzAAAMAAAAj7MiJzAAAg");
	var mask_1_graphics_50 = new cjs.Graphics().p("Eg7VgR9MB2rAAAMAAAAj7Mh2rAAAg");
	var mask_1_graphics_51 = new cjs.Graphics().p("A+qx9MA9VAAAMAAAAj7Mg9VAAAg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AxRx9MAijAAAMAAAAj7MgijAAAg");
	var mask_1_graphics_53 = new cjs.Graphics().p("Antx9IPbAAMAAAAj7IvbAAg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AAqx9ID/AAMAAAAj7Ij/AAg");
	var mask_1_graphics_55 = new cjs.Graphics().p("ADjx9IAKAAMAAAAj7IgKAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_1_graphics_29,x:0.7,y:15}).wait(1).to({graphics:mask_1_graphics_30,x:15.3,y:15}).wait(1).to({graphics:mask_1_graphics_31,x:58.5,y:15}).wait(1).to({graphics:mask_1_graphics_32,x:43.1,y:15}).wait(1).to({graphics:mask_1_graphics_33,x:32.1,y:15}).wait(1).to({graphics:mask_1_graphics_34,x:25.5,y:15}).wait(1).to({graphics:mask_1_graphics_35,x:67,y:15}).wait(4).to({graphics:mask_1_graphics_39,x:67,y:15}).wait(1).to({graphics:mask_1_graphics_40,x:67,y:15}).wait(1).to({graphics:mask_1_graphics_41,x:67,y:15}).wait(1).to({graphics:mask_1_graphics_42,x:57.3,y:15}).wait(1).to({graphics:mask_1_graphics_43,x:50,y:15}).wait(1).to({graphics:mask_1_graphics_44,x:29.6,y:15}).wait(1).to({graphics:mask_1_graphics_45,x:22.7,y:15}).wait(1).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_1_graphics_49,x:61,y:15}).wait(1).to({graphics:mask_1_graphics_50,x:56,y:15}).wait(1).to({graphics:mask_1_graphics_51,x:41,y:15}).wait(1).to({graphics:mask_1_graphics_52,x:43.6,y:15}).wait(1).to({graphics:mask_1_graphics_53,x:45.5,y:15}).wait(1).to({graphics:mask_1_graphics_54,x:29.7,y:15}).wait(1).to({graphics:mask_1_graphics_55,x:23.7,y:15}).wait(1).to({graphics:null,x:0,y:0}).wait(99));

	// Layer 18

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape.setTransform(61,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F8E8").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_1.setTransform(61,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ECF1D2").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_2.setTransform(61,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3EBBB").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_3.setTransform(61,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DAE4A4").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_4.setTransform(61,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D0DD8E").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_5.setTransform(61,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C7D677").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_6.setTransform(61,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BED060").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_7.setTransform(61,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B4C94A").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_8.setTransform(61,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ABC233").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_9.setTransform(61,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B9CC55").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_10.setTransform(61,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D5E199").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_11.setTransform(61,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1F5DD").s().p("EgzGAFtIAAgCQiJgNhmhbQh2htAAiWQAAiXB2hrQBmhcCJgMIAAgCMBlgAAAQCnAAB2BqQB1BrAACXQAACWh1BtQh2BqinAAg");
	this.shape_12.setTransform(61,2.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},29).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[]},39).wait(60));

	// Layer 19 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_12 = new cjs.Graphics().p("A0MG+Q8yAagzhUQEdpHHclcMBQXAAAQDBgSDVDNQDVDNoRK5UgiBgCAgeEAAcg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_2_graphics_12,x:96.6,y:6.9}).wait(27).to({graphics:null,x:0,y:0}).wait(116));

	// Layer 20
	this.t1a = new lib.textAnim();
	this.t1a.parent = this;
	this.t1a.setTransform(66,-1);

	this.instance_2 = new lib.subtext1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(70,3);

	var maskedShapeInstanceList = [this.t1a,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.t1a}]},12).to({state:[{t:this.instance_2}]},17).to({state:[]},10).to({state:[{t:this.instance_2}]},10).to({state:[]},46).wait(60));

	// Guide: Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_8 = new cjs.Graphics().p("AkrTiMAAAgnDIJXAAMAAAAnDg");
	var mask_3_graphics_9 = new cjs.Graphics().p("Al9TiMAAAgnDIL7AAMAAAAnDg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AnxTiMAAAgnDIPjAAMAAAAnDg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AqHTiMAAAgnDIUPAAMAAAAnDg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AoyTiMAAAgnDIRlAAMAAAAnDg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AnnTiMAAAgnDIPPAAMAAAAnDg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AmoTiMAAAgnDINRAAMAAAAnDg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AlzTiMAAAgnDILnAAMAAAAnDg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AlJTiMAAAgnDIKTAAMAAAAnDg");
	var mask_3_graphics_17 = new cjs.Graphics().p("A3LTiMAAAgnDIJYAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_3_graphics_8,x:404.8,y:-9}).wait(1).to({graphics:mask_3_graphics_9,x:308.2,y:-4.9}).wait(1).to({graphics:mask_3_graphics_10,x:171.4,y:0.9}).wait(1).to({graphics:mask_3_graphics_11,x:-5.4,y:8.4}).wait(1).to({graphics:mask_3_graphics_12,x:-69.7,y:15.2}).wait(1).to({graphics:mask_3_graphics_13,x:-125.6,y:21.1}).wait(1).to({graphics:mask_3_graphics_14,x:-173.3,y:26.2}).wait(1).to({graphics:mask_3_graphics_15,x:-212.8,y:30.3}).wait(1).to({graphics:mask_3_graphics_16,x:-243.9,y:33.6}).wait(1).to({graphics:mask_3_graphics_17,x:-148.4,y:36}).wait(12).to({graphics:null,x:0,y:0}).wait(126));

	// Layer 22
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1,1).p("Egt+gC9QAAAFAAAFQAACaBgBqQBgBtCIAAMBRtAAAQCHAABhhtQBghrAAiZQAAgFAAgF");
	this.shape_13.setTransform(65.3,19.9);
	this.shape_13._off = true;

	var maskedShapeInstanceList = [this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(8).to({_off:false},0).to({_off:true},21).wait(126));

	// Guide: Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_1 = new cjs.Graphics().p("AkrTiMAAAgnDIJXAAMAAAAnDg");
	var mask_4_graphics_2 = new cjs.Graphics().p("AllTiMAAAgnDILLAAMAAAAnDg");
	var mask_4_graphics_3 = new cjs.Graphics().p("AmzTiMAAAgnDINnAAMAAAAnDg");
	var mask_4_graphics_4 = new cjs.Graphics().p("AoUTiMAAAgnDIQpAAMAAAAnDg");
	var mask_4_graphics_5 = new cjs.Graphics().p("AqHTiMAAAgnDIUPAAMAAAAnDg");
	var mask_4_graphics_6 = new cjs.Graphics().p("ApGTiMAAAgnDISNAAMAAAAnDg");
	var mask_4_graphics_7 = new cjs.Graphics().p("AoLTiMAAAgnDIQXAAMAAAAnDg");
	var mask_4_graphics_8 = new cjs.Graphics().p("AnWTiMAAAgnDIOtAAMAAAAnDg");
	var mask_4_graphics_9 = new cjs.Graphics().p("AmoTiMAAAgnDINQAAMAAAAnDg");
	var mask_4_graphics_10 = new cjs.Graphics().p("Al/TiMAAAgnDIL/AAMAAAAnDg");
	var mask_4_graphics_11 = new cjs.Graphics().p("AldTiMAAAgnDIK7AAMAAAAnDg");
	var mask_4_graphics_12 = new cjs.Graphics().p("AlBTiMAAAgnDIKDAAMAAAAnDg");
	var mask_4_graphics_13 = new cjs.Graphics().p("AkrTiMAAAgnDIJXAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_4_graphics_1,x:-289.2,y:-15}).wait(1).to({graphics:mask_4_graphics_2,x:-241.7,y:-11.1}).wait(1).to({graphics:mask_4_graphics_3,x:-178.5,y:-5.8}).wait(1).to({graphics:mask_4_graphics_4,x:-99.8,y:0.6}).wait(1).to({graphics:mask_4_graphics_5,x:-5.4,y:8.4}).wait(1).to({graphics:mask_4_graphics_6,x:71.2,y:19.2}).wait(1).to({graphics:mask_4_graphics_7,x:140.4,y:29}).wait(1).to({graphics:mask_4_graphics_8,x:202.4,y:37.7}).wait(1).to({graphics:mask_4_graphics_9,x:257.1,y:45.4}).wait(1).to({graphics:mask_4_graphics_10,x:304.6,y:52.1}).wait(1).to({graphics:mask_4_graphics_11,x:344.7,y:57.8}).wait(1).to({graphics:mask_4_graphics_12,x:377.6,y:62.4}).wait(1).to({graphics:mask_4_graphics_13,x:403.2,y:66}).wait(16).to({graphics:null,x:0,y:0}).wait(126));

	// Layer 24
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1,1).p("EAt/AC0QgEiThchnQhhhtiHAAMhRtAAAQiIAAhgBtQhcBmgECU");
	this.shape_14.setTransform(65.3,-17);
	this.shape_14._off = true;

	var maskedShapeInstanceList = [this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1).to({_off:false},0).to({_off:true},28).wait(126));

	// Layer 25 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_10 = new cjs.Graphics().p("ADtx9IAKAAMAAAAj7IgKAAg");
	var mask_5_graphics_11 = new cjs.Graphics().p("AlDx9IMRAAMAAAAj7IsRAAg");
	var mask_5_graphics_12 = new cjs.Graphics().p("A4Vx9MAwrAAAMAAAAj7MgwrAAAg");
	var mask_5_graphics_13 = new cjs.Graphics().p("Egi9gR9MBF7AAAMAAAAj7MhF7AAAg");
	var mask_5_graphics_14 = new cjs.Graphics().p("EgqjgR9MBVHAAAMAAAAj7MhVHAAAg");
	var mask_5_graphics_15 = new cjs.Graphics().p("EgvGgR9MBeNAAAMAAAAj7MheNAAAg");
	var mask_5_graphics_16 = new cjs.Graphics().p("EgwngR9MBhPAAAMAAAAj7MhhPAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_5_graphics_10,x:24.7,y:15}).wait(1).to({graphics:mask_5_graphics_11,x:46.2,y:15}).wait(1).to({graphics:mask_5_graphics_12,x:65.5,y:15}).wait(1).to({graphics:mask_5_graphics_13,x:50.4,y:15}).wait(1).to({graphics:mask_5_graphics_14,x:39.6,y:15}).wait(1).to({graphics:mask_5_graphics_15,x:33.1,y:15}).wait(1).to({graphics:mask_5_graphics_16,x:62,y:15}).wait(13).to({graphics:null,x:0,y:0}).wait(126));

	// Layer 26
	this.instance_3 = new lib.subtriangles("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(19.8,-2.1);
	this.instance_3.alpha = 0.23;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({_off:true},27).wait(126));

	// Layer 27
	this.instance_4 = new lib.capsule2new();
	this.instance_4.parent = this;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({alpha:0},8).to({_off:true},1).wait(136));

	// Layer 28
	this.instance_5 = new lib.greenSmallCenter();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5,0);

	this.instance_6 = new lib.greenSmallClickedCenter();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-5,0);

	var maskedShapeInstanceList = [this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_6}]},39).to({state:[]},46).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(40.8,-0.2,30.5,4.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-247,-47,610,90), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-288,-47,693,90), rect=new cjs.Rectangle(-301.8,-47,725.6,90), rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-247,-47,610,90), rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-301.8,-51.1,2933.4,90), rect, rect=new cjs.Rectangle(-229,-51.1,2860.6,90), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.dna = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{desktop:91,mobile:107,"1":28,"2":32,"3":39});

	// timeline functions:
	this.frame_0 = function() {
		this.checkResolution = function() {
			if (stage.canvas.width > 1150)
				this.gotoAndPlay("desktop");
			else
				this.gotoAndPlay("mobile");
		}
	}
	this.frame_60 = function() {
		this.automatic_btn1.gotoAndPlay("on");
	}
	this.frame_67 = function() {
		this.automatic_btn3.gotoAndPlay("on");
	}
	this.frame_74 = function() {
		this.automatic_btn2.gotoAndPlay("on");
	}
	this.frame_87 = function() {
		this.checkResolution();
	}
	this.frame_96 = function() {
		onResizeListener();
		this.wireless.gotoAndPlay("start");
	}
	this.frame_105 = function() {
		this.stop();
		onResizeListener();
		this.itusers.gotoAndPlay("start");
	}
	this.frame_109 = function() {
		onResizeListener();
		this.wireless.gotoAndPlay("start");
	}
	this.frame_118 = function() {
		onResizeListener();
		this.itusers.gotoAndPlay("start");
	}
	this.frame_132 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60).call(this.frame_60).wait(7).call(this.frame_67).wait(7).call(this.frame_74).wait(13).call(this.frame_87).wait(9).call(this.frame_96).wait(9).call(this.frame_105).wait(4).call(this.frame_109).wait(9).call(this.frame_118).wait(14).call(this.frame_132).wait(1));

	// itusers
	this.itusers = new lib.itusers();
	this.itusers.parent = this;
	this.itusers.setTransform(-260.1,-1118.2,1,1,0,0,0,67.9,21.8);

	this.timeline.addTween(cjs.Tween.get(this.itusers).wait(104).to({regX:72.5,regY:22.1,x:-235.5,y:-780.9},0).wait(13).to({x:103.5},0).wait(16));

	// wireless
	this.wireless = new lib.wireless();
	this.wireless.parent = this;
	this.wireless.setTransform(-260.1,-1140.1,1,1,0,0,0,67.9,21.8);

	this.timeline.addTween(cjs.Tween.get(this.wireless).wait(95).to({regX:72.5,regY:22.1,x:-235.5,y:-883.9},0).wait(13).to({x:103.5},0).wait(25));

	// automatic_btn3
	this.automatic_btn3 = new lib.greenCTAs3a();
	this.automatic_btn3.parent = this;
	this.automatic_btn3.setTransform(-612,-1250,0.5,0.5,0,0,0,-1070,-1030);

	this.timeline.addTween(cjs.Tween.get(this.automatic_btn3).wait(133));

	// automatic_btn2
	this.automatic_btn2 = new lib.greenCTAs2a();
	this.automatic_btn2.parent = this;
	this.automatic_btn2.setTransform(-533,-1123,0.5,0.5,0,0,0,-1070,-1030);

	this.timeline.addTween(cjs.Tween.get(this.automatic_btn2).wait(133));

	// automatic_btn1
	this.automatic_btn1 = new lib.greenCTAs1();
	this.automatic_btn1.parent = this;
	this.automatic_btn1.setTransform(-575,-1186,0.5,0.5,0,0,0,-1070,-1030);

	this.timeline.addTween(cjs.Tween.get(this.automatic_btn1).wait(133));

	// 2 - solid
	this.instance = new lib.animRightPurple("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(0,-1101);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).wait(92));

	// 1 - sol
	this.instance_1 = new lib.animRight("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-892);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).wait(110));

	// 2 - wire
	this.instance_2 = new lib.animRight2copy("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1102.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({_off:true},19).wait(86));

	// 1d - wire
	this.instance_3 = new lib.animRight2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-893.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({_off:true},20).wait(102));

	// 2 solid
	this.instance_4 = new lib.animRightPurple("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-438);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(53).to({_off:false},0).wait(80));

	// 1 - solid
	this.instance_5 = new lib.animRight("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-225);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).wait(121));

	// 2a - wire
	this.instance_6 = new lib.animRight2copy("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-440.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).to({_off:true},20).wait(73));

	// Layer 13
	this.instance_7 = new lib.leftAnim2copy("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-116.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(58).to({_off:false},0).wait(75));

	// 1a-Wire
	this.instance_8 = new lib.animRight2("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-227.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},42).wait(91));

	// 2 - solid
	this.instance_9 = new lib.leftAnim2copy("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,-772.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(47).to({_off:false},0).wait(86));

	// Layer 12
	this.instance_10 = new lib.leftAnimcopy("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-114.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(47).to({_off:false},0).to({_off:true},20).wait(66));

	// 2a wire
	this.instance_11 = new lib.leftAnimcopy("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,-772.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(35).to({_off:false},0).to({_off:true},21).wait(77));

	// 1c-Solid
	this.instance_12 = new lib.leftAnim2("synched",0,false);
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,-562.3);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(18).to({_off:false},0).wait(115));

	// 1b-Wire
	this.instance_13 = new lib.leftAnim("synched",0,false);
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,-562.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).to({_off:true},34).wait(93));

	// Layer 7
	this.instance_14 = new lib.blueCells();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-50,-300,0.5,0.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(89).to({_off:false},0).wait(44));

	// Layer 6
	this.instance_15 = new lib.blueCells();
	this.instance_15.parent = this;
	this.instance_15.setTransform(50,-1040,0.5,0.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(87).to({_off:false},0).wait(46));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_84 = new cjs.Graphics().p("A5xGQIAAsfMAzjAAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(84).to({graphics:mask_graphics_84,x:-25.5,y:-980.5}).wait(49));

	// Layer 5
	this.instance_16 = new lib.blueCells();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-60,-980,0.5,0.5);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(84).to({_off:false},0).wait(49));

	// Layer 4
	this.instance_17 = new lib.blueCells();
	this.instance_17.parent = this;
	this.instance_17.setTransform(50,-370,0.5,0.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(82).to({_off:false},0).wait(51));

	// Layer 3
	this.instance_18 = new lib.blueCells();
	this.instance_18.parent = this;
	this.instance_18.setTransform(50,-438,0.5,0.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).wait(53));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_78 = new cjs.Graphics().p("AvDDwQhOiDhHhtQjglcg/gBMArvAAAIhkGPMgiXAEsg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(78).to({graphics:mask_1_graphics_78,x:-50.5,y:-905.5}).wait(55));

	// Layer 2
	this.instance_19 = new lib.blueCells();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-30,-909,0.5,0.5);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(78).to({_off:false},0).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-460,-1179.8,1401,2287.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-460,-1325.2,1401,2432.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-460,-1324.5,1401,2432), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-460,-1324,1401,2431.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.mainCenter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_113 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(113).call(this.frame_113).wait(1));

	// Layer 3
	this.dna = new lib.dna();
	this.dna.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.dna).wait(114));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-560.5,-1179.8,762.5,1392.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.hexagon.compositeOperation="overlay";
		//this.hexagon2.compositeOperation="overlay";


		var _this = this;
		//_this.mainCenter.dna.automatic_btn1.btn1.cursor = 'cursor';

		/*function callPopup(num) {
			//createjs.Tween.get(this).wait(50).call(showPopup, [num]);
			showPopup(num);
		}*/

		this.resetButtons = function() {
			if (_this.mainCenter.dna) {
				_this.mainCenter.dna.automatic_btn1.gotoAndPlay("idle");
				_this.mainCenter.dna.automatic_btn2.gotoAndPlay("idle");
				_this.mainCenter.dna.automatic_btn3.gotoAndPlay("idle");
				_clickedBtn = null;
				//_this.mainCenter.dna.wireless.gotoAndPlay("idle");
				//_this.mainCenter.dna.itusers.gotoAndPlay("idle");
			}
		}

		/*
		ボタン処理
		==========================
		・ボタンを押した時の処理
		・マウスが乗った時の処理
		・マウスが離れた時の処理
		==========================
		*/

		var canClick = false;
		var _clickedBtn;
		/*=== Middle Green Button ===*/
		// 押した時の処理
		_this.mainCenter.dna.automatic_btn1.btn1.addEventListener("click", fl_MouseOverHandler_1.bind(_this));
		function fl_MouseOverHandler_1()
		{
			canClick = true;
			if (_clickedBtn) {
				if (_clickedBtn == _this.mainCenter.dna.automatic_btn1) canClick = false;
				else canClick = true;
			} else canClick = true;
			if (canClick) {
				_this.mainCenter.dna.automatic_btn1.gotoAndPlay("clicked");
				modalAnimation(3);
				if (_clickedBtn) _clickedBtn.gotoAndPlay("idle");
				_clickedBtn = _this.mainCenter.dna.automatic_btn1;
			}
		}

		// マウスが上に乗った時の処理
		_this.mainCenter.dna.automatic_btn1.btn1.addEventListener("mouseover", fl_MouseOverHandler_1a.bind(_this));
		function fl_MouseOverHandler_1a()
		{
			if (_clickedBtn) {
				if (_clickedBtn != _this.mainCenter.dna.automatic_btn1)
					_this.mainCenter.dna.automatic_btn1.gotoAndPlay("over");
			} else _this.mainCenter.dna.automatic_btn1.gotoAndPlay("over");
			//_this.mainCenter.mainStatic.blue1Container.gotoAndPlay("on");
		}

		// マウスが離れた時の処理
		_this.mainCenter.dna.automatic_btn1.btn1.addEventListener("mouseout", fl_MouseOverHandler_1b.bind(_this));
		function fl_MouseOverHandler_1b()
		{
			if (_clickedBtn) {
				if (_clickedBtn != _this.mainCenter.dna.automatic_btn1)
					_this.mainCenter.dna.automatic_btn1.gotoAndPlay("out");
			} else _this.mainCenter.dna.automatic_btn1.gotoAndPlay("out");
			//_this.mainCenter.mainStatic.blue1Container.gotoAndPlay("on");
		}


		/*=== Bottom Green Button ===*/
		// 押した時の処理
		_this.mainCenter.dna.automatic_btn2.btn1.addEventListener("click", fl_MouseOverHandler_2.bind(_this));
		function fl_MouseOverHandler_2()
		{
		    //_this.mainCenter.mainStatic.blue1Container.shine1.gotoAndPlay("on");
			//_this.mainCenter.mainStatic.blue1Container.gotoAndPlay("on");
			canClick = true;
			if (_clickedBtn) {
				if (_clickedBtn == _this.mainCenter.dna.automatic_btn2) canClick = false;
				else canClick = true;
			} else canClick = true;
			if (canClick) {
				_this.mainCenter.dna.automatic_btn2.gotoAndPlay("clicked");
				modalAnimation(1);
				if (_clickedBtn) _clickedBtn.gotoAndPlay("idle");
				_clickedBtn = _this.mainCenter.dna.automatic_btn2;
			}
		}

		// マウスが上に乗った時の処理
		_this.mainCenter.dna.automatic_btn2.btn1.addEventListener("mouseover", fl_MouseOverHandler_2a.bind(_this));
		function fl_MouseOverHandler_2a()
		{
			if (_clickedBtn) {
				if (_clickedBtn != _this.mainCenter.dna.automatic_btn2)
					_this.mainCenter.dna.automatic_btn2.gotoAndPlay("over");
			} else _this.mainCenter.dna.automatic_btn2.gotoAndPlay("over");
			//_this.mainCenter.mainStatic.blue1Container.gotoAndPlay("on");

		}

		// マウスが離れた時の処理
		_this.mainCenter.dna.automatic_btn2.btn1.addEventListener("mouseout", fl_MouseOverHandler_2b.bind(_this));
		function fl_MouseOverHandler_2b()
		{
			if (_clickedBtn) {
				if (_clickedBtn != _this.mainCenter.dna.automatic_btn2)
					_this.mainCenter.dna.automatic_btn2.gotoAndPlay("out");
			} else _this.mainCenter.dna.automatic_btn2.gotoAndPlay("out");
			//_this.mainCenter.mainStatic.blue1Container.gotoAndPlay("on");

		}

		/*=== Top Green Button ===*/
		// 押した時の処理
		_this.mainCenter.dna.automatic_btn3.btn1.addEventListener("click", fl_MouseOverHandler_3.bind(_this));
		function fl_MouseOverHandler_3()
		{
		    //_this.mainCenter.mainStatic.blue1Container.shine1.gotoAndPlay("on");
			//_this.mainCenter.mainStatic.blue1Container.gotoAndPlay("on");
			canClick = true;
			if (_clickedBtn) {
				if (_clickedBtn == _this.mainCenter.dna.automatic_btn3) canClick = false;
				else canClick = true;
			} else canClick = true;
			if (canClick) {
				_this.mainCenter.dna.automatic_btn3.gotoAndPlay("clicked");
				modalAnimation(2);
				if (_clickedBtn) _clickedBtn.gotoAndPlay("idle");
				_clickedBtn = _this.mainCenter.dna.automatic_btn3;
			}
		}

		// マウスが上に乗った時の処理
		_this.mainCenter.dna.automatic_btn3.btn1.addEventListener("mouseover", fl_MouseOverHandler_3a.bind(_this));
		function fl_MouseOverHandler_3a()
		{
			if (_clickedBtn) {
				if (_clickedBtn != _this.mainCenter.dna.automatic_btn3)
					_this.mainCenter.dna.automatic_btn3.gotoAndPlay("over");
			} else _this.mainCenter.dna.automatic_btn3.gotoAndPlay("over");
			//_this.mainCenter.mainStatic.blue1Container.gotoAndPlay("on");

		}

		// マウスが離れた時の処理
		_this.mainCenter.dna.automatic_btn3.btn1.addEventListener("mouseout", fl_MouseOverHandler_3b.bind(_this));
		function fl_MouseOverHandler_3b()
		{
			if (_clickedBtn) {
				if (_clickedBtn != _this.mainCenter.dna.automatic_btn3)
					_this.mainCenter.dna.automatic_btn3.gotoAndPlay("out");
			} else _this.mainCenter.dna.automatic_btn3.gotoAndPlay("out");
			//_this.mainCenter.mainStatic.blue1Container.gotoAndPlay("on");

		}


		/*=== Wireless Users Button ===*/
		// 押した時の処理
		_this.mainCenter.dna.wireless.wirelessBtn.addEventListener("click", fl_MouseOverHandler_4.bind(_this));
		function fl_MouseOverHandler_4()
		{
			canClick = true;
			if (_clickedBtn) {
				if (_clickedBtn == _this.mainCenter.dna.wireless) canClick = false;
				else canClick = true;
			} else canClick = true;
			if (canClick) {
				//_this.mainCenter.dna.wireless.gotoAndPlay("clicked");
				//console.log("clicked Wireless Users");
				modalAnimation2(1);
				this.resetButtons();
				//if (_clickedBtn) _clickedBtn.gotoAndPlay("idle");
				_clickedBtn = _this.mainCenter.dna.wireless;
			}
		}

		// マウスが上に乗った時の処理
		_this.mainCenter.dna.wireless.wirelessBtn.addEventListener("mouseover", fl_MouseOverHandler_4a.bind(_this));
		function fl_MouseOverHandler_4a()
		{
		    _this.mainCenter.dna.wireless.gotoAndPlay("on");
			//_this.mainCenter.mainStatic.blue1Container.gotoAndPlay("on");

		}

		// マウスが離れた時の処理
		_this.mainCenter.dna.wireless.wirelessBtn.addEventListener("mouseout", fl_MouseOverHandler_4b.bind(_this));
		function fl_MouseOverHandler_4b()
		{
		    _this.mainCenter.dna.wireless.gotoAndPlay("off");
			//_this.mainCenter.mainStatic.blue1Container.gotoAndPlay("on");

		}


		/*=== IT Users Button ===*/
		// 押した時の処理
		_this.mainCenter.dna.itusers.wirelessBtn.addEventListener("click", fl_MouseOverHandler_5.bind(_this));
		function fl_MouseOverHandler_5()
		{
			canClick = true;
			if (_clickedBtn) {
				if (_clickedBtn == _this.mainCenter.dna.itusers) canClick = false;
				else canClick = true;
			} else canClick = true;
			if (canClick) {
				//_this.mainCenter.dna.itusers.gotoAndPlay("clicked");
				//console.log("clicked IT Users");
				modalAnimation2(2);
				this.resetButtons();
				//if (_clickedBtn) _clickedBtn.gotoAndPlay("idle");
				_clickedBtn = _this.mainCenter.dna.itusers;
			}
		}

		// マウスが上に乗った時の処理
		_this.mainCenter.dna.itusers.wirelessBtn.addEventListener("mouseover", fl_MouseOverHandler_5a.bind(_this));
		function fl_MouseOverHandler_5a()
		{
		    _this.mainCenter.dna.itusers.gotoAndPlay("on");
			//_this.mainCenter.mainStatic.blue1Container.gotoAndPlay("on");

		}

		// マウスが離れた時の処理
		_this.mainCenter.dna.itusers.wirelessBtn.addEventListener("mouseout", fl_MouseOverHandler_5b.bind(_this));
		function fl_MouseOverHandler_5b()
		{
		    _this.mainCenter.dna.itusers.gotoAndPlay("off");
			//_this.mainCenter.mainStatic.blue1Container.gotoAndPlay("on");

		}
	}


	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mainCenter
	this.mainCenter = new lib.mainCenter();
	this.mainCenter.parent = this;
	this.mainCenter.setTransform(403.9,290.9,1,1,0,0,0,-76.1,-778.1);

	this.timeline.addTween(cjs.Tween.get(this.mainCenter).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(399.5,289.2,762.5,1392.7);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	width: 960,
	height: 800,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_P_.png?1494348210379", id:"index_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
