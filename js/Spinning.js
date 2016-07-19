define(function(require, exports, module) {
	//引入jquery
	require('jquery');
	//构造函数
	function Spinning(container) {
		this.container = $(container);
		this.icons = this.container.children();
		this.spinnings = [];
		console.log("init complete");
	}

	module.exports = Spinning;
	//渲染
	Spinning.prototype.render = function() {
			console.log("render complete");
			this._init();
			this.container.css('background', 'none');
			this.icons.show();
			this._spin();
		}
		/**
		 *  
		 */
	Spinning.prototype._init = function() {
		var spinnings = this.spinnings;
		var hoverZIndex = 1000;
		var zIndex = 999;

		$(this.icons).each(function(n, ele) {
			var $ele = $(this);
			var startDeg = rand(360);
			var timer;
			$ele.css({
				top: rand(50),
				left: n * 50 + rand(10),
				zIndex: zIndex
			}).hover(function() {
					$ele.fadeTo(250, 1)
						.css('z-index', hoverZIndex)
						.css('transform', 'rotate(0deg)');
				},
				function() {
					$ele.fadeTo(250, 1)
						.css('z-index', zIndex);
					timer && clearTimeout(timer);
					// 1. 调用spin的上下文是 调用的匿名函数
					// 2. spin函数的形成一个闭包
					timer = setTimeout(spin, rand(1000));
				});

			function spin() {
				$ele.css('transform', 'rotate(' + startDeg + 'deg)');
			}
			spinnings[n] = spin;
		});
		return this;
	}

	Spinning.prototype._spin = function() {
		$(this.spinnings).each(function(i, fn) {
			setTimeout(fn, rand(1000));
		})
	}

	function rand(x) {
		return Math.random() * x;
	}
});