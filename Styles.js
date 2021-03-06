
var patch = function(to,from){
	for(var key in from){
		if(from.hasOwnProperty(key)){
			to[key] = from[key];
		}
	}
};

var Stylesheet = function(){
	var STYLES = {};

	this.get = function(){
		var style = {};

		for(var i=0;i<arguments.length;i++){
			patch(style,STYLES[names[i]]);
		}

		return style;
	}

	this.set = function(name, style){
		STYLES[name] = style;
	}

	return this;
}


var Styles = {
	Stylesheet: Stylesheet,
	patch: patch,
};

module.exports = Styles;
