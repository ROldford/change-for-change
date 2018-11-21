import CustomCard from "./CustomCard";

it("renders correctly", () => {
  const data = {
    cardTitle: "Test Card",
    cardText: "Test card text goes here",
    imageSource: "./testdata/placeholder.png",
    imageAltText: "Test alt text"
  }
  const wrapper = shallow(
    <CustomCard data={data} />
  );
  expect(wrapper).toMatchSnapshot();
});
