// Makes a single deck given a variable set of cards

import React from 'react';
import { CardDeck } from 'reactstrap';
import CustomCard from './CustomCard';

export default class DynamicCardDeck extends React.Component {
  createCard(data) {
    return <CustomCard data={data} />;
  }

  createBlankCard() {
    const blankCardData = {
      imageSource: 'https://via.placeholder.com/318x270/FFFFFF/FFFFFF',
      imageAltText: '',
      cardTitle: '',
      cardText: ''
    };
    return <CustomCard data={blankCardData} />;
  }

  createCards(cards) {
    return cards.map(this.createCard);
  }

  render() {
    let cards = this.props.cards;
    while (cards.length < this.props.deckSize) {
      let blankCard = this.createBlankCard();
      cards.push(blankCard);
    }
    return (
      <CardDeck>
        {this.createCards(this.props.cards)}
      </CardDeck>
    );
  }
};
