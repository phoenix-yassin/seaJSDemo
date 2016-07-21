define(function(require){
	var Spinning = require('./Spinning');
	
	var s = new Spinning("#container");
	
	s.render();
	
	var Class = require('./class');
	
	var func = function () {
		console.log("func is called");
	}
	
	var person_1 = new Class();
	person_1.extend({
		mixin:[{name:'yyh is a xxx person'},]
	});
	
	console.log(person_1.name);
})
