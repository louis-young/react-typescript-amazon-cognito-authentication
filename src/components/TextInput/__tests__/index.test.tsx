import { render, screen } from "@testing-library/react";
import { TextInput } from "..";

describe("<TextInput />", () => {
  const defaultType = "";
  const defaultName = "";
  const defaultId = "";
  const defaultValue = "";
  const defaultOnValueChange = vi.fn();

  it("renders the input", () => {
    render(
      <TextInput
        type={defaultType}
        name={defaultName}
        id={defaultId}
        value={defaultValue}
        onValueChange={defaultOnValueChange}
      />,
    );

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });
});
