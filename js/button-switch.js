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

		// Init hack for Bootstrap
		$(element).find(':input:checked').parent('.btn').addClass('active');
		
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
		}).trigger('change');
	};

}(jQuery);