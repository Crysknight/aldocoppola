import { pathsMethods } from './paths';
import { paths } from './paths';
paths._testPath = {
	pathString: paths.__app.pathString + '_test-path/',
	finished: true,
	privacy: true
};
paths._dummyPath = {
	pathString: paths.__app.pathString + '_dummy-path/',
	finished: true,
	privacy: true
};

describe('paths', () => {


	it('returns the wanted path concatenated with the page path', () => {

		expect(pathsMethods.getPath(paths, '/test/bauble.html' + paths.__app.pathString, paths._testPath))
			.toBe('/test/bauble.html' + paths._testPath.pathString);

		expect(pathsMethods.getPath(paths, paths._dummyPath.pathString, paths._testPath))
			.toBe(paths._testPath.pathString);

	});


	it('returns the app root path if the path specified is missing', () => {

		expect(pathsMethods.getPath(paths, paths.__app.pathString, paths._missingPath)).toBe(paths.__app.pathString);

	});


	it('getAppSwitch works well', () => {

		expect(pathsMethods.getAppSwitch(paths, '/test/bauble.html'))
			.toBe('/test/bauble.html' + paths.__app.pathString);

		expect(pathsMethods.getAppSwitch(paths, '/cry/bauble.html' + paths.__app.pathString))
			.toBe('/cry/bauble.html');

		expect(pathsMethods.getAppSwitch(paths, '/'))
			.toBe(paths.__app.pathString);

	});


	it('createPath throws an error when pathString, or pathName are missing', () => {

		let errorMessage = 'pathString, or pathName properties missing';

		expect(() => pathsMethods.createPath(paths, { privacy: true }))
			.toThrowError(errorMessage);

		expect(() => pathsMethods.createPath(paths, { privacy: true, pathString: 'hello/' }))
			.toThrowError(errorMessage);

		expect(() => pathsMethods.createPath(paths, { privacy: true, pathName: 'hello' }))
			.toThrowError(errorMessage);

	});


	it('createPath throws an error when pathString contains spaces', () => {

		expect(() => pathsMethods.createPath(paths, { privacy: true, pathName: 'hello', pathString: 'he llo/' }))
			.toThrowError('pathString should not contain spaces');

	});


	it('createPath throws an error when pathString has wrong format', () => {

		expect(() => pathsMethods.createPath(paths, { privacy: true, pathName: 'hello', pathString: '/hello/' }))
			.toThrowError('pathString should begin from a letter, number, \'-\', or \'_\' and end with one slash symbol');

		expect(() => pathsMethods.createPath(paths, { privacy: true, pathName: 'hello', pathString: 'hello' }))
			.toThrowError('pathString should begin from a letter, number, \'-\', or \'_\' and end with one slash symbol');

		expect(() => pathsMethods.createPath(paths, { privacy: true, pathName: 'hello', pathString: 'hello//' }))
			.toThrowError('pathString should begin from a letter, number, \'-\', or \'_\' and end with one slash symbol');

	});


	it('createPath properly creates paths', () => {

		let checkingPaths = JSON.stringify(paths);
		let wantedPaths = JSON.parse(checkingPaths);
		checkingPaths = JSON.parse(checkingPaths);
		let levelOnePathString = '_level-one/';
		wantedPaths.__createdTestPath = {
			pathString: paths.__app.pathString + levelOnePathString,
			privacy: true,
			finished: true
		};
		pathsMethods.createPath(checkingPaths, {
			pathName: '__createdTestPath',
			pathString: levelOnePathString,
			privacy: true
		});

		expect(checkingPaths).toMatchObject(wantedPaths);

		let levelTwoPathString = '_level-two/';
		wantedPaths.__createdTestPath.childPaths = {
			__createdLevelTwoTestPath: {
				pathString: wantedPaths.__createdTestPath.pathString + levelTwoPathString,
				privacy: true,
				finished: true
			}
		};
		pathsMethods.createPath(checkingPaths, {
			pathName: '__createdLevelTwoTestPath',
			pathString: levelTwoPathString,
			parentPath: checkingPaths.__createdTestPath,
			privacy: true
		});

		expect(checkingPaths).toMatchObject(wantedPaths);

	});


	it('createPath assigns privacy: true to the created path with no privacy specified', () => {

		let checkingPaths = JSON.stringify(paths);
		let wantedPaths = JSON.parse(checkingPaths);
		checkingPaths = JSON.parse(checkingPaths);
		let levelOnePathString = '_level-one/';
		wantedPaths.__createdTestPath = {
			pathString: paths.__app.pathString + levelOnePathString,
			privacy: true,
			finished: true
		};
		pathsMethods.createPath(checkingPaths, {
			pathName: '__createdTestPath',
			pathString: levelOnePathString
		});

		expect(checkingPaths).toMatchObject(wantedPaths);

	});


});