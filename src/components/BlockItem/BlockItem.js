import Description from '../Description/Description'

const BlockItem = ({src,header,desc, className}) => {
  return (
    <div className={`shadow-lg rounded-3xl p-5 flex flex-col bg-white 
                      sm:h-auto sm:w-96
                      xl:h-72
                      2xl:w-full
                      ${className?className:''}`}>
      <figure className='w-16 h-16'>
        <img src={src} alt={src} />
      </figure>
      <div className='mt-5'>
        <h1 className='font-semibold mb-5 capitalize 
                        sm:text-lg 
                        xl:text-2xl'
        >
          {header}
        </h1>
        <Description className={'sm:text-base xl:text-xl'}>
          <p>
            {desc}
          </p>
        </Description>
      </div>
    </div>
  )
}

export default BlockItem