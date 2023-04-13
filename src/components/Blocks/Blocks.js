import Block from '../BlockItem/BlockItem'

const Blocks = ({blocks}) => {
  return (
    <div className='sm:grid sm:grid-cols-1 sm:gap-11 sm:place-items-center 
                    md:flex md:flex-wrap md:justify-center
                    2xl:grid 2xl:grid-cols-3 2xl:gap-24'
    >
      {blocks.map(block => (
        <Block key={block.key} src={block.icon} header={block.header} desc={block.description} />
      ))}
    </div>
  )
}

export default Blocks