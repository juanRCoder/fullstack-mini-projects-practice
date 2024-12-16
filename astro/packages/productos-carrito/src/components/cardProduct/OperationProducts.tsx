import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { useStore } from "../../store/productsStore";

export type propAddCartProducts = {
  nameProduct: string;
  priceProduct: number;
  imageProduct: string
  count: number;
  setCount: (n: number) => void
}

export default function OperationProducts({ count, setCount, nameProduct, priceProduct, imageProduct }: propAddCartProducts) {
  const { setCountProducts, setProductCart, seTtotalPrices } = useStore();

  const handleCountAdd = () => {
    let newCount = count + 1;
    setCount(newCount)
    setCountProducts(1)
    setProductCart({
      name: nameProduct,
      price: priceProduct,
      priceTotal: priceProduct,
      count: 1,
      img: imageProduct
    })
    seTtotalPrices()
  }
  const handleCountMinus = () => {
    if (count > 0) {
      let newCount = count - 1;
      setCount(newCount)
      setCountProducts(-1)
      setProductCart({
        name: nameProduct,
        price: priceProduct,
        priceTotal: priceProduct,
        count: -1
      })
      seTtotalPrices()
    }
  }

  return (
    <>
      <span onClick={handleCountMinus}>
        <CiCircleMinus id="circleMinus" className="sm:w-6 sm:h-6 w-8 h-8" />
      </span>
      <p className="sm:text-sm text-lg">{count}</p>
      <span onClick={handleCountAdd}>
        <IoIosAddCircleOutline id="circleAdd" className="sm:w-6 sm:h-6 w-8 h-8" />
      </span>
    </>
  )
}
