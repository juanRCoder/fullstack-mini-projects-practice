export interface propsBill {
  bill: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface propSelectTip {
  custom: string;
  Calculator: (n: number) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface propNumberPeople {
  statusPeople: boolean;
  people: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface propResults {
  tipAmountForPerson: number;
  totalForPerson: number;
  resetInputs: () => void;
}

export interface propCalculator {
  tip: number;
  bill: string;
  people: string;
  setTotalForPerson: (value: number) => void;
  setTipAmountForPerson: (value: number) => void;
  setStatusPeople: (value: boolean) => void;
}

export interface propResetInputs {
  setBill: (value: string) => void;
  setPeople: (value: string) => void;
  setCustom: (value: string) => void;
  setStatusPeople: (value: boolean) => void;
  setTotalForPerson: (value: number) => void;
  setTipAmountForPerson: (value: number) => void;
}
