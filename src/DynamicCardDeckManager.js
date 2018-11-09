// Generate an appropriate number of decks for the current window size

import React from 'react';
import { chunk } from 'lodash';
import DynamicCardDeck from './DynamicCardDeck';

export default class DynamicCardDeckManager extends React.Component {
  createDeck(cards, deckSize) {
    return <DynamicCardDeck cards={cards} deckSize={deckSize} />;
  }

  createDecks(cards, deckSize) {
    const chunkedCards = chunk(cards, deckSize);
    console.log(chunkedCards)
    return chunkedCards.map((chunk) => {return this.createDeck(chunk, deckSize)})
  }

  render() {
    return (
      <div>
        {this.createDecks(this.props.cards, this.props.deckSize)}
      </div>
    );
  }
}
