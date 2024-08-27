import { propResetInputs } from "../interfaces/interfaces";

/**
 * Reseteo de estados
 */
export const resetInputs = ({
  setBill,
  setPeople,
  setCustom,
  setStatusPeople,
  setTotalForPerson,
  setTipAmountForPerson,
}: propResetInputs) => {
  setBill("");
  setPeople("");
  setCustom("");
  setStatusPeople(false);
  setTotalForPerson(0);
  setTipAmountForPerson(0);
};
