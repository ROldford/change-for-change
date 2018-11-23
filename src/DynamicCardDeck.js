// Makes a single deck given a variable set of cards

import React from 'react';
import PropTypes from 'prop-types';
import { CardDeck } from 'reactstrap';
import CustomCard from './CustomCard';

export default class DynamicCardDeck extends React.Component {
  createCard(card) {
    return <CustomCard key={card.key} data={card.data} />;
  }

  createBlankCard(key) {
    const blankCardData = {
      imageSource: 'https://www.countryflags.io/aa/flat/64.png',
      imageAltText: '',
      cardTitle: '',
      cardText: ''
    };
    return {
      key: key,
      data: blankCardData
    };
  }

  createCards(cards) {
    return cards.map(this.createCard);
  }

  render() {
    let cards = this.props.cards;
    while (cards.length < this.props.deckSize) {
      let cardCountdown = this.props.deckSize - cards.length;
      let cardKey = "blank {cardCountdown}";
      let blankCard = this.createBlankCard(cardKey);
      cards.push(blankCard);
    }
    return (
      <CardDeck className="my-2">
        {this.createCards(cards)}
      </CardDeck>
    );
  }
};

DynamicCardDeck.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.object.isRequired
    })
  ),
  deckSize: PropTypes.number.isRequired
};
