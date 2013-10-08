// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var elementArray = [];
	var getElementFunction = function(element) {
		if (element.classList) {
			if (element.classList.contains(className)) { elementArray.push(element) };
		}
		if (element.hasChildNodes()) {
			var child = element.firstChild;
			for (var i = 0; i < element.childNodes.length; i++) {
				getElementFunction(child);
				child = child.nextSibling;
			}
		}
	};

	getElementFunction(document.body);
	return elementArray;

};
