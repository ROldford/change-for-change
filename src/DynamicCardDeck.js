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
      imageSource: 'https://www.countryflags.io/aa/flat/64.png',
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
      <CardDeck className="my-2">
        {this.createCards(this.props.cards)}
      </CardDeck>
    );
  }
};

DynamicCardDeck.propTypes = {
  cards: PropTypes.shape({
    cardTitle: PropTypes.string,
    cardText: PropTypes.string,
    imageSource: PropTypes.string,
    imageAltText: PropTypes.string
  }),
  deckSize: PropTypes.number.isRequired
}
