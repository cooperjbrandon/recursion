// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	if (typeof obj === 'string') {
		return '"' + obj + '"';
	}
	else if (typeof obj === 'object' && obj != null) {
		if (obj instanceof Array) {
			var temp_array = [];
			_.each(obj, function (num) {
				temp_array.push(stringifyJSON(num));
			});
			return '[' + temp_array + ']';
		}
		else {
			var words = "";
			var last_value;
			_.each(obj, function(value) {
				last_value = value;
			});
			_.each(obj, function(value,key) {
				if (typeof value === 'function') {
				}
				else if (typeof value === 'undefined') {
					return null;
				}
				else {
					var temp = stringifyJSON(key) + ":" + stringifyJSON(value);
					words = words + temp;
					if (value != last_value) {
						words = words + ","
					}
				}	
			});
			return '{' + words + '}';
		}
	}
	else {
		return String(obj);
	}

};
