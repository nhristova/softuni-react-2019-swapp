import React from 'react';
import renderer from 'react-test-renderer';
import { TBCardEpisode } from '../../Components';
import { BrowserRouter } from 'react-router-dom';

describe('TBCardEpisode component', () => {
  it('Load without crashing', () => {
    const episodeMock = {
      id: 'films.1',
      title: 'A New Hope',
      image: 'https://m.media-amazon.com/images/I/81r+LN-YReL._SS500_.jpg',
      openingCrawl: 'It is a period of civil war...',
    };

    const cmp = renderer.create(
      <BrowserRouter>
        <TBCardEpisode episode={episodeMock} />
      </BrowserRouter>,
    );

    expect(cmp).toMatchSnapshot();
  });
});
