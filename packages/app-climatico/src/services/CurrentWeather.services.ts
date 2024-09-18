export const currentWeather = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { data: null, error: true };
    }
    const data = await response.json();
    return { data, error: false };
  } catch (e) {
    console.log("No se pudo solicitar los datos del clima actual: ", e);
    throw e;
  }
};

export const forecastWeather = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { data: null, error: true };
    }
    const data = await response.json();
    return { data, error: false };
  } catch (e) {
    console.log("No se pudo solicitar los datos del clima actual: ", e);
    throw e;
  }
};

export const getCity = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { data: null, error: true };
    }
    const data = await response.json();
    return { data: data.city , error: false };
  } catch (e) {
    console.log("No se pudo solicitar los datos del clima actual: ", e);
    throw e;
  }
};
