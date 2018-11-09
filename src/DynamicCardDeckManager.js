// Generate an appropriate number of decks for the current window size

import React from 'react';
import { chunk } from 'lodash';
import DynamicCardDeck from './DynamicCardDeck';

export default class DynamicCardDeckManager extends React.Component {
  createDeck(cards) {
    return <DynamicCardDeck cards={cards}/>;
  }

  createDecks(cards, deckSize) {
    const chunkedCards = chunk(cards, deckSize);
    console.log(chunkedCards)
    return chunkedCards.map(this.createDeck)
  }

  render() {
    return (
      <div>
        {this.createDecks(this.props.cards, this.props.deckSize)}
      </div>
    );
  }
}
