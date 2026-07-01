import { render, screen } from "@testing-library/react-native";

import { PriceTag } from "../src/PriceTag";

describe("PriceTag (visible)", () => {
  it("shows the discount label when an item is on sale", () => {
    render(<PriceTag price={1000} salePrice={750} />);
    expect(screen.getByTestId("discount")).toHaveTextContent("-25%");
  });
});
