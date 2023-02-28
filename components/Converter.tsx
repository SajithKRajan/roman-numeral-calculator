import { Panel } from "primereact/panel";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { calculateRomanNumeric } from "../services/convertion.service";

export const ConverterComponent = () => {
  const [inputNumber, setInputNumber] = useState<number>(1);
  const [romanNumeral, setRomanNumeral] = useState<string>("I");

  /**
   * The method for handling input change and tigger convertion.
   * @param event
   */
  const onInputChange = async (event: InputNumberValueChangeEvent) => {
    const value = event.value;
    if (value) {
      setInputNumber(value);
      const result = calculateRomanNumeric(value);
      setRomanNumeral(result);
    } else {
      setRomanNumeral("");
    }
  };

  return (
    <Panel header="Roman Numeral Calculator" className="col-12 md:col-6">
      <div className="flex flex-column gap-4">
        <div className="flex-auto">
          <label htmlFor="input-number" className="font-lignt block mb-2">
            Input Number
          </label>
          <InputNumber
            className="w-full"
            inputId="input-number"
            value={inputNumber}
            onValueChange={onInputChange}
            min={1}
            max={1000}
          />
          <small id="username-help">
            {"Press Enter \u2386 key to evaluate"}
          </small>
        </div>
        <div className="flex-auto">
          <label htmlFor="output" className="font-lignt block mb-2">
            Roman Numeral
          </label>
          <InputText
            role={"textbox"}
            className="w-full"
            id="output"
            value={romanNumeral}
            disabled={true}
          />
        </div>
      </div>
    </Panel>
  );
};
