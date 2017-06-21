import React from 'react';
import renderer from 'react-test-renderer';
import Label from './Label';

describe('Label', () => {
    test('shows red asterisk when required is enabled', () => {
        const tree = renderer.create(<Label htmlFor="test" label="test" required />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});