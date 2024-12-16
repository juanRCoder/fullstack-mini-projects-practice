import { useState } from 'react';
import { useStore } from '../store/productsStore';
import Modal from './modal/Modal';
import DessertsCart from './DessertsCart';
import ConfirmOrder from './ConfirmOrder';


export default function ProductsInCart() {
  const { totalPrices, productCart } = useStore();
  const [toggleModal, setToggleModal] = useState<boolean>(false);


  return (
    <>
      <section className=''>
        {
          productCart.length > 0 ? (
            <>
              <DessertsCart />
              <div className='my-7 mx-5 flex justify-between items-center text-orange-950 font-semibold'>
                <p className='font-medium'>Order Total</p>
                <p className='text-3xl font-bold'>${totalPrices.toFixed(2)}</p>
              </div>
              <div className='flex gap-2 justify-center pb-4'>
                <span>
                  <img
                    src="/icons/icon-carbon-neutral.svg"
                    alt='icon carbon-neutral'
                    height={25}
                    width={25}
                  />
                </span>
                <p className='text-sm text-orange-950/70 mb-5'>
                  This is a <b>carbon-neutral</b> delivery
                </p>
              </div>
              <ConfirmOrder setToggleModal={setToggleModal} />
              {
                toggleModal &&
                <Modal
                  toggleModal={(bool) => setToggleModal(bool)}
                  totalPrices={totalPrices}
                />
              }
            </>
          ) : (
            <span className='flex flex-col items-center gap-5'>
              <img
                src="/icons/illustration-empty-cart.svg"
                alt='imagen empty-card'
                loading="eager"
                width={100}
                height={100}
              />
              <p className="pb-4 text-center text-orange-950 text-sm">
                Your added items will appear here
              </p>
            </span>
          )
        }
      </section>
    </>
  )
}
