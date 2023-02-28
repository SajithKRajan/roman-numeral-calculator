// Creating map to store the Roman numeral symbols and their corresponding values.
const romanToIntStore = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

/**
 * The method for converting an integer number to roman numeric.
 * @param inputNumber
 * @returns - The roman numeric string.
 */
export const calculateRomanNumeric = (inputNumber: number): string => {
  const romanToIntStoreIterator = Object.entries(romanToIntStore);
  let romanNumeric = "";
  /* Iterating through the map and repeatedly adds the corresponding symbols to the result string, 
   while subtracting the corresponding value from the input integer until the input integer becomes zero. */
  for (const romanToIntStoreItem of romanToIntStoreIterator) {
    while (inputNumber >= romanToIntStoreItem[1]) {
      romanNumeric += romanToIntStoreItem[0];
      inputNumber -= romanToIntStoreItem[1];
    }
  }
  return romanNumeric;
};
