import React from "react";
import renderer from "react-test-renderer";

import PageLoader from "./PageLoader";

describe("PageLoader", () => {

  it("renders without props", () => {
    const tree = renderer.create(<PageLoader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
