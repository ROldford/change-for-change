import DynamicCardDeck from "./DynamicCardDeck";

const cards = [{
  imageSource: 'https://www.countryflags.io/ca/flat/64.png',
  imageAltText: 'Card image cap',
  cardTitle: '1 Card title',
  cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
},
{
  imageSource: 'https://www.countryflags.io/ca/flat/64.png',
  imageAltText: 'Card image cap',
  cardTitle: '2 Card title',
  cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
},
{
  imageSource: 'https://www.countryflags.io/ca/flat/64.png',
  imageAltText: 'Flag: Canada',
  cardTitle: '3 Card title',
  cardText: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
}];

it("renders correctly", () => {
  const wrapper = shallow(
    <DynamicCardDeck cards={cards} deckSize=3 />
  );
  expect(wrapper).toMatchSnapshot();
});

it("renders blank cards when needed", () => {
  const wrapper = shallow(
    <DynamicCardDeck cards={cards} deckSize=5 />
  )
  const images = wrapper.find('Image');
  expect(images.length).toEqual(5);
  const placeholder_images = images.filterWhere((image) => {
    image.props().src === 'https://www.countryflags.io/aa/flat/64.png'
  });
  expect(placeholder_images.length).toEqual(2);
});
