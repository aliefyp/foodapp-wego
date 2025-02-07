import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Container from "./Container";

describe("Container", () => {
  it("should render successfully", () => {
    const { getByText } = render(<Container>Test</Container>);
    expect(getByText("Test")).toBeInTheDocument();
  });
});