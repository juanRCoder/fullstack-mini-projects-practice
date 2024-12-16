export default function ConfirmOrder({ setToggleModal }: { setToggleModal: (bool: boolean) => void }) {
  return (
    <div className='px-5'>
      <button
        onClick={() => setToggleModal(true)}
        className='w-full py-3 bg-orange-500 hover:bg-orange-700 transition text-white rounded-full'
      >
        Confirm Order
      </button>
    </div>
  )
}
