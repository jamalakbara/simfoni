const Description = ({children, className}) => {
  return (
    <div className={`text-2xl ${className?className:''}`}>
      {children}
    </div>
  )
}

export default Description