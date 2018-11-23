import React from 'react';
import {Jumbotron, Container} from 'reactstrap';
import MediaQuery from 'react-responsive';
import DynamicCardDeckManager from './DynamicCardDeckManager';
import './App.css';

const cards = [
  {
    key: 1,
    data: {imageSource: 'https://www.countryflags.io/ca/flat/64.png',
    imageAltText: 'Card image cap',
    cardTitle: '1 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
  },
  {
    key: 2,
    data: {imageSource: 'https://www.countryflags.io/aa/flat/64.png',
    imageAltText: 'Card image cap',
    cardTitle: '2 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
  },
  {
    key: 3,
    data: {imageSource: 'https://www.countryflags.io/ca/flat/64.png',
    imageAltText: 'Flag: Canada',
    cardTitle: '3 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
  },
  {
    key: 4,
    data: {imageSource: 'https://www.countryflags.io/ca/flat/64.png',
    imageAltText: 'Flag: Canada',
    cardTitle: '4 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
  },
  {
    key: 5,
    data: {imageSource: 'https://www.countryflags.io/ca/flat/64.png',
    imageAltText: 'Flag: Canada',
    cardTitle: '5 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
  },
  {
    key: 6,
    data: {imageSource: 'https://www.countryflags.io/ca/flat/64.png',
    imageAltText: 'Flag: Canada',
    cardTitle: '6 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
  },
  {
    key: 7,
    data: {imageSource: 'https://www.countryflags.io/ca/flat/64.png',
    imageAltText: 'Flag: Canada',
    cardTitle: '7 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
  },
  {
    key: 8,
    data: {imageSource: 'https://www.countryflags.io/ca/flat/64.png',
    imageAltText: 'Flag: Canada',
    cardTitle: '8 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
  },
  {
    key: 9,
    data: {imageSource: 'https://www.countryflags.io/ca/flat/64.png',
    imageAltText: 'Flag: Canada',
    cardTitle: '9 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
  },
  {
    key: 10,
    data: {imageSource: 'https://www.countryflags.io/ca/flat/64.png',
    imageAltText: 'Flag: Canada',
    cardTitle: '10 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
  },
];

export default () => (
  <div className="App">
    <Jumbotron className="text-center">
        <h1 className="display-3 text-justify">Welcome To My Hello World!</h1>
        <hr className="my-2" />
        <p className="lead">My name is Ryan Oldford. Welcome, and hello!</p>
    </Jumbotron>
    <Container className="text-center">
      <MediaQuery maxWidth={767.98}>
        <DynamicCardDeckManager cards={cards} deckSize={2} />
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={991.98}>
        <DynamicCardDeckManager cards={cards} deckSize={3} />
      </MediaQuery>
      <MediaQuery minWidth={992} maxWidth={1199.98}>
        <DynamicCardDeckManager cards={cards} deckSize={4} />
      </MediaQuery>
      <MediaQuery minWidth={1200}>
        <DynamicCardDeckManager cards={cards} deckSize={5} />
      </MediaQuery>
    </Container>
  </div>
);
