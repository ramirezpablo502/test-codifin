import { render } from "@testing-library/react";
import NavbarComponent from "./navbar";

describe("<NavbarComponent />", () => {
  const makeWrapper = (newProps = {}) => {
    const defaultProps = {
      title: "",
    };
    const props = { ...defaultProps, ...newProps };
    const view = render(<NavbarComponent {...props} />);

    return { view, props };
  };

  test("Should render component", () => {
    const { view } = makeWrapper();
    const { container } = view;
    expect(container).toBeInTheDocument();
  });

  test("Should render title", () => {
    const { view } = makeWrapper({ title: "title-here" });
    const { getByText } = view;
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("title-here")).toBeInTheDocument();
  });
});
