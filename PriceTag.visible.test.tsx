import { render, screen } from "@testing-library/react-native";

import { PriceTag } from "../src/PriceTag";

describe("PriceTag (visible)", () => {
  it("shows sale price and discount label when on sale", () => {
    render(<PriceTag price={1000} salePrice={750} />);
    expect(screen.getByTestId("price")).toHaveTextContent("$7.50");
    expect(screen.getByTestId("discount")).toHaveTextContent("-25%");
  });

  it("shows regular price and no badge when not on sale", () => {
    render(<PriceTag price={1000} salePrice={1000} />);
    expect(screen.getByTestId("price")).toHaveTextContent("$10.00");
    expect(screen.queryByTestId("discount")).toBeNull();
  });
});
