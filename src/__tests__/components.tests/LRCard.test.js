import React from 'react';
import renderer from 'react-test-renderer';
import { LRCard } from '../../Components';
import { BrowserRouter } from 'react-router-dom';

describe('LRCard component', () => {
  it('Load without crashing', () => {
    const cmp = renderer.create(
      <BrowserRouter>
        <LRCard page="" item={{}} size="" />
      </BrowserRouter>,
    );
    expect(cmp).toMatchSnapshot();
  });
});
