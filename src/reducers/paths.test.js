import { paths } from './paths';

describe('reducers: paths', () => {
	it('returns the rootpath of the app properly', () => {
		expect(paths.getNest('/test/bauble.html/_appliance/new-too/add')).toBe('/test/bauble.html/_appliance/');
		expect(paths.getNest('/_appliance/new-too/add')).toBe('/_appliance/');
	});
	it('returns the wanted path concatenated with the page path', () => {
		paths._testPath = {
			pathString: paths.app + '_test-path/'
		};
		expect(paths.getPath('/test/bauble.html/_appliance/', paths._testPath.pathString)).toBe('/test/bauble.html' + paths._testPath.pathString);
		expect(paths.getPath('/_appliance/new-too', paths._testPath.pathString)).toBe(paths._testPath.pathString);
	});
});