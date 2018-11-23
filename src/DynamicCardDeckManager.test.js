import DynamicCardDeckManager from "./DynamicCardDeckManager";

const setup = (cardsNeeded) => {
  let cards = [
    {
      key: 1,
      data: {
        imageSource: 'https://www.countryflags.io/ca/flat/64.png',
        imageAltText: 'Card image cap',
        cardTitle: '1 Card title',
        cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      }
    },
    {
      key: 2,
      data: {
        imageSource: 'https://www.countryflags.io/aa/flat/64.png',
        imageAltText: 'Card image cap',
        cardTitle: '2 Card title',
        cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      }
    },
    {
      key: 3,
      data: {
        imageSource: 'https://www.countryflags.io/ca/flat/64.png',
        imageAltText: 'Flag: Canada',
        cardTitle: '3 Card title',
        cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      }
    },
    {
      key: 4,
      data: {
        imageSource: 'https://www.countryflags.io/ca/flat/64.png',
        imageAltText: 'Flag: Canada',
        cardTitle: '4 Card title',
        cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      }
    },
    {
      key: 5,
      data: {
        imageSource: 'https://www.countryflags.io/ca/flat/64.png',
        imageAltText: 'Flag: Canada',
        cardTitle: '5 Card title',
        cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      }
    },
    {
      key: 6,
      data: {
        imageSource: 'https://www.countryflags.io/ca/flat/64.png',
        imageAltText: 'Flag: Canada',
        cardTitle: '6 Card title',
        cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      }
    },
    {
      key: 7,
      data: {
        imageSource: 'https://www.countryflags.io/ca/flat/64.png',
        imageAltText: 'Flag: Canada',
        cardTitle: '7 Card title',
        cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      }
    },
    {
      key: 8,
      data: {
        imageSource: 'https://www.countryflags.io/ca/flat/64.png',
        imageAltText: 'Flag: Canada',
        cardTitle: '8 Card title',
        cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      }
    },
    {
      key: 9,
      data: {
        imageSource: 'https://www.countryflags.io/ca/flat/64.png',
        imageAltText: 'Flag: Canada',
        cardTitle: '9 Card title',
        cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      }
    },
    {
      key: 10,
      data: {
        imageSource: 'https://www.countryflags.io/ca/flat/64.png',
        imageAltText: 'Flag: Canada',
        cardTitle: '10 Card title',
        cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
      }
    }
  ];
  if (cardsNeeded>=cards.length) {
    return cards;
  } else {
    return cards.slice(0, cardsNeeded);
  }
}

describe('Tests', () => {
  it("renders correctly", () => {
    let cards = setup(10);
    const wrapper = shallow(
      <DynamicCardDeckManager cards={cards} deckSize={5} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  const testDeckDivision = (totalCards, deckSize) => {
    let numberOfDecks = Math.ceil(totalCards/deckSize);
    let fullDecks = Math.floor(totalCards/deckSize);
    let cards = setup(totalCards);
    const wrapper = shallow(
      <DynamicCardDeckManager cards={cards} deckSize={deckSize} />
    );
    const foundDecks = wrapper.find('DynamicCardDeck');
    expect(foundDecks.length).toEqual(numberOfDecks);
    let deckSizes = [];
    foundDecks.forEach((deck) => {
      deckSizes.push(deck.props().cards.length);
    });
    expect(deckSizes.length).toEqual(numberOfDecks);
    expect(deckSizes.filter((x) => {return x == deckSize;}).length).toEqual(fullDecks);
    expect(deckSizes.reduce((acc, curr) => {return acc + curr;})).toEqual(totalCards);
  }

  // renders enough decks for all cards, all decks have same size
  it("renders enough decks when cards divide evenly", () => {
    testDeckDivision(10, 2);
    testDeckDivision(9, 3);
    testDeckDivision(8, 4);
    testDeckDivision(8, 2);
    testDeckDivision(6, 3);
    testDeckDivision(6, 2);
    testDeckDivision(5, 5);
  })

  it("renders enough decks when cards do not divide evenly", () => {
    testDeckDivision(10, 4);
    testDeckDivision(10, 3);
    testDeckDivision(9, 5);
    testDeckDivision(9, 4);
    testDeckDivision(9, 2);
    testDeckDivision(8, 5);
    testDeckDivision(8, 3);
    testDeckDivision(7, 5);
    testDeckDivision(7, 4);
    testDeckDivision(7, 3);
    testDeckDivision(7, 2);
    testDeckDivision(6, 5);
    testDeckDivision(6, 4);
    testDeckDivision(5, 4);
    testDeckDivision(5, 3);
    testDeckDivision(5, 2);
  })

  // it("renders blank cards when needed", () => {
  //   let cards = setup();
  //   const wrapper = shallow(
  //     <DynamicCardDeck cards={cards} deckSize={5} />
  //   )
  //   expect(wrapper).toMatchSnapshot();
  //   const foundCards = wrapper.find('CustomCard');
  //   expect(foundCards.length).toEqual(5);
  //   // const placeholderCards = foundCards.filterWhere((card) => {
  //   //   card.props().data.imageSource === 'https://www.countryflags.io/aa/flat/64.png'
  //   // });
  //   // expect(placeholderCards.length).toEqual(2);
  // });
})
