Router.map(function() {
	this.route('home', {
		path: '/',
		template: 'template_main',
		data: function () {
			return {
				slides: [
					{content: 'Slide one'},
					{content: 'Slide two'},
					{content: 'Slide three'},
					{content: 'Slide four'},
					{content: 'Slide five'},
					{content: 'Slide six'}
				]
			};
		},
		yieldTemplates: {
			'component_slider': {to: 'content'}
		}
	}, {where: 'client'});	

});

