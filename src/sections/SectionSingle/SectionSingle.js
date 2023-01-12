const SectionSingle = ({children, className}) => {
  return (
    <section className={`relative min-h-screen p-12 ${className?className:''}`}>
      {children}
    </section>
  )
}

export default SectionSingle