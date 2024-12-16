import { useEffect, useState } from "react"
import { useStore } from "../../store/productsStore";
import OperationProducts from "./OperationProducts";

export type propAddCartProducts = {
  nameProduct: string;
  priceProduct: number;
  imageProduct: string;
}

export default function AddToCart(
  { nameProduct, priceProduct, imageProduct }: propAddCartProducts) {
  // Instancias de estado global 
  const resetCount = useStore((state) => state.resetCount)

  const [count, setCount] = useState<number>(0);
  const [view, setView] = useState<boolean>(true);

  useEffect(() => {
    setCount(0)
  }, [resetCount])

  return (
    <>
      <div
        onMouseLeave={() => setView(true)}
        className="sm:py-[8px] sm:px-6 flex justify-evenly items-center gap-8 px-6 py-3 rounded-full bg-orange-500 text-white cursor-pointer"
      >
        <OperationProducts
          count={count}
          setCount={setCount}
          nameProduct={nameProduct}
          priceProduct={priceProduct}
          imageProduct={imageProduct}
        />
        
        {view && (
          <span
            onClick={() => setView(false)}
            className="px-3 top-0 left-0 flex justify-center items-center gap-2 absolute w-full h-full bg-white text-black outline outline-1 outline-orange-500 rounded-full cursor-pointer"
          >
            <img
              src="/icons/icon-add-to-cart.svg"
              alt="icon add-to-cart"
              loading="eager"
              height={20}
              width={20}
            />
            <p className="sm:text-sm text-orange-950 hover:text-orange-500 text-lg font-semibold">Add to Card</p>
          </span>
        )}
      </div>
    </>
  )
}
