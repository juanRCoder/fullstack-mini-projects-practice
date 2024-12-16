export const gradeCelsius = (n: number): string => {
  return (n - 273.15).toFixed(1);
};

export const visibility = (n: number): string => {
  return (n / 1000).toFixed(1);
};

export const degWind = (n: number): string => {
  if (n <= 22.5 || n >= 337.5) {
    return "N"; // Norte
  } else if (n > 22.5 && n <= 67.5) {
    return "NE"; // Noreste
  } else if (n > 67.5 && n <= 112.5) {
    return "E"; // Este
  } else if (n > 112.5 && n <= 157.5) {
    return "SE"; // Sureste
  } else if (n > 157.5 && n <= 202.5) {
    return "S"; // Sur
  } else if (n > 202.5 && n <= 247.5) {
    return "SW"; // Suroeste
  } else if (n > 247.5 && n <= 292.5) {
    return "W"; // Oeste
  } else if (n > 292.5 && n <= 337.5) {
    return "NW"; // Noroeste
  } else {
    return "N/A";
  }
};

export const cloudiness = (n: number) => {
  if (n == 0) {
    return "Cielo despejado";
  } else if (n >= 1 && n <= 30) {
    return "Mayormente despejado";
  } else if (n > 30 && n <= 60) {
    return "Parcialemnte nublado";
  } else if (n > 60 && n <= 99) {
    return "Mayormente nublado";
  } else {
    return "Completamente nublado";
  }
};
