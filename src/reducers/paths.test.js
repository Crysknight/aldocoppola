import { pathsMethods } from './paths';
import { paths } from './paths';
paths._testPath = {
	pathString: paths.__app.pathString + '_test-path/'
};
paths._dummyPath = {
	pathString: paths.__app.pathString + '_dummy-path/'
};

describe('paths', () => {
	it('returns the wanted path concatenated with the page path', () => {
		expect(pathsMethods.getPath(paths, '/test/bauble.html' + paths.__app.pathString, paths._testPath)).toBe('/test/bauble.html' + paths._testPath.pathString);
		expect(pathsMethods.getPath(paths, paths._dummyPath.pathString, paths._testPath)).toBe(paths._testPath.pathString);
	});
	it('returns the app root path if the path specified is missing', () => {
		expect(pathsMethods.getPath(paths, paths.__app.pathString, paths._missingPath)).toBe(paths.__app.pathString);
	});
	it('getAppSwitch works well', () => {
		expect(pathsMethods.getAppSwitch(paths, '/test/bauble.html')).toBe('/test/bauble.html' + paths.__app.pathString);
		expect(pathsMethods.getAppSwitch(paths, '/cry/bauble.html' + paths.__app.pathString)).toBe('/cry/bauble.html');
		expect(pathsMethods.getAppSwitch(paths, '/')).toBe(paths.__app.pathString);
	});
});