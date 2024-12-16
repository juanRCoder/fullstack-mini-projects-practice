import { propCopyToClipboard } from "../interfaces/interfaces";

/**
 * Mediante los metodos de google copiar el texto y
 * mostrar/desaparecer mensaje en un determinado tiempo
 */
export const copyToClipboard = async ({ color, setCopy }: propCopyToClipboard) => {
  try {
    await navigator.clipboard.writeText(color);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  } catch (err) {
    console.error("Error al copiar al portapapeles:", err);
  }
};

/**
 * Crear una lista de 9 colores monocromaticos en hexadecimal
 */
export const randomColorHexa = () => {
  const lista: string[] = [];
  const baseColor: string = Math.floor(Math.random() * 16)
    .toString(16)
    .toUpperCase();

  //Solo agregar 9 colores a la lista
  while (lista.length < 9) {
    const random1: string = Math.floor(Math.random() * 8).toString();
    const random2: string = Math.floor(Math.random() * 8).toString();
    const random3: string = Math.floor(Math.random() * 8).toString();
    const random4: string = Math.floor(Math.random() * 8).toString();

    const color = `#${baseColor}${baseColor}${random1}${random3}${random2}${random4}`;
    lista.push(color);
  }
  return lista;
};
