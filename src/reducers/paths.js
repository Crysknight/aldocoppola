// Basis of all widget paths (after this everything is widget)
const appPath = '/_appliance';
const appRegExp = new RegExp(appPath + '(.*)');

// Object with paths used by the app
const paths = {
	app: {
		pathString: '/'
	},
	ChooseCenter: {
		pathString: '/choose-center/'
	},
	ChooseEmployee: {
		pathString: '/choose-employee/'
	},
	ChooseServices: {
		pathString: '/choose-services/'
	},
	ChooseDateTime: {
		pathString: '/choose-datetime/'
	}
};

// Concatenating the paths with the basis
for (let path in paths) {
	paths[path].pathString = appPath + paths[path].pathString;
}

// A function to get the path of the specific page
paths.getPath = function (currentPath, path) {
	return currentPath.replace(appRegExp, '') + path.pathString;
};

// A function to create a Link that opens and closes the app
paths.getAppSwitch = function (currentPath) {
	currentPath = currentPath.replace(/\/+$/, '');
	if (currentPath.match(appRegExp)) {
		return currentPath.replace(appRegExp, '');
	} else {
		return currentPath + this.app.pathString;
	}
};

// A function to identificate and return the path object by props.match.path
// paths.identificatePath = function (matchedPath) {
// 	for (let path in this) {
// 		if (this[path].pathString === matchedPath) {
// 			return this[path];
// 		}
// 	}
// };

// Making the functions invisible for (for ... in ...) to be able to create an array of paths (to eventually map through it)
Object.defineProperties(paths, {
	getPath: {
		enumerable: false
	},
	getAppSwitch: {
		enumerable: false
	}
});

// Export the paths object for testing purposes
export { paths };

// DUE TO THE PRESENCE OF METHODS IN THIS REDUCER ONE SHOULD NOT MUTATE THE STATE OF IT,
// OTHERWISE THE FUNCTIONS WILL BE OBLITERATED, AND THE APP WON'T WORK

// Reducer, providing the paths object to the whole app
export default (state = paths, action) => {
	return state;
};