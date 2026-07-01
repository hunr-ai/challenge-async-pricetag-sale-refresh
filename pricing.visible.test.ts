import { discountLabel } from "../src/pricing";

describe("discountLabel (visible)", () => {
  it("formats a straightforward discount as -NN%", () => {
    expect(discountLabel(1000, 750)).toBe("-25%");
  });

  it("rounds percentages instead of truncating", () => {
    expect(discountLabel(1000, 675)).toBe("-33%");
  });

  it("returns null when there is no usable sale", () => {
    expect(discountLabel(1000)).toBeNull();
    expect(discountLabel(1000, 1000)).toBeNull();
    expect(discountLabel(1000, 1200)).toBeNull();
    expect(discountLabel(1000, -1)).toBeNull();
  });
});
