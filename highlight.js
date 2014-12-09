ko.bindingHandlers.highlight = {
	init: function (element, valueAccessor, allBindings) {

		if (!window.Prism) {
			throw 'Prism not loaded.';
		}

		// this should only be applied to a code element.
		if (!new RegExp('^code$', 'i').test(element.tagName)) {
			throw 'Please bind to a "code" element';
		}

		// check if we specified a language.
		var has = allBindings.has('language');
		console.log('has', has);
		var language = allBindings.get('language');
		if (language) {
			element.className += language;
		}

	},
	update: function (element, valueAccessor) {

		var value = ko.unwrap(valueAccessor());

		if (value !== undefined) { // allows highlighting static code
			element.innerHTML = value;
		}

		window.Prism.highlightElement(element);
	}

};