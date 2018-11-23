import DynamicCardDeckManager from "./DynamicCardDeckManager";

const setup = () => {
  return [
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
}

describe('Tests', () => {
  it("renders correctly", () => {
    let cards = setup();
    const wrapper = shallow(
      <DynamicCardDeckManager cards={cards} deckSize={5} />
    );
    expect(wrapper).toMatchSnapshot();
  });

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
