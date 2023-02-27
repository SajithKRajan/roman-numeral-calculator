import { Panel } from "primereact/panel";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { useState } from "react";
import { InputText } from "primereact/inputtext";

export const ConverterComponent = () => {
  const [inputNumber, setInputNumber] = useState<number>(1);
  const [romanNumeral, setRomanNumeral] = useState<string>("I");

  /**
   * The method for handling input change and tigger convertion.
   * @param event
   */
  const onInputChange = (event: InputNumberValueChangeEvent) => {
    if (event.value) {
      setInputNumber(event.value);
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
        </div>
        <div className="flex-auto">
          <label htmlFor="output" className="font-lignt block mb-2">
            Roman Numeral
          </label>
          <InputText
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
