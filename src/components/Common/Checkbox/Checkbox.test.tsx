import { render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
import { vitest } from "vitest";

describe("Checkbox", () => {
  const checkboxId = "checkboxId";
  const children = "children";
  const checked = true;
  const onChange = vitest.fn();

  beforeEach(() => {
    onChange.mockClear();
  });

  it("should render the Checkbox component", () => {
    render(
      <Checkbox checkboxId={checkboxId} checked={checked} onChange={onChange}>
        {children}
      </Checkbox>
    );

    const checkbox = screen.getByRole("checkbox", { hidden: true });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
    expect(checkbox).not.toBeDisabled();

    const label = screen.getByText(children);
    expect(label).toBeInTheDocument();
  });
});
