import { getAriaDescribedBy } from "@fluentui/react";

import getInitials from "../src/ts/name";

describe("Name Test Suite", () => {
  test("getInitials(John Smith)", () => {
    expect(getInitials("John Smith")).toBe("JS");
  });

  test("getInitials(Rene Valdes (Sample))", () => {
    expect(getInitials("Rene Valdes (Sample)")).toBe("RV");
  });

  test("getInitials(Susan Burk (sample))", () => {
    expect(getInitials("Susan Burk (sample)")).toBe("SB");
  });
});
