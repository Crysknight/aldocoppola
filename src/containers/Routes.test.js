import React from 'react';
import Routes from './Routes';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../reducers';

const locationRoot = {
	pathname: '/_appliance/'
};

const locationNested = {
	pathname: '/test/bauble.html/_appliance/'
};

const locationChild = {
	pathname: '/_appliance/new-too/'
};

const locationUnrelated = {
	pathname: '/test/bauble.html'
}

describe('Routes', () => {
	it('matches the snapshot on the rootpath', () => {
		const store = createStore(allReducers);
		const component = renderer.create(
			<Provider store={store}>
				<MemoryRouter initialEntries={[ '/_appliance/' ]}>
					<Routes location={locationRoot} />
				</MemoryRouter>
			</Provider>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('matches the snapshot on the nested path', () => {
		const store = createStore(allReducers);
		const component = renderer.create(
			<Provider store={store}>
				<MemoryRouter initialEntries={[ '/test/bauble.html/_appliance/' ]}>
					<Routes location={locationNested} />
				</MemoryRouter>
			</Provider>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('child path of the app matches the snapshot on the rootpath', () => {
		const store = createStore(allReducers);
		const component = renderer.create(
			<Provider store={store}>
				<MemoryRouter initialEntries={[ '/_appliance/new-too/' ]}>
					<Routes location={locationChild} />
				</MemoryRouter>
			</Provider>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('doesn\'t render the app everywhere', () => {
		const store = createStore(allReducers);
		const component = renderer.create(
			<Provider store={store}>
				<MemoryRouter initialEntries={[ '/test/bauble.html' ]}>
					<Routes location={locationUnrelated} />
				</MemoryRouter>
			</Provider>
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

});