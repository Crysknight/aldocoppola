import { GOT_EMPLOYEES, GOT_MAIN_SERVICES } from '../actions/types';

// Basis of all widget paths (after this everything is widget)
const appPath = '/_appliance/';

// Regular expression to find any path related to the widget
const appRegExp = new RegExp(appPath.slice(0, -1) + '(.*)');

// Object with paths used by the app
const paths = {
	__app: {
		pathString: '',
		privacy: true
	},
	ChooseCenter: {
		pathString: 'choose-center/',
		privacy: false
	},
	ChooseEmployee: {
		pathString: 'choose-employee/',
		privacy: true
	},
	ChooseServices: {
		pathString: 'choose-services/',
		privacy: true,
		childPaths: {
			SubmitServices: {
				pathString: 'submit-services/',
				privacy: true
			}
		}
	},
	ChooseDateTime: {
		pathString: 'choose-datetime/',
		privacy: true
	}
};

const pathsMethods = {};

// Function for constructing pathstrings from the sctructure above
// It doesn't check the 'pathString' consistency so please regard the following format
// pathString: 'nameofthepathstring/' with slash at the end
pathsMethods.createPathStrings = (paths, nested) => {
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
};

pathsMethods.createPathStrings(paths);

// A function to get the path of the specific page
pathsMethods.getPath = (paths, currentPath, path) => {
	if (!path) {
		return currentPath.replace(appRegExp, '') + paths.__app.pathString;
	}
	return currentPath.replace(appRegExp, '') + path.pathString;
};

// A function to create a Link that opens and closes the app
pathsMethods.getAppSwitch = (paths, currentPath) => {
	if (currentPath.match(appRegExp)) {
		return currentPath.replace(appRegExp, '');
	} else {
		return currentPath.replace(/\/$/, '') + paths.__app.pathString;
	}
};

// A function to create dynamic paths. 
// Takes in a path object: properties are - 'pathName', 'pathString', 'parentPath' and 'privacy'
pathsMethods.createPath = (paths, path) => {
	if (!path.pathString || !path.pathName) {
		throw new Error('pathString, or pathName properties missing');
	}
	if (path.pathString.match(/ /) !== null) {
		throw new Error('pathString should not contain spaces');
	}
	if (path.pathString.match(/^(\w|\d|-|_)*\/$/) === null) {
		throw new Error('pathString should begin from a letter, number, \'-\', or \'_\' and end with one slash symbol');
	}
	let targetPath = { 
		pathString: path.pathString,
		privacy: path.hasOwnProperty('privacy') ? path.privacy : true
	}
	// 'hasOwnProperty' because the 'parentPath' itself can be undefined
	if (!path.hasOwnProperty('parentPath')) {
		paths[path.pathName] = targetPath;
	} else if (path.hasOwnProperty('parentPath') && !path.parentPath) {
		throw new Error('Specified parentPath not found');
	} else {
		// createPath's recursive function to search a parentPath inside the paths object
		// In every path that has childPaths it also searches the parentPath in them recursively calling itself 
		let pathsCrawler = function(paths, targetPath, pathName, parentPath) {
			for (let path in paths) {
				if (paths[path].pathString === parentPath.pathString) {
					paths[path].childPaths = paths[path].childPaths ? paths[path].childPaths : {};
					paths[path].childPaths[pathName] = targetPath;
				} else if (paths[path].childPaths) {
					pathsCrawler(paths[path].childPaths, targetPath, pathName, parentPath);
				}
			}
		}
		pathsCrawler(paths, targetPath, path.pathName, path.parentPath);
	}
	pathsMethods.createPathStrings(paths);
};

// Export the paths and pathsMethods objects for testing purposes
export { pathsMethods };
export { paths };
// window.pathsMethods = pathsMethods;
// window.paths = paths;
// console.log(paths);

// Reducer, providing the paths object to the whole app
export default (state = paths, action) => {
	switch (action.type) {
		case GOT_EMPLOYEES: {
			let payload = action.payload;
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			for (let employee of payload) {
				let pathRecourse = 'employee' + employee.id;
				pathsMethods.createPath(newState, {
					pathName: pathRecourse,
					pathString: pathRecourse + '/',
					privacy: true,
					parentPath: newState.ChooseEmployee
				});
			}
			return newState;
		}
		case GOT_MAIN_SERVICES: {
			let payload = action.payload;
			let newState = JSON.stringify(state);
			newState = JSON.parse(newState);
			for (let service of payload) {
				let pathRecourse = 'service' + service.id;
				pathsMethods.createPath(newState, {
					pathName: pathRecourse,
					pathString: pathRecourse + '/',
					privacy: true,
					parentPath: newState.ChooseServices
				});
			}
			return newState;
		}
		default: {
			return state;
		}
	}
};