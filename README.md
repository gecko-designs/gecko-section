# Gecko Section #

Gecko Section is designed to be an extendable framework for theme developers. You can extend grid to do lots of really cool things!

## Filters ##
This filters allow you to manipulate the output:

* gecko/section/defaults
* gecko/section/class - Used to modify classes attached to the block-item

## Styles ##
Creating new styles for a grid item

```
window.wp.domReady(function () {
	// To add a new style to the grid item you can.
	window.wp.blocks.registerBlockStyle('gecko/section', [
		{
			name: 'grey',
			label: 'Grey'
		},
	]);
	// A style can be unregistered as well with something like this:
	// window.wp.blocks.unregisterBlockStyle('gecko/section, 'md');
});
```