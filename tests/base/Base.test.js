import React from "react";
import { newBase } from "../../src/base/nBase";

describe("App Base URL", () => {
  it("Should have production URL", () => {
    expect(newBase).toBe("https://api.ncreative.staging.bluegreensoft.com/v1/ncreative/");
  });
});