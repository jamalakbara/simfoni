import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SectionSplit = ({children, reverse, className, style}) => {
  return (
    <section style={style} className={`relative flex w-full
                                        xl:min-h-screen xl:gap-40 xl:p-12 
                                        md:items-center 
                                        md:flex-row md:p-8
                                        sm:p-5 sm:flex-col sm:min-h-0 sm:gap-8 
                                        ${reverse?'flex-row-reverse md:flex-row-reverse' :''} ${className?className:''}`}
    >
      {children}
    </section>
  )
}

export default SectionSplit