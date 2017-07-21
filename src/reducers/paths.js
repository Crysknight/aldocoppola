// Basis of all widget paths (after this everything is widget)
const appPath = '/_appliance';

// Object with paths used by the app
const paths = {
	app: '/',
	newToo: '/new-too/'
};

// Concatenating the paths with the basis
for (let path in paths) {
	paths[path] = appPath + paths[path];
}

// A function to get the path of the parent page
paths.getNest = function (currentPath) {
	return currentPath.replace(this.app, '');
};

// A function to get the path of the specific page
paths.getPath = function (currentPath, path) {
	return currentPath.replace(this.app, path);
};

// window.paths = paths;

// Reducer, providing the paths object to the whole app
export default (state = paths, action) => {
	return state;
};