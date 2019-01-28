import { shallow, mount } from "enzyme";

import HomePage from "../../pages/";
import MediaCard from "../../components/Cards/MediaCard";
import sinon from "sinon";

describe("index page", () => {
  var wrapper, props;
  beforeEach(async () => {
    var getContentStub = sinon.stub();
    getContentStub
      .withArgs("homePage")
      .returns([{ infoCardImages: ["someImageSource"] }]);
    getContentStub
      .withArgs("popularVisas")
      .returns([
        { imageUrl: "image1", title: "first", description: "description1" },
        { imageUrl: "image2", title: "second", description: "description2" },
        { imageUrl: "image3", title: "third", description: "description3" }
      ]);
    const flameLinkService = {
      getContent: getContentStub
    };
    const req = {};
    props = await HomePage.getInitialProps({ req, flameLinkService });
    props.flameLinkService = flameLinkService;
    wrapper = shallow(<HomePage {...props} />);
  });

  it("should render an index page", () => {
    expect(wrapper.length).not.toBe(0);
  });

  it("should render with results and popular visas", () => {
    const mountedHomePage = mount(<HomePage {...props} />);
    const mediaCards = mountedHomePage.find(MediaCard);
    expect(mediaCards.length).toBe(3);
    expect(mediaCards.at(0).props()).toEqual({
      imageUrl: "image1",
      title: "first",
      text: "description1"
    });
    expect(mediaCards.at(1).props()).toEqual({
      imageUrl: "image2",
      title: "second",
      text: "description2"
    });
    expect(mediaCards.at(2).props()).toEqual({
      imageUrl: "image3",
      title: "third",
      text: "description3"
    });
  });

  it("should render the 3 most popular visas", () => {
    const mountedHomePage = mount(<HomePage {...props} />);
  });
});
