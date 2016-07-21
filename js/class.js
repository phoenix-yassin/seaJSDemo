define(function(require, exports, module) {
	'use strict';

	function Class() {

	};

	var inherit = function (child, parent) {
		var temp = function () {
			
		}
		temp.prototype = parent.prototype;
		child.prototype = new temp();//此时，child 的prototype与parent的prototype无关
		child.superclass = parent.prototype;
		child.prototype.constructor = child; 
	}
	
	Class.create = function () {
		
	}
	Class.prototype = Class.superclass = {
		initialize: function() {},
		extend: function() {
			/*将this指针也插入到arguments数组*/
			Array.prototype.unshift.call(arguments, this);
			//this上下文已经传入，此时就不需要传入上下文，用null
			mixin.apply(null, arguments);
			return this;
		}
	};

	module.exports = Class;

	function mixin() {
		//转化成数组
		var args = Array.prototype.slice.call(arguments, 0);
		var source,p;
		//获取上下文
		var context = args.shift();
		while(source = args.shift()) {
			for(p in source) {
				if(p === 'mixin') {
					source[p].unshift(context);
					mixin.apply(null, source[p]);
				} else {
					context[p] = source[p];
				}
			}
		}
	};
});