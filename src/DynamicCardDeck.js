// Makes a single deck given a variable set of cards

import React from 'react';
import { CardDeck } from 'reactstrap';
import CustomCard from './CustomCard';

export default class DynamicCardDeck extends React.Component {
  createCard(data) {
    return <CustomCard data={data} />;
  }

  createCards(cards) {
    return cards.map(this.createCard);
  }

  render() {
    return (
      <CardDeck>
        {this.createCards(this.props.cards)}
      </CardDeck>
    );
  }
};
