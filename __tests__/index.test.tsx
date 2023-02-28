import { fireEvent, render, screen } from "@testing-library/react";
import Home from "@/pages/index";

const setup = () => render(<Home />);

describe("Home", () => {
  it("Should renders a panel with heading", () => {
    setup();
    const heading = screen.getByText(/Roman Numeral Calculator/i);
    expect(heading).toBeInTheDocument();
  });

  it("should renders 2 text boxed and output text box is disabled", () => {
    setup();
    const inputTextBox = screen.getByRole("spinbutton");
    expect(inputTextBox).toBeInTheDocument();
    expect(inputTextBox?.getAttribute("disabled")).toBeNull();
    const outputTextBox = screen.getByRole("textbox");
    expect(outputTextBox).toBeInTheDocument();
    expect(outputTextBox?.getAttribute("disabled")).toBe("");
  });

  it("Should be the type of first input box is numeric and ourput type with text", () => {
    setup();
    const inputTextBox = screen.getByRole("spinbutton");
    expect(inputTextBox).toBeInTheDocument();
    expect(inputTextBox?.getAttribute("inputmode")).toBe("numeric");
    const outputTextBox = screen.getByRole("textbox");
    expect(outputTextBox).toBeInTheDocument();
    expect(outputTextBox?.getAttribute("inputmode")).toBeNull();
  });

  it("should render the input and output with default value", () => {
    setup();
    const inputTextBox = screen.getByRole("spinbutton");
    expect(inputTextBox).toBeInTheDocument();
    expect(inputTextBox?.getAttribute("value")).toBe("1");
    const outputTextBox = screen.getByRole("textbox");
    expect(outputTextBox).toBeInTheDocument();
    expect(outputTextBox?.getAttribute("value")).toBe("I");
  });

  it("Should be the range for input between 1-1000", () => {
    setup();
    const inputTextBox = screen.getByRole("spinbutton");
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

  it("Should work convertion for blank input", () => {
    setup();
    const inputTextBox = screen.getByRole("spinbutton");
    const outputTextBox = screen.getByRole("textbox");
    fireEvent.change(inputTextBox, {
      target: { value: "" },
    });
    fireEvent.blur(inputTextBox, {});
    expect(outputTextBox?.getAttribute("value")).toBe("");
  });

  it("Should calculate roman numeric from input", () => {
    setup();
    const inputTextBox = screen.getByRole("spinbutton");
    const outputTextBox = screen.getByRole("textbox");
    fireEvent.change(inputTextBox, {
      target: { value: "5" },
    });
    fireEvent.blur(inputTextBox, {});
    expect(outputTextBox?.getAttribute("value")).toBe("V");
    fireEvent.change(inputTextBox, {
      target: { value: "256" },
    });
    fireEvent.blur(inputTextBox, {});
    expect(outputTextBox?.getAttribute("value")).toBe("CCLVI");
  });

  it("Should not allow the input values outside range 1-1000", () => {
    setup();
    const inputTextBox = screen.getByRole("spinbutton");
    const outputTextBox = screen.getByRole("textbox");
    fireEvent.change(inputTextBox, {
      target: { value: "0" },
    });
    fireEvent.blur(inputTextBox, {});
    expect(inputTextBox?.getAttribute("value")).toBe("1");
    expect(outputTextBox?.getAttribute("value")).toBe("I");
    fireEvent.change(inputTextBox, {
      target: { value: "1500" },
    });
    fireEvent.blur(inputTextBox, {});
    expect(inputTextBox?.getAttribute("value")).toBe("1,000");
    expect(outputTextBox?.getAttribute("value")).toBe("M");
  });

  it("Should allow the boundary values", () => {
    setup();
    const inputTextBox = screen.getByRole("spinbutton");
    const outputTextBox = screen.getByRole("textbox");
    fireEvent.change(inputTextBox, {
      target: { value: "1" },
    });
    fireEvent.blur(inputTextBox, {});
    expect(outputTextBox?.getAttribute("value")).toBe("I");
    fireEvent.change(inputTextBox, {
      target: { value: "1000" },
    });
    fireEvent.blur(inputTextBox, {});
    expect(outputTextBox?.getAttribute("value")).toBe("M");
  });
});
