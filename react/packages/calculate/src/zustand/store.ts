import { create } from "zustand";

interface Store {
  num: number;
  num2: number;
  generateNewNumbers: () => void;
  operator: string;
  handleOperator: (op: string) => void
  isCorrect: number
  setIsCorrect: (num: number) => void
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
  handleOperator: (op: string) => set({operator: op}),

  isCorrect: 2,
  setIsCorrect: (num: number) => set({isCorrect: num})
}));