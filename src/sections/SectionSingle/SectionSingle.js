const SectionSingle = ({children, className, style}) => {
  return (
    <section style={style} className={`relative min-h-screen p-12 ${className?className:''}`}>
      {children}
    </section>
  )
}

export default SectionSingle