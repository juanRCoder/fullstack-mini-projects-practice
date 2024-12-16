import { useStore } from '../../store/productsStore'


export default function DessertCartModal() {
  const producCart = useStore((state) => state.productCart);

  return (
    <article className="scrollBar max-h-80 sm:max-h-60 overflow-auto ">
      {producCart.map(pr => (
        <section key={pr.name} className="flex items-center justify-between  sm:gap-32 p-4 border-b">
          <div className="flex gap-4">
            <span>
              <img
                src={`/images/${pr.img}`}
                alt={`image-${pr.name}`}
                height={56}
                width={56}
              />
            </span>
            <section className="pr-6">
              <p className='text-sm sm:text-base'>{pr.name}</p>
              <div className="flex items-center gap-2">
                <b className='text-orange-500 font-semibold pr-5 text-sm sm:text-base'>{pr.count}x</b>
                <p className='text-sm sm:text-base'>@ ${(pr.price).toFixed(2)}</p>
              </div>
            </section>
          </div>
          <b className='text-orange-950/75 font-semibold pl-3 text-xl'>${(pr.priceTotal).toFixed(2)}</b>
        </section>
      ))}
    </article>
  )
}
