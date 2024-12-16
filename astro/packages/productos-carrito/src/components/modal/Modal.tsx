import "../../styles/Modal.css";
import DessertCartModal from "./DessertCartModal";
import StartNewOrder from "./StartNewOrder";


type typeModal = {
  toggleModal: (bool: boolean) => void;
  totalPrices: number
};


export default function Modal({ toggleModal, totalPrices }: typeModal) {

  return (
    <aside className='sm:items-center items-end fixed w-full min-h-screen bottom-0 sm:top-0 left-0 bg-black/40 flex justify-center'>
      <section className='w-full sm:w-fit px-5 py-7 sm:p-8 bg-white rounded-tl-3xl rounded-tr-3xl sm:rounded-2xl'>
        <span>
          <img
            src="/icons/icon-order-confirmed.svg"
            alt="icon order-confirmed"
            height={50}
            width={50}
          />
        </span>
        <h2 className="pt-7 text-orange-950 font-bold text-3xl">Order Confirmed</h2>
        <p className="sm:pl-0 text-zinc-500 text-base pt-1 pb-8">We hope you enjoy your food</p>

        <div className="bg-purple-50 rounded-md">
          <DessertCartModal />
          <div className=' py-4 mx-5 flex justify-between items-center text-orange-950 font-semibold'>
            <p className='font-medium'>Order Total</p>
            <p className='text-3xl font-bold'>${totalPrices.toFixed(2)}</p>
          </div>
        </div>
        <StartNewOrder toggleModal={toggleModal} />
      </section>
    </aside>
  )
}
