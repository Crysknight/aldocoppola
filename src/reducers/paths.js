// Basis of all widget paths (after this everything is widget)
const appPath = '/_appliance/';

// Regular expression to find any path related to the widget
const appRegExp = new RegExp(appPath + '(.*)');

// Object with paths used by the app
const paths = {
	__app: {
		pathString: '',
		private: true
	},
	ChooseCenter: {
		pathString: 'choose-center/',
		private: false
	},
	ChooseEmployee: {
		pathString: 'choose-employee/',
		private: true,
		childPaths: {
			Rebecca: {
				pathString: 'employee1488/',
				private: true
			}
		}
	},
	ChooseServices: {
		pathString: 'choose-services/',
		private: true
	},
	ChooseDateTime: {
		pathString: 'choose-datetime/',
		private: true
	}
};

const pathsMethods = {};

// Function for constructing pathstrings from the sctructure above
// It doesn't check the 'pathStrings' consistency so please regard the following format
// pathString: 'nameofthepathstring/' with slash at the end
pathsMethods.createPathStrings = function (paths, nested) {
	// Firstly, it loops through the paths object, finding properties that are paths too
	for (let path in paths) {
		// Do not process the root path of the widget
		if (path === '__app') {
			paths[path].pathString = appPath;
			continue;
		}
		let parentString;
		// The 'finished' property denotes that we already processed this pathstring
		// not to process it in further calls of function
		if (nested || paths[path].finished) {
			parentString = paths[path].pathString;
		} else {
			// Prepending 'appPath' at first level of structure
			parentString = paths[path].pathString = appPath + paths[path].pathString;
			paths[path].finished = true;
		}
		// If the path has childPaths, we process every childPath's pathString
		if (paths[path].childPaths) {
			let childPaths = paths[path].childPaths;
			for (let path in childPaths) {
				if (!childPaths[path].finished) {
					childPaths[path].pathString = parentString + childPaths[path].pathString;
					childPaths[path].finished = true;
				}
				// And recursively process the childPaths too
				pathsMethods.createPathStrings(childPaths, true);
			}
		}
	}
	// console.log(paths);
};

pathsMethods.createPathStrings(paths);

// A function to get the path of the specific page
pathsMethods.getPath = function (paths, currentPath, path) {
	if (!path) {
		return currentPath.replace(appRegExp, '') + paths.__app.pathString;
	}
	return currentPath.replace(appRegExp, '') + path.pathString;
};

// A function to create a Link that opens and closes the app
pathsMethods.getAppSwitch = function (paths, currentPath) {
	currentPath = currentPath === '/' ? '' : currentPath;
	if (currentPath.match(appRegExp)) {
		return currentPath.replace(appRegExp, '');
	} else {
		return currentPath + paths.__app.pathString;
	}
};

// A function to create dynamic paths. 
// Takes in a path object: properties are - 'pathName', 'pathString', 'component', 'parentPath' and 'privacy'
pathsMethods.createPath = function (paths, path) {
	if (!path.pathString || !path.component || !path.pathName) {
		throw new Error('no pathstring or component');
		return;
	}
	if (path.pathString.match(/ /) !== null) {
		throw new Error('wrong pathstring format');
		return;
	}
	let targetPath = { 
		pathString: path.pathString, 
		component: path.component, 
		private: path.privacy 
	}
	if (!path.parentPath) {
		paths[path.pathName] = targetPath;
	} else {
	// Function creates a recursive function to search a parentPath inside the paths object
	// In every path that has childPaths it also searches the parentPath in them recursively calling itself 
		let pathsCrawler = function(targetPath, pathName, parentPath) {
			for (let path in paths) {
				if (paths[path].pathString === parentPath.pathString) {
					paths[path].childPaths[pathName] = targetPath;
				} else if (paths[path].childPaths) {
					pathsCrawler(paths[path].childPaths, targetPath, pathName, parentPath);
				}
			}
		}
		pathsCrawler(paths, targetPath, path.pathName, path.parentPath);
	}
	pathsMethods.createPathStrings(paths);
	// console.log(paths);
};

// Export the paths and pathsMethods objects for testing purposes
export { pathsMethods };
export { paths };
window.pathsMethods = pathsMethods;
// console.log(paths);

// Reducer, providing the paths object to the whole app
export default (state = paths, action) => {
	return state;
};