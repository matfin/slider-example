Slider Example
==============

This is an example app written using the Meteor Javascript framework. It showcases a very simple example of how to use the [https://github.com/matfin/slider](matfin:slider) package.

The code in both these repositories is commented so should be self explanatory, but below is a quick guide on how to get things set up.

### First things first - Setting up our template

You will need to create a new template that you can include in other templates. Below is the structure you will need to have

```html
<template name="component_slider">
	<div class="sliderContainer" style="width: 500%">
		<div class="slider">
			<div class="slide">
				You can have 
			</div>
			<div>
				Anything in here
			</div>
			<div>
				That you want and 
			</div>
			<div>
				It doesn't all need
			</div>
			<div>
				To be the same.
			</div>
		</div>
	</div>
</template>
```

### Applying simple styling

At a minimum, you will need to add this to your project - preferably using LESS, as it makes things a lot easier. The example below uses LESS css and LESSHAT has been added (see client/css/lesshat.lessimport)

```
.sliderContainer {
	position: relative; 
	margin: 20px auto;
	width: 100%;
	overflow: hidden;
	.user-select(none);

	.slider {
		position: relative;
		.display(flex);
		.flex(1);
		.slide {
			.display(flex);
			.flex(1);
			width: 100%;

			p {
				display: block;
				width: 100%;
				height: 300px;
				line-height: 300px;
				cursor: pointer;
				font-size: 50px;
			}
		}
	}
}
```

### Setting up the controller

Add the following line of code to your template controller, inside the rendered() callback function. This will make sure the slider is set up when the sliderContainer dom element has been loaded.

```
this.slider = Slider.setup(this.$('.sliderContainer').get(0));

```
