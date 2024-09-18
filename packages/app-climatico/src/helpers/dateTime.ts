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
  // Fecha
  const date = new Date();
  const dayMonth = date.getDate();
  const month = date.getMonth();
  const dayWeek = date.getDay();
  // ampm
  const dateHour = date.toLocaleString().split(' ')[2]

  return {
    dayMonth: dayMonth < 10 ? `0${dayMonth}` : dayMonth.toString(),
    month: months[month],
    dayWeek: daysOfWeek[dayWeek],
    dateHour,
  };
};

export const transformTime = (date: string) => {
  // Fecha
  const datetime = date.split(" ")[0];
  const [year, month, day] = datetime.split("-").map(Number);
  const newDate = new Date(year, month - 1, day);
  const dayWeek = newDate.getDay();
  // Hora
  const dateHour = date.split(" ")[1];
  const [hour, minute] = dateHour.split(":").map(Number);
  const formatHour = hour % 12 || 12;
  const ampm = hour >= 12 ? "PM" : "AM";
  const newHour = formatHour < 10 ? `0${formatHour}` : formatHour.toString();
  
  return {
    dayMonth: day < 10 ? `0${day}` : day.toString(),
    month: months[month - 1],
    dayWeek: daysOfWeek[dayWeek],
    ampm,
    hour: newHour,
    minute: minute < 10 ? `0${minute}` : minute.toString(),
  };
};
