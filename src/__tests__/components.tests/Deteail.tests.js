import React from 'react';
import renderer from 'react-test-renderer';
import { Detail } from '../../Components';

describe('Detail component', () => {
  it('renders correctly', () => {
    const cmp = renderer.create(<Detail type="test type" value="test value" />);
    expect(cmp).toMatchSnapshot();
  });
});
