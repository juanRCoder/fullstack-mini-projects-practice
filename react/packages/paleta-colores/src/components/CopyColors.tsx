
function CopyColor({ copy }: { copy: boolean }) {
    return (
      <div style={{
        top: (copy ? '0px' : '-100px'),
        transition: 'top 0.3s ease-in-out'
      }} className="z-40 font-semibold text-2xl bg-slate-600 text-center text-white py-8 absolute w-full">
        Color copiado!
      </div>
    )
  }
  
  export default CopyColor;