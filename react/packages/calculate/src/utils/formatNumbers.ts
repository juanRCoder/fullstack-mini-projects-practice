export const formatNumber = (num: number) => {
  const newNumber = String(num).length < 2 ? `0${num}` : `${num}`
  return newNumber
}