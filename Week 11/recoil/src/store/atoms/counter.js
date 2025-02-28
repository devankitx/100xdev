import { atom } from "recoil";

export const counterAtom = atom({
  key: "counterState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value
});