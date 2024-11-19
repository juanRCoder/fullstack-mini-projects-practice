import { create } from "zustand";

interface Store {
  num: number;
  num2: number;
  operator: string;
  generateNewNumbers: () => void;
  handleOperator: (op: string) => void
}

export const useStore = create<Store>((set) => ({
  // NUMEROS ALEATORIOS INICIALES
  num: Math.floor(Math.random() * 46) + 5,
  num2: Math.floor(Math.random() * 46) + 5,

  // GENERAR NUEVOS NUMEROS ALEATORIOS EN NUM Y NUM2
  generateNewNumbers: () => set(() => ({
    num: Math.floor(Math.random() * 46) + 5,
    num2: Math.floor(Math.random() * 46) + 5,
  })),
  
  // MANEJADOR DE OPERADORES
  operator: 'sumar',
  handleOperator: (op: string) => set({operator: op})
}));