import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SectionSplit = ({children, reverse}) => {
  return (
    <section className={`min-h-screen relative flex gap-40 p-12 items-center w-full ${reverse?'flex-row-reverse' :''}`}>
      {children}
    </section>
  )
}

export default SectionSplit