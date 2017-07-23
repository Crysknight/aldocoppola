import { paths } from './paths';
paths._testPath = {
	pathString: paths.app.pathString + '_test-path/'
};

describe('paths', () => {
	it('returns the wanted path concatenated with the page path', () => {
		expect(paths.getPath('/test/bauble.html/_appliance/', paths._testPath)).toBe('/test/bauble.html' + paths._testPath.pathString);
		expect(paths.getPath('/_appliance/new-too', paths._testPath)).toBe(paths._testPath.pathString);
	});
	it('getAppSwitch works well', () => {
		expect(paths.getAppSwitch('/test/bauble.html')).toBe('/test/bauble.html' + paths.app.pathString);
		expect(paths.getAppSwitch('/test/bauble.html' + paths.app.pathString)).toBe('/test/bauble.html');
		expect(paths.getAppSwitch('/')).toBe(paths.app.pathString);
	});
});