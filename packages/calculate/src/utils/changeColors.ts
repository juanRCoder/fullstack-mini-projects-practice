export const changeColor = (isCorret: number, colorDefault?: string) => {
  const colorCustom = colorDefault ? colorDefault : "text-white";
  return isCorret == 1 ? "text-green-500" : (isCorret === 0 ? "text-red-500" : colorCustom)
}

export const changeBorder = (isCorret: number, borderDefault?: string) => {
  const borderCustom = borderDefault ? borderDefault : "border-white";
  return isCorret == 1 ? "border-green-500" : (isCorret === 0 ? "border-red-500" : borderCustom )
}