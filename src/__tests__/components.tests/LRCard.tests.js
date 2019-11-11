import React from 'react';
import renderer from 'react-test-renderer';
import { LRCard } from '../../Components';

describe('LRCard component', () => {
  it('Load without crashing', () => {
    const cmp = renderer.create(<LRCard page="" item={{}} size="" />);
    expect(cmp).toMatchSnapshot();
  });
});
