/**
 *	Template - component_slider
 *	Callback function for when the template instance is created
 *	@method created
 */
Template['component_slider'].created = function() {
};

/**
 *	Template - component_slider
 *	Callback function for when the template instance is created
 *	@method created
 */
Template['component_slider'].rendered = function() {

	/**
	 *	With the template rendered, let's fire up the slider
	 */
	this.slider = Slider.setup(this.$('.sliderContainer').get(0));
};

/**
 *	Template - component_slider
 *	Callback function for when the template instance is created
 *	@method created
 */
Template['component_slider'].destroyed = function() {

};

/**
 *	Template - component_slider
 *	Helpers
 */
Template['component_slider'].helpers({

	/**
	 *	We need to get the percentage width of the slider based on the number
	 *	of slides it contains as a multiple of 100.
	 */
	sliderWidth: function() {
		return this.slides.length * 100;
	}
});
