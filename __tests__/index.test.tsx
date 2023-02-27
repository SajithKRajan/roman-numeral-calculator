import { fireEvent, render, screen } from "@testing-library/react";
import Home from "@/pages/index";

let getByRole: any;

describe("Home", () => {
  beforeEach(() => {
    const renderObj = render(<Home />);
    getByRole = renderObj.getByRole;
  });

  it("renders a panel with heading", () => {
    const heading = screen.getByText(/Roman Numeral Calculator/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders 2 text boxed and output text box is disabled", () => {
    const inputTextBox = screen.getByLabelText("Input Number").closest("input");
    expect(inputTextBox).toBeInTheDocument();
    expect(inputTextBox?.getAttribute("disabled")).toBeNull();
    const outputTextBox = screen
      .getByLabelText("Roman Numeral")
      .closest("input");
    expect(outputTextBox).toBeInTheDocument();
    expect(outputTextBox?.getAttribute("disabled")).toBe("");
  });

  it("The first text box should be number type and second one shoul text type", () => {
    const inputTextBox = screen.getByLabelText("Input Number").closest("input");
    expect(inputTextBox).toBeInTheDocument();
    expect(inputTextBox?.getAttribute("inputmode")).toBe("numeric");
    const outputTextBox = screen
      .getByLabelText("Roman Numeral")
      .closest("input");
    expect(outputTextBox).toBeInTheDocument();
    expect(outputTextBox?.getAttribute("inputmode")).toBeNull();
  });

  it("The default value should render properly", () => {
    const inputTextBox = screen.getByLabelText("Input Number").closest("input");
    expect(inputTextBox).toBeInTheDocument();
    expect(inputTextBox?.getAttribute("value")).toBe("1");
    const outputTextBox = screen
      .getByLabelText("Roman Numeral")
      .closest("input");
    expect(outputTextBox).toBeInTheDocument();
    expect(outputTextBox?.getAttribute("value")).toBe("I");
  });

  it("The range for the input value should be 1-1000", () => {
    const inputTextBox = getByRole("spinbutton");
    expect(inputTextBox?.getAttribute("min")).toBe("1");
    expect(inputTextBox?.getAttribute("max")).toBe("1000");
    fireEvent.change(inputTextBox, {
      target: { value: "0" },
    });
    fireEvent.blur(inputTextBox, {});
    expect(inputTextBox?.getAttribute("value")).toBe("1");

    fireEvent.change(inputTextBox, {
      target: { value: "1001" },
    });
    fireEvent.blur(inputTextBox, {});
    expect(inputTextBox?.getAttribute("value")).toBe("1,000");
  });
});
