interface dataBluePrint {
  randomNumber: number;
  totalChances: number;
  remainingChances: number;
  difficulty: "Easy" | "Medium" | "Hard";
}

export const Data: dataBluePrint = {
  randomNumber: 10,
  totalChances: 10,
  remainingChances: 10,
  difficulty: "Medium",
};
