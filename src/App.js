import React from 'react';
import {Jumbotron, Container} from 'reactstrap';
import MediaQuery from 'react-responsive';
import DynamicCardDeckManager from './DynamicCardDeckManager';
import './App.css';

const cards = [
  {
    imageSource: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666',
    imageAltText: 'Card image cap',
    cardTitle: '1 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    imageSource: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666',
    imageAltText: 'Card image cap',
    cardTitle: '2 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    imageSource: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666',
    imageAltText: 'Card image cap',
    cardTitle: '3 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    imageSource: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666',
    imageAltText: 'Card image cap',
    cardTitle: '4 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    imageSource: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666',
    imageAltText: 'Card image cap',
    cardTitle: '5 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    imageSource: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666',
    imageAltText: 'Card image cap',
    cardTitle: '6 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    imageSource: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666',
    imageAltText: 'Card image cap',
    cardTitle: '7 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    imageSource: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666',
    imageAltText: 'Card image cap',
    cardTitle: '8 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    imageSource: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666',
    imageAltText: 'Card image cap',
    cardTitle: '9 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    imageSource: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666',
    imageAltText: 'Card image cap',
    cardTitle: '10 Card title',
    cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
];

export default () => (
  <div className="App">
    <Jumbotron>
        <h1 className="display-3">Welcome To My Hello World!</h1>
        <hr className="my-2" />
        <p className="lead">My name is Ryan Oldford. Welcome, and hello!</p>
    </Jumbotron>
    <Container>
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
