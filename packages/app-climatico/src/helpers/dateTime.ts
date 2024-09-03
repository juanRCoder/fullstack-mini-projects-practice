const months: { [key: number]: string } = {
  0: "enero",
  1: "febrero",
  2: "marzo",
  3: "abril",
  4: "mayo",
  5: "junio",
  6: "julio",
  7: "agosto",
  8: "septiembre",
  9: "octubre",
  10: "noviembre",
  11: "diciembre",
};

const daysOfWeek: { [key: number]: string } = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado",
};

export const currentTime = () => {
  const date = new Date();
  const dayMonth = date.getDate();
  const month = date.getMonth();
  const dayWeek = date.getDay();
  return {
    dayMonth: dayMonth < 10 ? `0${dayMonth}` : dayMonth,
    month: months[month],
    dayWeek: daysOfWeek[dayWeek],
  };
};

export const transformTime = (date: string) => {
  const datetime = date.split(" ")[0];
  const dayWeek = Number(datetime.split("-")[2]);
  const month = Number(datetime.split("-")[1]);
  return {
    dayMonth: dayWeek < 10 ? `0${dayWeek}` : dayWeek,
    month: months[month],
    dayWeek: daysOfWeek[dayWeek - 1],
  };
};
