+function ($) {
	'use strict';

	$.fn.inputswitch = function (options)
	{
		return new InputSwitch(this, options);
	};
	
	$.fn.inputswitch.defaults = {
	};
	
	var InputSwitch = function (element, options)
	{
		var myInputSwitch = this;
		
		myInputSwitch.options = $.extend(true, {}, $.fn.inputswitch.defaults, options);
		
		$(element).find('input[type="radio"], input[type="checkbox"]').change(function() {
			var $input = $(this);
			var $parent = $input.closest('.btn');
			if ($input.prop('checked')) {
				$parent.addClass($parent.data('active-class')).removeClass($parent.data('inactive-class'));
			}
			else {
				$parent.removeClass($parent.data('active-class')).addClass($parent.data('inactive-class'));
			}		
			$parent.siblings().each(function() {
		    	var $sibbling = $(this);
		    	if ($sibbling.find('input').prop('checked')) {
					$sibbling.addClass($sibbling.data('active-class')).removeClass($sibbling.data('inactive-class'));
		    	}
		    	else {
					$sibbling.removeClass($sibbling.data('active-class')).addClass($sibbling.data('inactive-class'));
		    	} 
			});
		});
	};

}(jQuery);