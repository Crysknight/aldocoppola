// Basis of all widget paths (after this everything is widget)
const appPath = '/_appliance';

// Object with paths used by the app
const paths = {
	app: {
		pathString: '/',
		title: 'Выбрать центр красоты'
	},
	newToo: {
		pathString: '/new-too/',
		title: 'New Too'
	}
};

// Concatenating the paths with the basis
for (let path in paths) {
	paths[path].pathString = appPath + paths[path].pathString;
}

// A function to get the path of the parent page
paths.getNest = function (currentPath) {
	return currentPath.replace(new RegExp(this.app.pathString + '(.*)'), this.app.pathString);
};

// A function to get the path of the specific page
paths.getPath = function (currentPath, path) {
	return currentPath.replace(new RegExp(this.app.pathString + '(.*)'), path);
};

// Export the paths object for testing purposes
export { paths };

// DUE TO THE PRESENCE OF THE FUNCTIONS IN THIS REDUCER ONE SHOULD NOT MUTATE THE STATE OF IT,
// OTHERWISE THE FUNCTIONS WILL BE OBLITERATED, AND THE APP WON'T WORK

// Reducer, providing the paths object to the whole app
export default (state = paths, action) => {
	return state;
};