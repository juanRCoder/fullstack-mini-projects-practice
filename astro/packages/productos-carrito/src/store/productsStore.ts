import { create } from "zustand";

export interface ProductCart {
  name: string;
  price: number;
  img?: string;
  priceTotal: number;
  count: number;
}

export interface InterfaceStore {
  countProducts: number;
  setCountProducts: (count: number) => void;
  productCart: ProductCart[];
  setProductCart: (product: ProductCart) => void;
  totalPrices: number;
  seTtotalPrices: () => void;
  resetCount?: number | null; 
  totalProducts: () => void;
  deleteProductCart: (nameProduct: string) => void;
  resetCartOrder: () => void;
}

export const useStore = create<InterfaceStore>((set) => ({
  // Cantidad total de productos en el carrito
  countProducts: 0,
  setCountProducts: (newCount: number) => set((state) => (
    { countProducts: state.countProducts + newCount }
  )),
  // Manipulacion de agregado, eliminar productos en el carrito.
  productCart: [],
  setProductCart: (newProduct: ProductCart) => set((state) => {
      // buscar producto
      const findProduct = state.productCart.find((pr) => pr.name === newProduct.name);
      if (findProduct) {
        const countProduct = findProduct.count + newProduct.count;
        const deleteProduct = state.productCart.filter((pr) => pr.name !== newProduct.name);
        // sacar producto si llega a stock 0 del carrito
        if (countProduct <= 0) return { productCart: deleteProduct };
        // contar produtos y precio total de cada producto
        return {
          productCart: state.productCart.map((pr) =>
            pr.name === newProduct.name
              ? {
                  ...pr,
                  count: countProduct,
                  priceTotal: pr.priceTotal + (newProduct.count > 0 ? pr.price : -pr.price),
                }
              : pr )
        };
        // dejar el producto si no se esta llamando para cambiar
      } else return {
          productCart: [ ...state.productCart, newProduct ],
        };
  }),
  // Precio total de los productos
  totalPrices: 0,
  seTtotalPrices: () => set((state) => {
    const quantity = state.productCart.reduce((acml, pr) => acml + pr.priceTotal, 0);
    return {totalPrices: quantity}
  }),
  // Contador cantidad de productos
  totalProducts: () => set((state) => {
    return { countProducts: state.productCart.reduce((acml, pr) => acml + pr.count ,0)}
  }),
  // Eliminar productos del carrito y reiniciar contador
  resetCount: null,
  deleteProductCart: (nameProduct) => set((state) => {
    return { 
      productCart: state.productCart.filter((pr) => pr.name !== nameProduct),
      resetCount: state.resetCount === 0 ? 1 : 0,
    }
  }),
  resetCartOrder: () => set((state) => {
    return {
      productCart: [],
      resetCount: state.resetCount === 0 ? 1 : 0,
      countProducts: state.countProducts === 0 ? 1 : 0
    }
  })
}));
