type propFooter = { clases: string };

function Footer({ clases }: propFooter) {
  return (
    <footer className={`flex-none ${clases}`}>
      Realizado por Juan Ramirez | JuanRCoder
    </footer>
  )
}

export default Footer