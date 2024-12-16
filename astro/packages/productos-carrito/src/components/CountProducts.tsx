import { useStore } from "../store/productsStore";


export default function CountProducts() {
  const countProducts = useStore(state => state.countProducts);

  return (
    <p className="text-orange-500 text-2xl font-bold p-5">
      Your Cart ({countProducts})
    </p>
  )
}
