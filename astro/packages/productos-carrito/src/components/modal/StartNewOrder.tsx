import { useStore } from "../../store/productsStore";


export default function StartNewOrder({ toggleModal }: { toggleModal: (bool: boolean) => void }) {
  const resetCartOrder = useStore((state) => state.resetCartOrder);

  const handleSubmit = () => {
    toggleModal(false)
    resetCartOrder();
  }

  return (
    <div>
      <button
        onClick={handleSubmit}
        className='sm:mt-0 sm:text-base sm:py-3 mt-5 w-full text-lg py-4 bg-orange-500 hover:bg-orange-700 transition text-white rounded-full'
      >
        Start New Order
      </button>
    </div>
  )
}
