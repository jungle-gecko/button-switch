+function ($) {
	'use strict';

	$.fn.buttonswitch = function (options)
	{
		return new ButtonSwitch(this, options);
	};
	
	$.fn.buttonswitch.defaults = {
	};
	
	var ButtonSwitch = function (element, options)
	{
		var myButtonSwitch = this;
		
		myButtonSwitch.options = $.extend(true, {}, $.fn.buttonswitch.defaults, options);
		myButtonSwitch.$element = $(element);

		myButtonSwitch.$element.find('input[type="radio"], input[type="checkbox"]').change(function() {
			myButtonSwitch.refresh();
		});

		myButtonSwitch.refresh();
	};
	
	ButtonSwitch.prototype.refresh = function() {
		var myButtonSwitch = this;
		
		myButtonSwitch.$element.find('input[type="radio"], input[type="checkbox"]').each(function() {
			var $input = $(this);
			var $parent = $input.closest('.btn');
			if ($input.prop('checked')) {
				$parent.addClass('active ' + $parent.data('active-class')).removeClass($parent.data('inactive-class'));
			}
			else {
				$parent.removeClass('active ' + $parent.data('active-class')).addClass($parent.data('inactive-class'));
			}		
		});
		
	};

}(jQuery);